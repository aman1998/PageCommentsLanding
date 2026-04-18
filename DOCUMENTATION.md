# SiteReview (html-comments)

Документация для разработчиков: назначение проекта, архитектура, функционал, тарифы, хранение данных и сборка.

## Кратко о продукте

**SiteReview** — расширение Chrome (Manifest V3) для ревью веб-страниц: якорные комментарии поверх страницы, боковая панель, истории по сайтам (origin), шаблоны комментариев, палитры акцента, пресеты устройств и вьюпорта, скриншоты и экспорт отчёта в PDF.

Внутреннее имя npm-пакета: `html-comments` ([package.json](package.json)).

## Стек

| Компонент | Технология |
|-----------|------------|
| UI | React 19, TypeScript |
| Сборка | Vite 7, `@crxjs/vite-plugin` |
| Состояние | Zustand |
| PDF | jsPDF |
| API расширения | Chrome Extensions MV3 (`chrome.*`) |

Скрипты: `npm run dev` (Vite), `npm run build` — `tsc -b && vite build`. Готовый zip для распространения: плагин `vite-plugin-zip-pack` кладёт файл в каталог `release/` (имя вида `crx-html-comments-<version>.zip`, см. [vite.config.ts](vite.config.ts)).

## Архитектура

- **Manifest** ([manifest.config.ts](manifest.config.ts)): MV3, `background` — service worker [`src/background/index.ts`](src/background/index.ts), `content_scripts` — [`src/content/main.tsx`](src/content/main.tsx) на всех `http://*/*` и `https://*/*`, `run_at: document_idle`.
- **Права**: `storage`, `unlimitedStorage`, `activeTab`, `scripting`, `tabs`, `downloads`; `host_permissions` — `http://*/*`, `https://*/*`.
- **Popup** ([src/popup/App.tsx](src/popup/App.tsx)): обмен сообщениями с content script активной вкладки (`chrome.tabs.sendMessage`, `frameId: 0`) — состояние UI, включение расширения, запрос экспорта PDF и т.д.
- **Service worker**: флаг «расширение включено для вкладки» в `chrome.storage.local` (ключи вида `srTabExtensionOn_<tabId>`); снимок видимой вкладки (`captureVisibleTab`); загрузка PDF через `chrome.downloads`; настройка доступа к `chrome.storage.session` для content scripts (см. комментарии в [src/background/index.ts](src/background/index.ts)).
- **Content script**: монтирует runtime UI (HUD, сайдбар, оверлеи), обрабатывает клики по странице, хранит и отображает комментарии, синхронизируется с background и popup через типизированные сообщения ([src/shared/messages.ts](src/shared/messages.ts)).

Поток «вкл/выкл на сайте»: иконка действия (`chrome.action.onClicked`) и/или сообщения `SET_EXTENSION_ENABLED` — согласование с флагом вкладки и состоянием в странице (`GET_RUNTIME_STATE` / `SET_EXTENSION_ENABLED`).

## Пользовательский функционал

Реализация сосредоточена в [`src/content/main.tsx`](src/content/main.tsx), UI-слоях [`src/content/RuntimeHud.tsx`](src/content/RuntimeHud.tsx), [`src/sidebar/`](src/sidebar/), [`src/bottombar/`](src/bottombar/), оверлее скриншота и модалках экспорта.

- **Включение/выключение** расширения на текущей вкладке; при выключении — снятие оверлеев, восстановление вьюпорта/скролла страницы по коду.
- **Комментарии**: позиция на странице, привязка к элементу/контексту (селектор, текстовый контекст), теги, приоритет, статус (open/resolved), скрытие, изображения вложений, нумерация.
- **Истории**: несколько «сессий» ревью на один origin; переключение активной истории; панель историй в сайдбаре.
- **Шаблоны комментариев**: создание и выбор шаблона; на Free доступен только шаблон по умолчанию (см. тарифы).
- **Внешний вид**: палитры акцента; на Free — ограниченный набор id палитр ([src/shared/planLimits.ts](src/shared/planLimits.ts), [src/shared/primaryPalettes.ts](src/shared/primaryPalettes.ts)).
- **Вьюпорт / устройства**: эмуляция ширины/высоты, пресеты устройств; на Free — ограничение по устройствам (см. копирайт планов в [src/shared/planCopy.ts](src/shared/planCopy.ts)).
- **Скриншот**: захват области с привязкой к комментарию ([src/content/screenshotOverlay.ts](src/content/screenshotOverlay.ts), утилиты кропа).
- **Экспорт PDF**: сборка документа из комментариев ([src/export/commentsPdf.ts](src/export/commentsPdf.ts)), превью/модалка, скачивание через background.
- **Сайдбар**: панели комментариев и историй, видимость, прокрутка к комментарию; часть состояния в runtime storage.

Сообщения popup → content (см. [src/shared/messages.ts](src/shared/messages.ts)): например `GET_RUNTIME_STATE`, `SET_EXTENSION_ENABLED`, `SET_SIDEBAR_VISIBLE`, `REQUEST_PDF_EXPORT`, `SCROLL_TO_COMMENT`, `TOGGLE_STATUS`. Режим «только комментирование» через `SET_COMMENTING` в коде помечен как не поддерживаемый (ответ с сообщением об этом).

## Тарифы: Free и Pro

Копирайт в UI описывает **разовую оплату Pro — $25, без подписки** ([src/shared/planCopy.ts](src/shared/planCopy.ts)). Разблокировка Pro хранится локально: ключ `sr-pro-unlocked` в `chrome.storage.local` ([src/storage/proEntitlementsStorage.ts](src/storage/proEntitlementsStorage.ts)). URL оплаты задаётся в [src/shared/checkout.ts](src/shared/checkout.ts) (`PRO_CHECKOUT_URL`) — **заглушка**, её нужно заменить на реальный checkout.

Лимиты из кода ([planLimits.ts](src/shared/planLimits.ts), согласовано с таблицей в `planCopy`):

| Возможность | Free | Pro |
|-------------|------|-----|
| Комментариев на странице | 10 | без лимита (в коде) |
| PDF-экспортов в сутки | 10 | без лимита |
| Сайтов (origins) с сохранёнными комментариями | 3 | без лимита |
| Изображений на комментарий | 1 | 5 (`PRO_MAX_IMAGES_PER_COMMENT`) |
| Шаблоны | только встроенный default | все пользовательские |
| Акцентные цвета (палитры) | 2 id (`emerald`, `blue`) | все |
| Устройства / вьюпорт | по копирайту — default | все пресеты |

Подсказки при приближении к лимитам задаются порогами `FREE_COMMENT_LIMIT_WARNING_THRESHOLD` и `FREE_EXPORT_LIMIT_WARNING_THRESHOLD` в [planLimits.ts](src/shared/planLimits.ts).

Для локальной разработки возможен принудительный Pro через [src/shared/proDev.ts](src/shared/proDev.ts) (`DEV_FORCE_PRO`), без продакшен-логики.

## Данные и хранилища

- **`chrome.storage.local`**: Pro-флаг, состояние runtime UI ([src/storage/runtimeUiStorage.ts](src/storage/runtimeUiStorage.ts)), шаблоны ([src/storage/templatesStorage.ts](src/storage/templatesStorage.ts)), использование экспорта ([src/storage/exportUsageStorage.ts](src/storage/exportUsageStorage.ts)), активная история по origin, флаги вкладок и др. модули в [`src/storage/`](src/storage/).
- **`chrome.storage.session`**: обмен данными между вкладками/навигацией (например отложенные подсказки истории); доступ из content script настраивается в background.
- **IndexedDB**: база `sr-site-review-comments` — истории, комментарии, вложения ([src/storage/commentsIdb.ts](src/storage/commentsIdb.ts)).

Детали схемы и ключей — в исходниках перечисленных модулей.

## Разработка и установка

1. `npm install`
2. `npm run dev` — dev-сервер Vite (CRXJS)
3. В Chrome: `chrome://extensions/` → режим разработчика → «Загрузить распакованное» → каталог **`dist`** после сборки dev или production
4. `npm run build` — production-сборка в `dist/`
5. Архив расширения: `release/crx-html-comments-<version>.zip` после сборки

Официальные ссылки на шаблон и инструменты см. в [README.md](README.md).

## Планы и дорожная карта

В репозитории **нет** централизованного списка TODO или roadmap. Этот раздел можно заполнять вручную (например идеи продуктовые задачи, интеграция реального checkout, тесты, публикация в Chrome Web Store) или вести отдельно в issues.

---

## Ключевые файлы для навигации

| Назначение | Путь |
|------------|------|
| Манифест | [manifest.config.ts](manifest.config.ts) |
| Service worker | [src/background/index.ts](src/background/index.ts) |
| Content script, основная логика | [src/content/main.tsx](src/content/main.tsx) |
| Типы комментариев и шаблонов | [src/shared/types.ts](src/shared/types.ts) |
| Лимиты и тексты планов | [src/shared/planLimits.ts](src/shared/planLimits.ts), [src/shared/planCopy.ts](src/shared/planCopy.ts) |
| Сообщения расширения | [src/shared/messages.ts](src/shared/messages.ts) |
| Сборка | [vite.config.ts](vite.config.ts) |

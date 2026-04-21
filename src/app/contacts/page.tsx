import { SITE_CONFIG } from "@/config/constants";
import { useTranslations } from "next-intl";

export default function Contacts() {
  const t = useTranslations("Index");
  return (
    <div className="max-w-6xl mx-auto min-h-[calc(100vh-14rem)] flex flex-col gap-4 items-center justify-center">
      <h1 className="text-2xl font-bold">{t("footer.contact")}</h1>
      <div className="flex flex-col gap-2">
        <a
          href={`https://t.me/${SITE_CONFIG.telegram}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Telegram:{" "}
          <span className="text-blue-500">@{SITE_CONFIG.telegram}</span>
        </a>
        <a>Email: {SITE_CONFIG.email}</a>
      </div>
    </div>
  );
}

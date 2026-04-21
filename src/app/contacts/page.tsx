import { SITE_CONFIG } from "@/config/constants";

export default function Contacts() {
  return (
    <div className="container mx-auto pt-4 sm:pt-8">
      <h1 className="text-2xl font-bold">Contact</h1>
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

import { getRequestConfig } from "next-intl/server";

export const locales = ["en", "fr", "ar"];
export const defaultLocale = "en";

// Pre-import messages to avoid dynamic imports
import enMessages from "../../messages/en.json";
import frMessages from "../../messages/fr.json";
import arMessages from "../../messages/ar.json";

export default getRequestConfig(async ({ locale }) => {
  const messages = {
    en: enMessages,
    fr: frMessages,
    ar: arMessages,
  };

  return {
    messages: messages[locale],
    timeZone: "UTC",
    now: new Date(),
    defaultLocale,
    locales,
  };
});

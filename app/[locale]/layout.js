import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { locales } from "../i18n/request";

// Metadata for the layout
export const metadata = {
  title: {
    default: "My Portfolio",
    template: "%s | My Portfolio",
  },
  description: "My Portfolio Website",
};

// Generate static params for all supported locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = await getMessages(locale);
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider
          messages={messages}
          locale={locale}
          timeZone="UTC"
        >
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

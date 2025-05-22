import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./app/i18n/request";

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "as-needed",
});

export const config = {
  matcher: ["/", "/(fr|en|ar)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"],
};

import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  const resolvedLocale = locale || 'fr';
  
  try {
    const messages = (await import(`../messages/${resolvedLocale}.json`)).default;
    return {
      messages,
      locale: resolvedLocale 
    };
  } catch (error) {
    const messages = (await import('../messages/fr.json')).default;
    return {
      messages,
      locale: 'fr'
    };
  }
});

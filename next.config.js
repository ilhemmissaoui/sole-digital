import createNextIntlPlugin from "next-intl/plugin";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Specify the path to the i18n configuration
const withNextIntl = createNextIntlPlugin("./app/i18n/request.js");

const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "css")],
  },
  trailingSlash: true,
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default withNextIntl(nextConfig);

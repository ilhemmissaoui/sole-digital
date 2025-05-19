const path = require('path');
const createNextIntlPlugin = require('next-intl/plugin');

const nextConfig = {
  output: 'export', 
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'css')],
  },
  trailingSlash: true,
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

const withNextIntl = createNextIntlPlugin({
  locales: ['en', 'fr', 'ar'], 
  defaultLocale: 'fr'
});
module.exports = withNextIntl(nextConfig);

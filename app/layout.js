import "./globals.css";

export const metadata = {
  title: {
    default: "Sole Digital Media | Digital Marketing Agency",
    template: "%s | Sole Digital Media",
  },
  description:
    "Transform your digital presence with Sole Digital Media. We offer expert digital marketing, SEO, social media management, and web development services.",
  keywords: [
    "digital marketing agency",
    "SEO services",
    "social media marketing",
    "digital advertising",
    "content marketing",
    "web development",
    "PPC advertising",
    "brand strategy",
  ],
  metadataBase: new URL("https://soledigitalmedia.com"),
  openGraph: {
    title: "Sole Digital Media | Digital Marketing Agency",
    description:
      "Transform your digital presence with Sole Digital Media. Expert digital marketing solutions for your business.",
    url: "https://soledigitalmedia.com",
    siteName: "Sole Digital Media",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sole Digital Media - Digital Marketing Agency",
      },
    ],
  },
  other: {
    "facebook-domain-verification": "",
    "facebook:page": "https://www.facebook.com/soledigitalmedia",
    "instagram:username": "@soledigitalmedia",
    "linkedin:company": "https://www.linkedin.com/company/sole-digital-media",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
  },
  alternates: {
    canonical: "https://soledigitalmedia.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}

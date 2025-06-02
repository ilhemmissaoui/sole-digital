import generateStylesheetObject from "@/common/generateStylesheetsObject";
import Lines from "@/components/common/Lines";
import ProgressScroll from "@/components/common/ProgressScroll";
import Cursor from "@/components/common/cusor";
import LoadingScreen from "@/components/common/loader";
import Clients from "@/components/home-main/Clients";
import Feat from "@/components/home-main/Feat";
import Footer from "@/components/common/Footer";
import Header from "@/components/home-main/Header";
import Intro from "@/components/home-main/Intro";
import Marq2 from "@/components/common/Marq2";
import Navbar from "@/components/common/Navbar";
import Portfolio from "@/components/home-main/Portfolio";
import Services from "@/components/home-main/Services";
import Testimonials from "@/components/home-main/Testimonials";
import Script from "next/script";
import Marq from "@/components/home-main/Marq";
import About from "@/components/tiktok-section/About";

export const metadata = {
  title: "Sole Digital Media | Leading Digital Marketing Agency",
  description:
    "Transform your business with Sole Digital Media's expert digital marketing services. Specializing in SEO, social media, content marketing, and digital advertising solutions.",
  keywords:
    "digital marketing agency, social media marketing, SEO services, digital advertising, content marketing",
  alternates: {
    canonical: "https://soledigitalmedia.com",
  },
  icons: {
    icon: "/assets/imgs/Logo.svg",
    shortcut: "/assets/imgs//Logo.svg",
    other: generateStylesheetObject([
      "/assets/css/plugins.css",
      "/assets/css/style.css",
      "https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap",
      "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap",
    ]),
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  name: "Sole Digital Media",
  description:
    "Professional digital marketing agency offering comprehensive marketing solutions",
  url: "https://soledigitalmedia.com",
  logo: "https://soledigitalmedia.com/assets/imgs/favicon.ico",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Your City",
    addressRegion: "Your Region",
    addressCountry: "Your Country",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "your-phone",
    contactType: "customer service",
  },
  sameAs: [
    "https://www.facebook.com/soledigitalmedia",
    "https://www.instagram.com/soledigitalmedia",
    "https://www.linkedin.com/company/sole-digital-media",
  ],
};

export default async function Home() {
  return (
    <body>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />
      <Lines />
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="main-bg o-hidden">
            <div></div>

            <Header />

            <Intro />
            {/* <Marq /> */}
            <Services />
            <About />
            <Portfolio />
            <Feat />
            <Testimonials />
            {/* <Clients /> */}
            {/* <Marq2 /> */}
          </main>
          <Footer />
        </div>
      </div>

      <Script
        src="/assets/js/ScrollTrigger.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/js/ScrollSmoother.min.js"
        strategy="beforeInteractive"
      />
      <Script strategy="beforeInteractive" src="/assets/js/plugins.js"></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/TweenMax.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/charming.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/countdown.js"
      ></Script>

      <Script
        strategy="beforeInteractive"
        src="/assets/js/gsap.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/splitting.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/isotope.pkgd.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/imgReveal/imagesloaded.pkgd.min.js"
      ></Script>
      {/* <Script src="/assets/js/smoother-script.js" strategy="lazyOnload" /> */}
      <Script src="/assets/js/scripts.js"></Script>
    </body>
  );
}

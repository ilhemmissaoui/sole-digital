import generateStylesheetObject from "@/common/generateStylesheetsObject";
import Lines from "@/components/common/Lines";
import ProgressScroll from "@/components/common/ProgressScroll";
import Cursor from "@/components/common/cusor";
import LoadingScreen from "@/components/common/loader";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Script from "next/script";
import Header1 from "@/components/blog-details/Header1";
import Header2 from "@/components/blog-details/Header2";
import Header3 from "@/components/blog-details/Header3";

import Blog1 from "@/components/blog-details/Blog1";
import Blog2 from "@/components/blog-details/Blog2";
import Blog3 from "@/components/blog-details/Blog3";

// ✅ Exported outside the component
export function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
    { id: "7" },
    { id: "8" },
  ];
}

export const metadata = {
  title: "webfolio",
  icons: {
    icon: "/assets/imgs/favicon.ico",
    shortcut: "/assets/imgs/favicon.ico",
    other: generateStylesheetObject([
      "/assets/css/plugins.css",
      "/assets/css/style.css",
      "https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap",
      "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap",
    ]),
  },
};
export default function BlogDetailsPage({ params }) {
  const { id } = params;

  const renderHeader = () => {
    switch (id) {
      case "1":
        return <Header1 />;
      case "2":
        return <Header2 />;
      case "3":
        return <Header3 />;
      default:
        return <Header1 />; // fallback
    }
  };

  const renderBlog = () => {
    switch (id) {
      case "1":
        return <Blog1 />;
      case "2":
        return <Blog2 />;
      case "3":
        return <Blog3 />;
      default:
        return <Blog1 />; // fallback
    }
  };

  return (
    <body>
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />
      <Lines />
      <div id="smooth-wrapper">
        <Navbar />
        <div id="smooth-content">
          <main className="main-bg">
            {renderHeader()}
            {renderBlog()}
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
      <Script src="/assets/js/plugins.js" strategy="beforeInteractive" />
      <Script src="/assets/js/TweenMax.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/charming.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/countdown.js" strategy="beforeInteractive" />
      <Script src="/assets/js/gsap.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/splitting.min.js" strategy="beforeInteractive" />
      <Script
        src="/assets/js/isotope.pkgd.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/js/imgReveal/imagesloaded.pkgd.min.js"
        strategy="beforeInteractive"
      />
      <Script src="/assets/js/scripts.js" />
    </body>
  );
}

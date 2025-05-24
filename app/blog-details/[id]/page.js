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
import Header4 from "@/components/blog-details/Header4";
import Header5 from "@/components/blog-details/Header5";
import Header6 from "@/components/blog-details/Header6";
import Header7 from "@/components/blog-details/Header7";
import Header8 from "@/components/blog-details/Header8";

import Blog1 from "@/components/blog-details/Blog1";
import Blog2 from "@/components/blog-details/Blog2";
import Blog3 from "@/components/blog-details/Blog3";
import Blog4 from "@/components/blog-details/Blog4";
import Blog5 from "@/components/blog-details/Blog5";
import Blog6 from "@/components/blog-details/Blog6";
import Blog7 from "@/components/blog-details/Blog7";
import Blog8 from "@/components/blog-details/Blog8";

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
  title: "SoleDigitalMedia",
   icons: {
     icon: "/assets/imgs/Logo.svg",
     shortcut: "/assets/imgs/Logo.svg",
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
      case "4":
        return <Header4 />;
      case "5":
        return <Header5 />;
      case "6":
        return <Header6 />;
      case "7":
        return <Header7 />;
      case "8":
        return <Header8 />;
      default:
        return <Header1 />;
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
      case "4":
        return <Blog4 />;
      case "5":
        return <Blog5 />;
      case "6":
        return <Blog6 />;
      case "7":
        return <Blog7 />;
      case "8":
        return <Blog8 />;
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

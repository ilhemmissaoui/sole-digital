"use client";
import React, { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import loadBackgroudImages from "@/common/loadBackgroudImages";
function Header() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(".header", { y: 200 }, { y: 0 }, "+=2.5");
    tl.fromTo(
      ".header .container",
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      "-=0"
    );

    return () => tl.kill();
  }, []);
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <section className="services section-padding position-relative">
      <style jsx>{`
        .services {
          overflow: hidden;
        }
        .services::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url("/assets/imgs/background/bg1.jpg");
          background-size: cover;
          background-position: center;
          animation: zoomInOut 3s infinite alternate ease-in-out;
          z-index: 0;
        }
        @keyframes zoomInOut {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.3);
          }
        }

        .container {
          position: relative;
          z-index: 2;
        }

        .text-center {
          position: relative;
          z-index: 2;
          color: #fff;
        }

        h1 {
          position: relative;
          z-index: 2;
          color: #fff;
          margin-bottom: 30px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        p {
          position: relative;
          z-index: 2;
          color: rgba(255, 255, 255, 0.9);
          max-width: 800px;
          margin: 0 auto;
        }
      `}</style>
      <div
        className="overlay-dark"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1,
        }}
      ></div>
      <div className="container ">
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <h1 className="text-u ls1 fz-80">
                Blog <span className="fw-200"> Post</span>
              </h1>
              <p>
                Welcome to the Sole Digital Media blog, your go-to resource for
                the latest insights, strategies, and trends in digital
                marketing. Our blog is designed to provide you with in-depth
                knowledge and actionable tips to help your business thrive in
                the ever-evolving digital landscape. From expert advice on SEO
                and social media marketing to comprehensive guides on influencer
                marketing and content creation, we cover a wide range of topics
                to support your digital growth journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;

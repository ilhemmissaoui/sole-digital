"use client";
import React, { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import loadBackgroudImages from "@/common/loadBackgroudImages";

function Header() {
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.5,
    });

    // Split text into spans
    const heading = document.querySelector(".animate-text");

    // Initial animation for the header
    tl.fromTo(".header", { y: 200 }, { y: 0 }, "+=1");
    tl.fromTo(
      ".header .container",
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      "-=0.5"
    );

    // Text reveal animation
    tl.to(".animate-text span", {
      opacity: 1,
      duration: 0.5,
      stagger: 0.1,
      ease: "none",
    }).to(
      ".animate-text span",
      {
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "none",
      },
      "+=1"
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
      `}</style>
      <div
        className="overlay-dark"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(22, 22, 22, 0.7)",
        }}
      ></div>
      <div
        className="container pt-80"
        style={{ position: "relative", zIndex: 2 }}
      >
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <h1 className="fz-80" style={{ color: "#fff" }}>
                ABOUT SOLE DIGITAL MEDIA
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;

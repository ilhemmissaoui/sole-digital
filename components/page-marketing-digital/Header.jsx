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
    const text = heading.textContent;
    heading.textContent = "";
    text.split("").forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char;
      span.style.display = "inline-block";
      span.style.opacity = "0";
      heading.appendChild(span);
    });

    // Repeating reveal animation
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
    <div
      className="header page-header bg-img section-padding valign"
      data-background="/assets/imgs/background/bg4.jpg"
      data-overlay-dark="8"
    >
      <div className="container pt-80">
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <h1 className="text-u ls1 fz-80 animate-text">
                Digital <span className="fw-200">marketing</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

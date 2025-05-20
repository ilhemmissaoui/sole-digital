"use client";
import React, { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import loadBackgroudImages from "@/common/loadBackgroudImages";
function Header1() {
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
    <div
      className="header page-header bg-img section-padding valign"
      data-background="/assets/imgs/background/bg4.jpg"
      data-overlay-dark="8"
    >
      <div className="container mt-80">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="caption">
              <h3 className="text-u ls1 fz-70">
                Get to the limelight with Professional SEO Services
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div
        className="background bg-img mt-80"
        data-background="/assets/imgs/blog/b1.jpg"
      ></div>
    </div>
  );
}

export default Header1;

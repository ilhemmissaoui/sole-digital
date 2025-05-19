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
    <div
      className="header page-header bg-img section-padding valign"
      data-background="/assets/imgs/background/bg4.jpg"
      data-overlay-dark="8"
    >
      <div className="container pt-80">
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
    </div>
  );
}

export default Header;

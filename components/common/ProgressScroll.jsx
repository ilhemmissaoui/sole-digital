"use client";
import React, { useEffect } from "react";
//= Scripts

import scrollToTop from "@/common/scrollToTop";
const ProgressScroll = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <a
        href="https://api.whatsapp.com/send/?phone=971529893134&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/assets/imgs/icons/whatsapp.png"
          alt="WhatsApp"
          style={{
            width: "50px",
            height: "50px",
            position: "fixed",
            right: "30px",
            bottom: "30px",
            zIndex: 1000,
            borderRadius: "50%",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        />
      </a>
      <div
        className="progress-wrap cursor-pointer"
        style={{
          position: "fixed",
          right: "90px",
          bottom: "30px",
          zIndex: 1000,
        }}
      >
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
    </>
  );
};

export default ProgressScroll;

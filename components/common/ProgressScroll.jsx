"use client";
import React, { useEffect, useState } from "react";
//= Scripts
import scrollToTop from "@/common/scrollToTop";

const ProgressScroll = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        style={{
          position: "fixed",
          right: "30px",
          bottom: "30px",
          zIndex: 1000,
          cursor: "pointer",
        }}
      >
        <img
          src="/assets/imgs/icons/whatsapp.png"
          alt="WhatsApp"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        />
      </div>

      {showModal && (
        <>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.5)",
              zIndex: 1001,
            }}
            onClick={() => setShowModal(false)}
          />
          <div
            style={{
              position: "fixed",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              zIndex: 1002,
              width: "300px",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                marginBottom: "15px",
                color: "#075e54",
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
              Select WhatsApp Number
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <a
                href="https://api.whatsapp.com/send/?phone=21658944414&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#25D366",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "5px",
                  width: "100%",
                  textAlign: "center",
                  fontSize: "16px",
                }}
              >
                Tunisia: +216 58 944 414
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=19057454395&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#25D366",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "5px",
                  width: "100%",
                  textAlign: "center",
                  fontSize: "16px",
                }}
              >
                Canada: +1 (905) 745 4395
              </a>
            </div>
          </div>
        </>
      )}

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

"use client";
import React, { useEffect, useState, useRef } from "react";

function Intro() {
  const [expanded, setExpanded] = useState(false);
  const textRef = useRef(null);

  return (
    <section className="intro-creative">
      <style jsx>{`
        .intro-creative {
          position: relative;
          padding: 120px 0;
          background: #000;
          overflow: hidden;
          min-height: 150vh;
          display: flex;
          align-items: center;
        }

        .content-wrapper {
          position: relative;
          z-index: 1;
          max-width: 800px;
          margin: 0 auto;
          padding: 3rem;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 20px;
          box-shadow: 0 0 40px rgba(255, 151, 30, 0.1);
          animation: pulse 4s infinite;
        }

        .content-wrapper::before,
        .content-wrapper::after {
          content: "";
          position: absolute;
          inset: -2px;
          background: linear-gradient(45deg, #ff971e, transparent, #ff971e);
          border-radius: 20px;
          z-index: -1;
          animation: rotate 4s linear infinite;
        }

        .content-wrapper::after {
          filter: blur(20px);
          opacity: 0.5;
        }

        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }

        .intro-title {
          font-size: 3rem;
          font-weight: 800;
          text-align: center;
          margin-bottom: 2rem;
          background: linear-gradient(45deg, #fff, #ff971e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: glow 3s infinite alternate;
        }

        @keyframes glow {
          from {
            text-shadow: 0 0 20px rgba(255, 151, 30, 0.5);
          }
          to {
            text-shadow: 0 0 30px rgba(255, 151, 30, 0.8);
          }
        }

        .intro-text {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.1rem;
          line-height: 1.8;
          text-align: center;
          margin-bottom: 2rem;
          position: relative;
          z-index: 1;
        }

        .more-link {
          display: inline-flex;
          align-items: center;
          color: #ff971e;
          font-weight: 500;
          padding: 0.8rem 1.5rem;
          border: 1px solid rgba(255, 151, 30, 0.3);
          border-radius: 30px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .more-link::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          background: rgba(255, 151, 30, 0.1);
          transition: width 0.3s ease;
        }

        .more-link:hover::before {
          width: 100%;
        }

        .more-link:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(255, 151, 30, 0.2);
        }

        @media (max-width: 768px) {
          .intro-creative {
            padding: 60px 20px;
          }

          .intro-title {
            font-size: 2rem;
          }

          .content-wrapper {
            padding: 2rem;
          }
        }
      `}</style>

      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            position: "absolute",
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            background: "#ff971e",
            borderRadius: "50%",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.3,
            animation: `float ${Math.random() * 10 + 5}s linear infinite`,
          }}
        />
      ))}

      <div className="content-wrapper">
        <h1 className="intro-title">
          Unlock Your Brand&apos;s Digital Potential with Sole Digital Media
        </h1>

        <p
          ref={textRef}
          className="intro-text"
          style={{
            transition: "all 0.3s ease",
          }}
        >
          At Sole Digital Media, we believe in the power of individual
          contributions to drive collective success. Our full-suite digital
          marketing services are strategically designed to amplify your
          brand&apos;s online visibility, engage your target audience, and
          deliver measurable ROI. Backed by a team of seasoned professionals, we
          harness the latest tools, data-driven strategies, and creative
          solutions—tailored specifically to your business objectives.
        </p>

        <div className="text-center mt-40">
          <a href="/page-about" className="more-link">
            More About Us <i className="ti-arrow-top-right"></i>
          </a>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(
              ${Math.random() * 200 - 100}px,
              ${Math.random() * 200 - 100}px
            );
          }
        }
      `}</style>
    </section>
  );
}

export default Intro;

"use client";
import loadBackgroudImages from "@/common/loadBackgroudImages";
import React, { useEffect, useState, useRef } from "react";

function Feat() {
  const [expandedCards, setExpandedCards] = useState([false, false, false]);
  const [showButtons, setShowButtons] = useState([false, false, false]);
  const textRefs = useRef([]);

  const toggleCard = (index) => {
    setExpandedCards((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const checkTextHeight = () => {
    textRefs.current.forEach((ref, index) => {
      if (ref) {
        // Get the computed line height and calculate number of lines
        const lineHeight = parseFloat(window.getComputedStyle(ref).lineHeight);
        const totalHeight = ref.scrollHeight;
        const numberOfLines = Math.round(totalHeight / lineHeight);

        // Only show button if lines exceed 7
        setShowButtons((prev) => {
          const newState = [...prev];
          newState[index] = numberOfLines > 7;
          return newState;
        });
      }
    });
  };

  useEffect(() => {
    loadBackgroudImages();
    checkTextHeight();
    window.addEventListener("resize", checkTextHeight);
    return () => window.removeEventListener("resize", checkTextHeight);
  }, []);
  return (
    <section className="feat section-padding mt-100">
      <div className="container ontop">
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center mb-50">
            <div className="cont">
              <div className="position-relative mb-30">
                <div className="text-end mb-3">
                  <a
                    href="/page-about"
                    className="butn-crev d-inline-flex align-items-center"
                  >
                    <span className="hover-this">
                      <span className="circle hover-anim">
                        <i className="ti-arrow-top-right"></i>
                      </span>
                    </span>
                  </a>
                </div>
                <h2 className="text-center">
                  Driven by Client Satisfaction
                  <br /> Powered by Collaboration
                </h2>
              </div>
              <h6 className="sub-title main-color mb-15">
                At Sole Digital Media, our core mission is to deliver
                exceptional results and exceed client expectations.
              </h6>
              <p>
                We foster a culture of collaboration and transparency, working
                closely with our clients and as a unified team to ensure every
                solution is strategically crafted and flawlessly executed. By
                providing customized digital marketing solutions, we aim to
                empower local businesses and brands, delivering innovative,
                data-driven services that lead to long-term success and total
                client satisfaction.
              </p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="row justify-content-center">
              {[
                {
                  img: "1.jpg",
                  title: "Continuous Improvement",
                  text: "Our unwavering focus on continuous innovation and improvement is what truly sets Sole Digital Media apart from the competition. By constantly evolving our strategies and staying ahead of digital trends, we ensure our clients receive the most effective, cutting-edge solutions in an ever-changing market.",
                },
                {
                  img: "2.jpg",
                  title: "Integrity",
                  text: "At Sole Digital Media, integrity is the foundation of our business. Our commitment to ethical practices, transparency, and trust-based relationships is what sets us apart from the competition. By upholding the highest standards of honesty and accountability, we build long-term partnerships that drive meaningful results.",
                },
                {
                  img: "3.jpg",
                  title: "Collaboration",
                  text: "At Sole Digital Media, we believe that true success stems from strong collaboration—both within our team and with our clients. Our collaborative approach fosters creativity, enhances communication, and ensures that every solution is aligned with our clients' unique goals. This commitment to partnership is what distinguishes us from the competition and fuels outstanding results.",
                },
              ].map((card, index) => (
                <div className="col-lg-4 col-md-6 mb-4" key={index}>
                  <div className="item text-center">
                    <div
                      className="bg-img mb-3"
                      data-background={`/assets/imgs/serv-img/${card.img}`}
                      style={{ height: "250px", width: "100%" }}
                    ></div>
                    <div className="info px-3">
                      <h5 className="mb-15">{card.title}</h5>
                      <p
                        ref={(el) => (textRefs.current[index] = el)}
                        style={{
                          overflow: "hidden",
                          display: "-webkit-box",
                          WebkitLineClamp: expandedCards[index] ? "unset" : "7",
                          WebkitBoxOrient: "vertical",
                          transition: "all 0.3s ease",
                        }}
                      >
                        {card.text}
                      </p>
                      {showButtons[index] && (
                        <button
                          onClick={() => toggleCard(index)}
                          style={{
                            background: "none",
                            border: "none",
                            color: "#666",
                            cursor: "pointer",
                            fontSize: "14px",
                            padding: 0,
                            marginTop: "10px",
                          }}
                        >
                          {expandedCards[index] ? "See less..." : "See more..."}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="circle-blur">
        <img src="/assets/imgs/patterns/blur1.png" alt="" />
      </div>
    </section>
  );
}

export default Feat;

"use client";
import React from "react";
import data from "@/data/services";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Services() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

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
        .truncate-text {
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          line-height: 1.5;
          max-height: 7.5em; /* 5 lines x 1.5 line-height */
        }

        @media screen and (max-width: 768px) {
          .truncate-text {
            -webkit-line-clamp: 4;
            max-height: 6em;
          }
        }

        @media screen and (max-width: 480px) {
          .truncate-text {
            -webkit-line-clamp: 3;
            max-height: 4.5em;
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
      <div className="container position-relative">
        <div className="sec-head mb-100">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Our Specialize</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Featured <span className="fw-200">Services.</span>
                </span>
              </h3>
            </div>
          </div>
        </div>

        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={1500}
          arrows
          keyBoardControl
          containerClass="carousel-container pt-20"
          itemClass="px-2"
        >
          {data.map((item, i) => (
            <a
              key={i}
              href={item.link}
              className="item-box h-[400px] flex flex-col justify-between no-underline"
              style={{ color: "#fff" }}
            >
              <div className="icon mb-40 opacity-5">
                <img src={item.img} alt="" />
              </div>
              <h5 className="mb-15">{item.title}</h5>
              <p className="truncate-text" style={{ color: "#fff" }}>
                {item.desc}
              </p>
              <div className="rmore mt-30 flex items-center">
                <span className="sub-title">Read More</span>
                <img
                  src="/assets/imgs/arrow-right.png"
                  alt=""
                  className="icon-img-20 ml-5"
                />
              </div>
            </a>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default Services;

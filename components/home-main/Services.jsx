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
    <section className="services section-padding">
      <div className="container">
        <div className="sec-head mb-80">
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
          containerClass="carousel-container"
          itemClass="px-2"
        >
          {data.map((item, i) => (
            <div
              key={i}
              className="item-box h-[400px] flex flex-col justify-between"
            >
              <div className="icon mb-40 opacity-5">
                <img src={item.img} alt="" />
              </div>
              <h5 className="mb-15">{item.title}</h5>
              <p>{item.desc}</p>
              <a href={item.link} className="rmore mt-30">
                <span className="sub-title">Read More</span>
                <img
                  src="/assets/imgs/arrow-right.png"
                  alt=""
                  className="icon-img-20 ml-5"
                />
              </a>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default Services;

"use client";
import loadBackgroudImages from "@/common/loadBackgroudImages";
import React, { useEffect } from "react";

function Feat() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <section className="feat section-padding mt-100">
      <div className="container ontop">
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center mb-50">
            <div className="cont">
              <div className="d-flex align-items-center justify-content-center mb-30">
                <h1 className="mb-0 me-4">
                  Driven by Client Satisfaction
                  <br /> Powered by Collaboration
                </h1>
                <a
                  href="/page-about"
                  className="butn-crev d-flex align-items-center"
                >
                  <span className="hover-this">
                    <span className="circle hover-anim">
                      <i className="ti-arrow-top-right"></i>
                    </span>
                  </span>
                </a>
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
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="item text-center">
                  <div
                    className="bg-img mb-3"
                    data-background="/assets/imgs/serv-img/1.jpg"
                    style={{ height: "250px", width: "100%" }}
                  ></div>
                  <div className="info px-3">
                    <h5 className="mb-15">Continuous Improvement</h5>
                    <p>
                      Our unwavering focus on continuous innovation and
                      improvement is what truly sets Sole Digital Media apart
                      from the competition. By constantly evolving our
                      strategies and staying ahead of digital trends, we ensure
                      our clients receive the most effective, cutting-edge
                      solutions in an ever-changing market.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="item text-center">
                  <div
                    className="bg-img mb-3"
                    data-background="/assets/imgs/serv-img/2.jpg"
                    style={{ height: "250px", width: "100%" }}
                  ></div>
                  <div className="info px-3">
                    <h5 className="mb-15">Integrity</h5>
                    <p>
                      At Sole Digital Media, integrity is the foundation of our
                      business. Our commitment to ethical practices,
                      transparency, and trust-based relationships is what sets
                      us apart from the competition. By upholding the highest
                      standards of honesty and accountability, we build
                      long-term partnerships that drive meaningful results.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="item text-center">
                  <div
                    className="bg-img mb-3"
                    data-background="/assets/imgs/serv-img/3.jpg"
                    style={{ height: "250px", width: "100%" }}
                  ></div>
                  <div className="info px-3">
                    <h5 className="mb-15">Collaboration</h5>
                    <p>
                      At Sole Digital Media, we believe that true success stems
                      from strong collaboration—both within our team and with
                      our clients. Our collaborative approach fosters
                      creativity, enhances communication, and ensures that every
                      solution is aligned with our clients&apos; unique goals.
                      This commitment to partnership is what distinguishes us
                      from the competition and fuels outstanding results.
                    </p>
                  </div>
                </div>
              </div>
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

"use client";
import React from "react";

function Intro() {
  function openAccordion(event) {
    const parentItem = event.currentTarget.parentElement;
    const accordionInfo = event.currentTarget.nextElementSibling;
    const isActive = parentItem.classList.contains("active");

    document.querySelectorAll(".accordion-info").forEach((element) => {
      element.classList.remove("active");
      element.style.maxHeight = 0;
      element.parentElement.classList.remove("active");
    });

    if (!isActive) {
      parentItem.classList.add("active");
      accordionInfo.classList.add("active");
      accordionInfo.style.maxHeight = "300px";
    }
  }
  return (
    <div>
      <section className="intro section-padding">
        <div className="container">
          <div className="row lg-marg">
            <div className="col-lg-8">
              <div className="row lg-marg">
                <div className="col-md-6">
                  <div>
                    <h6 className="sub-title main-color mb-15">
                      Sole digital media
                    </h6>
                    <h3 className="mb-30">
                      We believe in the power of web development to drive
                      societal change
                      <span className="fw-300">one line of code</span>{" "}
                      <span className="fw-300">at a time.</span>
                    </h3>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="text">
                    <p className="mb-15">
                      At Sole Digital Media, we deliver comprehensive web and
                      e-commerce solutions that boost your digital presence and
                      unlock business growth. From design to deployment and
                      ongoing support, we create visually stunning,
                      user-friendly, and SEO-optimized websites that drive
                      traffic, engagement, and conversions—empowering your
                      success in the digital marketplace.
                    </p>

                    <div className="mt-100">
                      <ul className="rest dot-list">
                        <li className="mb-10">Front-End Development</li>
                        <li className="mb-10">Back-End Development</li>
                        <li className="mb-10">Full-Stack Solutions</li>
                        <li className="mb-10">CMS & E-commerce Integration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="img-full fit-img">
                <img src="/assets/imgs/serv/dev1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="intro-accord">
        <div className="container ontop">
          <div className="row xlg-marg">
            <div className="col-lg-5">
              <div className="img md-mb50">
                <img src="/assets/imgs/serv/dev2.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6 valign">
              <div>
                <div className="sec-head mb-50">
                  <h6 className="sub-title main-color mb-15">Why choose us?</h6>
                  <h3>
                    The creative process behind <br /> our web development
                    solutions.
                  </h3>
                </div>
                <div className="accordion bord">
                  <div
                    className="item active wow fadeInUp"
                    data-wow-delay=".1s"
                  >
                    <div onClick={openAccordion} className="title">
                      <h6>Front-End Development</h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div className="accordion-info">
                      <p className="">
                        We craft intuitive, responsive user interfaces that
                        bring your brand to life. Our front-end solutions ensure
                        seamless experiences across all devices and platforms.
                      </p>
                    </div>
                  </div>

                  <div className="item wow fadeInUp" data-wow-delay=".3s">
                    <div onClick={openAccordion} className="title">
                      <h6>Back-End Development</h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div className="accordion-info">
                      <p className="">
                        We build powerful, secure, and scalable server-side
                        systems that keep your applications running smoothly.
                        Our back-end solutions ensure performance, reliability,
                        and seamless integration.
                      </p>
                    </div>
                  </div>
                  <div className="item wow fadeInUp" data-wow-delay=".3s">
                    <div onClick={openAccordion} className="title">
                      <h6>CMS & E-commerce Integration</h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div className="accordion-info">
                      <p className="">
                        We integrate powerful CMS and e-commerce platforms to
                        streamline content management and boost online sales.
                        Our solutions offer flexibility, scalability, and a
                        seamless user experience.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="item wow fadeInUp" data-wow-delay=".5s">
                    <div onClick={openAccordion} className="title">
                      <h6>Full-Stack Solutions</h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div className="accordion-info">
                      <p className="">
                        We deliver end-to-end web solutions, combining front-end
                        finesse with robust back-end architecture. Our
                        full-stack expertise ensures a cohesive, scalable, and
                        high-performing digital experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Intro;

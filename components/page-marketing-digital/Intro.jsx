"use client";
import React from "react";

function Intro() {
  function openAccordion(event) {
    document.querySelectorAll(".accordion-info").forEach((element) => {
      element.classList.remove("active");
      element.style.maxHeight = 0;
      element.parentElement.classList.remove("active");
    });
    event.currentTarget.parentElement.classList.add("active");
    event.currentTarget.nextElementSibling.style.maxHeight = "300px";
    event.currentTarget.nextElementSibling.classList.add("active");
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
                      Captivating strategies{" "}
                      <span className="fw-300">
                        that engage audiences and elevate your brand.
                      </span>
                    </h3>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="text">
                    <p className="mb-15">
                      From research to execution, our digital marketing services combine strategy,
                      creativity, and data to help brands grow, reach wider audiences, and drive real results.
                    </p>

                    <div className="mt-30">
                      <ul className="rest dot-list">
                        <li className="mb-10">Marketing Strategy & Planning</li>
                        <li className="mb-10">Search Engine Optimization (SEO)</li>
                        <li className="mb-10">Pay-Per-Click Advertising (PPC)</li>
                        <li className="mb-10">Email & Content Marketing</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="numbers mt-80 md-mb50">
                <div className="row lg-marg">
                  <div className="col-md-6">
                    <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20 sm-mb30">
                      <div>
                        <h3 className="fw-300 mb-10">100%</h3>
                        <h6 className="p-color sub-title">Client Satisfaction</h6>
                      </div>
                      <div className="ml-auto">
                        <div className="icon-img-40">
                          <img src="/assets/imgs/arw0.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20">
                      <div>
                        <h3 className="fw-300 mb-10">320+</h3>
                        <h6 className="p-color sub-title">Campaigns Delivered</h6>
                      </div>
                      <div className="ml-auto">
                        <div className="icon-img-40">
                          <img src="/assets/imgs/arw0.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="img-full fit-img">
                <img src="/assets/imgs/intro/2.jpg" alt="Digital Marketing Visual" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="intro-accord">
        <div className="container ontop">
          <div className="row xlg-marg">
            <div className="col-lg-6">
              <div className="img md-mb50">
                <img src="/assets/imgs/arw2.png" alt="" />
              </div>
            </div>

            <div className="col-lg-6 valign">
              <div>
                <div className="sec-head mb-50">
                  <h6 className="sub-title main-color mb-15">Why choose us?</h6>
                  <h3>
                    The strategic approach behind
                    <br />
                    our digital marketing solutions.
                  </h3>
                </div>

                <div className="accordion bord">
                  <div className="item active wow fadeInUp" data-wow-delay=".1s">
                    <div onClick={openAccordion} className="title">
                      <h6>Marketing Strategy & Planning</h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div className="accordion-info">
                      <p>
                        We tailor digital strategies based on your goals, audience, and market trends to
                        maximize ROI and brand visibility.
                      </p>
                    </div>
                  </div>

                  <div className="item wow fadeInUp" data-wow-delay=".2s">
                    <div onClick={openAccordion} className="title">
                      <h6>Search Engine Optimization (SEO)</h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div className="accordion-info">
                      <p>
                        Boost your online presence and drive organic traffic with our comprehensive SEO practices.
                      </p>
                    </div>
                  </div>

                  <div className="item wow fadeInUp" data-wow-delay=".3s">
                    <div onClick={openAccordion} className="title">
                      <h6>Pay-Per-Click Advertising (PPC)</h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div className="accordion-info">
                      <p>
                        Target the right audience with precision and generate instant results through effective paid campaigns.
                      </p>
                    </div>
                  </div>

                  <div className="item wow fadeInUp" data-wow-delay=".4s">
                    <div onClick={openAccordion} className="title">
                      <h6>Email & Content Marketing</h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div className="accordion-info">
                      <p>
                        Engage and nurture your audience through impactful storytelling and consistent communication.
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

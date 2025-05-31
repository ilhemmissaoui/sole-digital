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
                      Influencer marketing drives authentic connections and
                      builds trust—one collaboration at a time.
                    </h3>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="text">
                    <p className="mb-15">
                      At Sole Digital Media, we craft impactful influencer
                      marketing strategies that elevate your brand and drive
                      real engagement. From campaign planning to creator
                      partnerships and performance tracking, we connect you with
                      the right voices to reach your audience
                      authentically—building trust, expanding visibility, and
                      delivering measurable results that fuel your business
                      growth.
                    </p>

                    <div className="mt-100">
                      <ul className="rest dot-list">
                        <li className="mb-10">Influencer Campaign Strategy</li>
                        <li className="mb-10">Creator Sourcing & Management</li>
                        <li className="mb-10">
                          Content Collaboration & Production
                        </li>
                        <li className="mb-10">
                          Analytics & Performance Reporting
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="img-full fit-img">
                <img src="/assets/imgs/serv/im1.png" alt="" />
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
                <img src="/assets/imgs/serv/im2.png" alt="" />
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
                      <h6>Influencer Campaign Strategy</h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div className="accordion-info">
                      <p>
                        We design data-driven influencer campaigns tailored to
                        your brand goals. From concept to execution, our
                        strategies maximize visibility and impact.
                      </p>
                    </div>
                  </div>

                  <div className="item wow fadeInUp" data-wow-delay=".2s">
                    <div onClick={openAccordion} className="title">
                      <h6>Creator Sourcing & Management</h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div className="accordion-info">
                      <p>
                        We identify and partner with the right creators who
                        align with your brand. Our team manages collaborations
                        to ensure smooth execution and strong ROI.
                      </p>
                    </div>
                  </div>

                  <div className="item wow fadeInUp" data-wow-delay=".3s">
                    <div onClick={openAccordion} className="title">
                      <h6>Content Collaboration & Production</h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div className="accordion-info">
                      <p>
                        We guide creators to produce authentic, high-quality
                        branded content. Every piece is crafted to engage
                        audiences and reinforce brand messaging.
                      </p>
                    </div>
                  </div>

                  <div className="item wow fadeInUp" data-wow-delay=".4s">
                    <div onClick={openAccordion} className="title">
                      <h6>Analytics & Performance Reporting</h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div className="accordion-info">
                      <p>
                        We track key metrics to evaluate campaign effectiveness
                        and audience impact. Our insights help refine strategies
                        and prove real business value.
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

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
                      Sole digital marketing
                    </h6>
                    <h3 className="mb-30">
                      Content creation that connects, empowers, and transforms
                      society.
                      <span className="fw-300">
                        One piece of meaningful content
                      </span>{" "}
                      <span className="fw-300">at a time.</span>
                    </h3>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="text">
                    <p className="mb-15">
                      At Sole Digital Media, we create compelling content that
                      strengthens your brand and drives engagement. From
                      strategy to storytelling, our content solutions captivate
                      audiences, build trust, and deliver real results across
                      digital platforms.
                    </p>

                    <div className="mt-30">
                      <ul className="rest dot-list">
                        <li className="mb-10">Content Strategy</li>
                        <li className="mb-10">Copywriting</li>
                        <li className="mb-10">Blog & Article Writing</li>
                        <li className="mb-10">Social Media Content</li>
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
                        <h6 className="p-color sub-title">
                          Clients Satisfaction
                        </h6>
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
                        <h3 className="fw-300 mb-10">6700</h3>
                        <h6 className="p-color sub-title">
                          Projects Completed
                        </h6>
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
                <img src="/assets/imgs/intro/2.jpg" alt="" />
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
                    The creative process behind <br /> our impactful content
                    creation.
                  </h3>
                </div>
                <div className="accordion bord">
                  <div
                    className="item active wow fadeInUp"
                    data-wow-delay=".1s"
                  >
                    <div onClick={openAccordion} className="title">
                      <h6>Content Strategy</h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div className="accordion-info">
                      <p className="">
                        We plan and structure content that aligns with your
                        brand goals and audience needs. Our strategies ensure
                        consistent messaging and maximum impact across all
                        platforms.
                      </p>
                    </div>
                  </div>

                  <div className="item wow fadeInUp" data-wow-delay=".3s">
                    <div onClick={openAccordion} className="title">
                      <h6>Copywriting</h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div className="accordion-info">
                      <p className="">
                        We craft clear, persuasive, and engaging copy that
                        speaks your brand’s voice. From websites to ads, our
                        words drive action and build connection.
                      </p>
                    </div>
                  </div>
                  <div className="item wow fadeInUp" data-wow-delay=".3s">
                    <div onClick={openAccordion} className="title">
                      <h6>Blog & Article Writing</h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div className="accordion-info">
                      <p className="">
                        We create informative, SEO-friendly blog posts and
                        articles that establish authority and boost visibility.
                        Each piece is tailored to educate, engage, and convert.
                      </p>
                    </div>
                  </div>
                  <div className="item wow fadeInUp" data-wow-delay=".5s">
                    <div onClick={openAccordion} className="title">
                      <h6>Social Media Content</h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div className="accordion-info">
                      <p className="">
                        We design scroll-stopping content tailored for each
                        platform. Our posts drive engagement, grow your
                        audience, and strengthen your online presence.
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

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
                      SEO optimization unlocks visibility,
                      <span className="fw-300">
                        connecting brands with the audiences that matter most.
                      </span>{" "}
                    </h3>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="text">
                    <p className="mb-15">
                      Comprehensive, data-driven SEO strategies are essential to
                      boosting online visibility and ranking higher in search
                      results. By combining technical audits, content
                      optimization, and continuous performance monitoring, we
                      create websites that are both search engine–friendly and
                      user-centric—driving sustainable growth, increased
                      traffic, and higher conversions in a competitive digital
                      marketplace.
                    </p>

                    <div className="mt-30">
                      <ul className="rest dot-list">
                        <li className="mb-10">Technical SEO Audits</li>
                        <li className="mb-10">On-Page Optimization</li>
                        <li className="mb-10">
                          Content Strategy & Keyword Research
                        </li>
                        <li className="mb-10">
                          Link Building & Authority Growth
                        </li>
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
                    The strategic approach behind
                    <br />
                    our SEO optimization solutions.
                  </h3>
                </div>
                <div className="accordion bord">
  <div className="item active wow fadeInUp" data-wow-delay=".1s">
    <div onClick={openAccordion} className="title">
      <h6>Technical SEO Audits</h6>
      <span className="ico ti-plus"></span>
    </div>
    <div className="accordion-info">
      <p>
        Comprehensive analysis of your website’s technical health  
        to identify and fix SEO issues impacting performance.
      </p>
    </div>
  </div>

  <div className="item wow fadeInUp" data-wow-delay=".3s">
    <div onClick={openAccordion} className="title">
      <h6>On-Page Optimization</h6>
      <span className="ico ti-plus"></span>
    </div>
    <div className="accordion-info">
      <p>
        Optimizing content, meta tags, and site structure  
        to improve relevance and boost search engine rankings.
      </p>
    </div>
  </div>

  <div className="item wow fadeInUp" data-wow-delay=".3s">
    <div onClick={openAccordion} className="title">
      <h6>Content Strategy & Keyword Research</h6>
      <span className="ico ti-plus"></span>
    </div>
    <div className="accordion-info">
      <p>
        Developing targeted content plans based on thorough keyword research  
        to attract and engage your ideal audience.
      </p>
    </div>
  </div>

  <div className="item wow fadeInUp" data-wow-delay=".5s">
    <div onClick={openAccordion} className="title">
      <h6>Link Building & Authority Growth</h6>
      <span className="ico ti-plus"></span>
    </div>
    <div className="accordion-info">
      <p>
        Establishing high-quality backlinks and outreach efforts  
        to increase domain authority and search visibility.
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

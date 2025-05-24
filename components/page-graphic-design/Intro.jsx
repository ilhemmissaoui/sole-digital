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
                      Designing intuitive, user-first experiences that inspire
                      action and build trust.{" "}
                      <span className="fw-300">One seamless journey</span>{" "}
                      <span className="fw-300">crafted with purpose.</span>
                    </h3>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="text">
                    <p className="mb-15">
                      At Sole Digital Media, we craft UX designs that prioritize
                      usability, clarity, and user satisfaction. From research
                      to prototyping, we build intuitive experiences that drive
                      engagement and elevate digital products.
                    </p>

                    <div className="mt-30">
                      <ul className="rest dot-list">
                        <li className="mb-10">User Research & Analysis</li>
                        <li className="mb-10">Wireframing & Prototyping</li>
                        <li className="mb-10">UI/UX Design</li>
                        <li className="mb-10">Usability Testing</li>
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
                <img src="/assets/imgs/serv/design2.png" alt="" />
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
                <img src="/assets/imgs/serv/design1.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6 valign">
              <div>
                <div className="sec-head mb-50">
                  <h6 className="sub-title main-color mb-15">Why choose us?</h6>
                  <h3>
                    The creative process behind <br /> our UX design solutions.
                  </h3>
                </div>
                <div className="accordion bord">
                  <div
                    className="item active wow fadeInUp"
                    data-wow-delay=".1s"
                  >
                    <div onClick={openAccordion} className="title">
                      <h6>User Research & Analysis</h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div className="accordion-info">
                      <p>
                        We uncover user needs, behaviors, and goals through deep
                        research. These insights form the foundation for
                        intuitive and human-centric design.
                      </p>
                    </div>
                  </div>

                  <div className="item wow fadeInUp" data-wow-delay=".3s">
                    <div onClick={openAccordion} className="title">
                      <h6>Wireframing & Prototyping</h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div className="accordion-info">
                      <p>
                        We map out user journeys and interactions using
                        wireframes and interactive prototypes, helping validate
                        design decisions early on.
                      </p>
                    </div>
                  </div>

                  <div className="item wow fadeInUp" data-wow-delay=".3s">
                    <div onClick={openAccordion} className="title">
                      <h6>UI/UX Design</h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div className="accordion-info">
                      <p>
                        We create beautiful, functional interfaces that balance
                        aesthetics and usability, ensuring smooth and engaging
                        digital experiences.
                      </p>
                    </div>
                  </div>

                  <div className="item wow fadeInUp" data-wow-delay=".5s">
                    <div onClick={openAccordion} className="title">
                      <h6>Usability Testing</h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div className="accordion-info">
                      <p>
                        We gather real user feedback to refine the product
                        experience. Testing ensures functionality,
                        accessibility, and satisfaction before launch.
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

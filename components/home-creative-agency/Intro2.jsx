"use client";
import React from "react";

function Intro2() {
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
    <section className="intro-accord section-padding sub-bg o-hidden">
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
                  The creative process behind <br /> our digital marketing.
                </h3>
              </div>
              <div className="accordion bord">
                <div className="item active wow fadeInUp" data-wow-delay=".1s">
                  <div onClick={openAccordion} className="title">
                    <h6>Designing Content With AI Power</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                      Taken possession of my entire soul, like these sweet
                      mornings of spring which i enjoy with my whole.
                    </p>
                  </div>
                </div>

                <div className="item wow fadeInUp" data-wow-delay=".3s">
                  <div onClick={openAccordion} className="title">
                    <h6>Talented, Professional & Expert Team</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                      Taken possession of my entire soul, like these sweet
                      mornings of spring which i enjoy with my whole.
                    </p>
                  </div>
                </div>

                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div onClick={openAccordion} className="title">
                    <h6>We Build and Activate Brands</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                      Taken possession of my entire soul, like these sweet
                      mornings of spring which i enjoy with my whole.
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

export default Intro2;

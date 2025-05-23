import React from "react";

function Intro() {
  return (
    <section className="page-intro  pb-0">
      <div className="container">
        <div className="row md-marg">
          <div className="col-lg-6">
            <div className="img md-mb80">
              <div className="row">
                <div className="col-6">
                  <img src="/assets/imgs/port.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="cont">
              <h3 className="mb-30">
                Sole Digital Media
                <span className="fw-200">Our services will help you </span>{" "}
                provide the best solution
                <span className="fw-200">
                  so that your business can runsmoothly.
                </span>
              </h3>
              <p>
                Sole Digital Media is a full-service digital marketing and
                creative agency dedicated to building impactful digital
                experiences for businesses, creators, and organizations across
                the globe. As a modern and agile agency, we combine strategic
                thinking, innovative design, and cutting-edge technology to help
                our clients grow, engage, and lead in an increasingly digital
                world.
              </p>
              <a href="/page-services" className="underline main-color mt-40">
                <span className="text">
                  Our Services <i className="ti-arrow-top-right"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;

import React from "react";

function Intro() {
  return (
    <section className="intro ">
      <div className="container ">
        <div className="row lg-marg mt-80">
          <div className="col-md-4">
            <div className="img-full fit-img h-100 d-flex align-items-center">
              <img
                src="/assets/imgs/tt.svg"
                alt=""
                className="w-100"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
          <div className="col-md-4 mt-25">
            <div className="text">
              <h5>
                Unlock Your Brand&apos;s Digital Potential with Sole Digital
                Media.
              </h5>

              <p>
                At Sole Digital Media, we believe in the power of individual
                contributions to drive collective success. Our full-suite
                digital marketing services are strategically designed to amplify
                your brand&apos;s online visibility, engage your target
                audience, and deliver measurable ROI. Backed by a team of
                seasoned professionals, we harness the latest tools, data-driven
                strategies, and creative solutions—tailored specifically to your
                business objectives. Explore our core services below and
                discover how we can help your brand grow in today&apos;s
                competitive digital landscape.
              </p>

              <a
                href="/page-about"
                className="underline main-color mt-40 mb-20"
              >
                <span className="text">
                  More About Us <i className="ti-arrow-top-right"></i>
                </span>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="img-full fit-img h-100 d-flex align-items-center">
              <img
                src="/assets/imgs/background/Subtract.png"
                alt=""
                className="w-100"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;

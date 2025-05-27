import React from "react";

function Intro() {
  return (
    <section className="intro ">
      <div className="container ">
        <div className="row lg-marg mt-80">
          <div className="col-lg-12 md-mb80">
            <div className="row lg-marg align-items-center justify-content-between">
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
              <div className="col-md-4">
                <div className="text">
                  <span className="rotate-text">
                    <h5>
                      Unlock Your Brand&apos;s Digital Potential with Sole
                      Digital Media.
                    </h5>
                  </span>
                  <p>
                    At Sole Digital Media, we believe in the power of individual
                    contributions to drive collective success. Our full-suite
                    digital marketing services are strategically designed to
                    amplify your brand&apos;s online visibility, engage your
                    target audience, and deliver measurable ROI. Backed by a
                    team of seasoned professionals, we harness the latest tools,
                    data-driven strategies, and creative solutions—tailored
                    specifically to your business objectives. Explore our core
                    services below and discover how we can help your brand grow
                    in today&apos;s competitive digital landscape.
                  </p>

                  <a href="/page-about" className="underline main-color mt-40">
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
        </div>
      </div>
    </section>
  );
}

export default Intro;

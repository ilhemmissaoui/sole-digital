import React from 'react';

function Intro() {
  return (
    <section className="page-intro section-padding pb-0">
      <div className="container">
        <div className="row md-marg">
          <div className="col-lg-6">
            <div className="img md-mb80">
              <div className="row">
                <div className="col-6">
                  <img src="/assets/imgs/intro/i1.jpg" alt="" />
                  <div className="img-icon">
                    <img src="/assets/imgs/arw0.png" alt="" />
                  </div>
                </div>
                <div className="col-6 mt-40">
                  <img src="/assets/imgs/intro/i2.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="cont">
              <h3 className="mb-30">
               Sole Digital Media 
                <span className="fw-200">Our services will help you </span> provide the best solution
                   <span className="fw-200">so that your business can runsmoothly.</span> 
              </h3>
              <p>
              Sole Digital Media, founded in 2024, is a dynamic digital agency dedicated to empowering businesses with innovative digital solutions. Specializing in website development, graphic design, digital marketing, SEO optimization, content creation, social media management, and video production, we help brands thrive in the digital age. Our mission is to deliver tailored services that enhance your online presence, engage your audience, and drive measurable results.
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

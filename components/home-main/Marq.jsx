import React from "react";

function Marq() {
  const marquee = [
    "Website & E-Commerce Development",
    "SEO Optimizations",
    "Digital Marketing",
    "Graphic Designing",
    "Content Creations",
    "Social Media Management",
    "Video Production",
  ];
  return (
    <section className="opacity-7 section-padding">
      <div className="main-marq xlrg o-hidden">
        <div className="slide-har st1 strok">
          <div className="box">
            {marquee.map((item, i) => (
              <div key={i} className="item">
                <h4 className="d-flex align-items-center">
                  <span>{item}</span>
                  <span className="icon-img-50 ml-40">
                    <img src="/assets/imgs/star.png" alt="" />
                  </span>
                </h4>
              </div>
            ))}
          </div>
          <div className="box">
            {marquee.map((item, i) => (
              <div key={i} className="item">
                <h4 className="d-flex align-items-center">
                  <span>{item}</span>
                  <span className="icon-img-50 ml-40">
                    <img src="/assets/imgs/star.png" alt="" />
                  </span>
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="main-marq xlrg o-hidden">
        <div className="slide-har st2 non-strok">
          <div className="box">
            {marquee.map((item, i) => (
              <div key={i} className="item">
                <h4 className="d-flex align-items-center">
                  <span>{item}</span>
                  <span className="icon-img-50 ml-40">
                    <img src="/assets/imgs/star.png" alt="" />
                  </span>
                </h4>
              </div>
            ))}
          </div>
          <div className="box">
            {marquee.map((item, i) => (
              <div key={i} className="item">
                <h4 className="d-flex align-items-center">
                  <span>{item}</span>
                  <span className="icon-img-50 ml-40">
                    <img src="/assets/imgs/star.png" alt="" />
                  </span>
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Marq;

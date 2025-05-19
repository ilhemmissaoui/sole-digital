"use client";
import loadBackgroudImages from "@/common/loadBackgroudImages";
import React, { useEffect } from "react";

function Feat() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <section className="feat section-padding">
      <div className="container ontop">
        <div className="row">
          <div className="col-lg-5">
            <div className="cont md-mb50">
              <h3 className="mb-30">Our Main Goal to Satisfy Our Clients</h3>
              <h6 className="sub-title main-color mb-15">
                We value teamwork and collaboration, both within our team and
                with our clients
              </h6>

              <p>
                We are committed to exceeding the expectations of our local
                clients by providing tailored digital solutions, ensuring their
                complete satisfaction through dedicated and innovative services.
              </p>
              <a
                href="/page-about"
                className="butn-crev d-flex align-items-center mt-40"
              >
                <span className="hover-this">
                  <span className="circle hover-anim">
                    <i className="ti-arrow-top-right"></i>
                  </span>
                </span>
                <span className="text">Learn more</span>
              </a>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="item mb-30">
              <div className="row">
                <div
                  className="col-md-4 bg-img"
                  data-background="/assets/imgs/serv-img/1.jpg"
                ></div>
                <div className="col-md-8">
                  <div className="info">
                    <h5 className="mb-15">Continuous Improvement</h5>
                    <p>
                      This is the main factor that sets us apart from our
                      competition and allows us .
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="item mb-30">
              <div className="row">
                <div
                  className="col-md-4 bg-img"
                  data-background="/assets/imgs/serv-img/2.jpg"
                ></div>
                <div className="col-md-8">
                  <div className="info">
                    <h5 className="mb-15">Integrity</h5>
                    <p>
                      This is the main factor that sets us apart from our
                      competition and allows us .
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="item">
              <div className="row">
                <div
                  className="col-md-4 bg-img"
                  data-background="/assets/imgs/serv-img/3.jpg"
                ></div>
                <div className="col-md-8">
                  <div className="info">
                    <h5 className="mb-15">Collaboration</h5>
                    <p>
                      This is the main factor that sets us apart from our
                      competition and allows us .
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

export default Feat;

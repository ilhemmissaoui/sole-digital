import React from "react";

function About() {
  return (
    <section className="about-author ">
      <div className="container with-pad">
        <div className="row lg-marg">
          <div className="col-lg-5 valign">
            <div className="profile-img">
              <div className="img">
                <img src="/assets/imgs/friends.jpg" alt="" />
              </div>
              <span className="icon">
                <img src="/assets/imgs/tiktok.png" alt="" />
              </span>
              <span className="icon">
                <img src="/assets/imgs/tiktok.png" alt="" />
              </span>
              <span className="icon">
                <img src="/assets/imgs/tiktok.png" alt="" />
              </span>
              <span className="icon">
                <img src="/assets/imgs/tiktok.png" alt="" />
              </span>
            </div>
          </div>
          <div className="col-lg-7 valign">
            <div className="cont">
              <a
                href="/blogs"
                className="d-flex align-items-center main-color mt-40"
              >
                <span className="text mr-15">Read More</span>
                <span className="ti-arrow-top-right"></span>
              </a>
              <div className="text">
                <h4 className="mb-30">Unlocking Growth with a TikTok Agency</h4>
                <p>
                  TikTok agency is a specialized marketing service that helps
                  brands grow their presence on TikTok through strategic content
                  creation, influencer partnerships, paid advertising, and
                  performance analysis. These agencies understand TikTok&apos;s
                  unique algorithm, trends, and user behavior, enabling them to
                  craft viral campaigns that drive engagement and increase brand
                  visibility. Whether it&apos;s managing a brand&apos;s TikTok
                  account or collaborating with content creators, a TikTok
                  agency plays a key role in building authentic and impactful
                  digital marketing on the platform.
                </p>

                <div className="numbers mt-50">
                  <div className="row lg-marg">
                    <div className="col-md-6">
                      <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

import React from "react";

function About() {
  return (
    <section className="about-author  mb-20 mt-30">
      <div className="container with-pad">
        <div className="text-center mb-50">
          <h1 className="main-color fz-70">TIKTOK CREATOR NETWORK AGENCY</h1>
        </div>
        <div className="row lg-marg">
          <div className="col-lg-5 valign">
            <div className="profile-img">
              <div className="img">
                <img src="/assets/imgs/friend.jpg" alt="" />
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
              <div className="text">
                <h4 className="mb-30">Empowering TikTok LIVE Creators</h4>
                <p>
                  At Sole Digital Media, we proudly operate as an authorized
                  TikTok LIVE Creator Network, dedicated to supporting and
                  scaling livestream creators across the MENA region, USA, and
                  Canada—all while strictly adhering to TikTok&apos;s Community
                  Guidelines, LIVE policies, and ethical standards.
                  <br /> Our mission is to empower creators by providing
                  region-specific onboarding, localized content strategies, and
                  tailored growth plans that respect cultural nuances and
                  platform regulations in each market. Whether you are based in
                  North America or the Middle East and North Africa, we deliver
                  personalized support designed to maximize your TikTok LIVE
                  visibility, engagement, and monetization.
                </p>

                <a
                  href="/tiktok-agency"
                  className="d-flex align-items-center main-color mt-40"
                >
                  <span className="text mr-15">Read More</span>
                  <span className="ti-arrow-top-right"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

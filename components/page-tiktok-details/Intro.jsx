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
                    <h3 className=" main-color mb-15">
                      Join the Sole Digital Media TikTok LIVE Creator Network
                    </h3>
                    <h3 className="mb-30">
                      Your Official Partner for TikTok LIVE Growth, Monetization
                      & Support in MENA, USA & Canada
                    </h3>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="text">
                    <h4 className="mb-90">
                      What Is a TikTok LIVE Creator Network?
                    </h4>
                    <p className="mb-15">
                      A TikTok LIVE Creator Network is an officially authorized
                      agency that partners with TikTok to support creators in
                      growing their audience, boosting engagement, and unlocking
                      monetization opportunities. At Sole Digital Media, we
                      guide you through every step of your TikTok LIVE journey
                      while ensuring full compliance with TikTok's policies and
                      Community Guidelines.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="img-full fit-img"
                style={{ height: "500px", overflow: "hidden" }}
              >
                <img
                  src="/assets/imgs/tik.png"
                  alt=""
                  style={{ height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="intro-accord">
        <div className="container ontop">
          <div className="row xlg-marg">
            <div className="col-lg-6">
              <div
                className="img-full fit-img"
                style={{ height: "600px", overflow: "hidden" }}
              >
                <img
                  src="/assets/imgs/tok.png"
                  style={{ height: "100%", objectFit: "cover" }}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 valign">
              <div>
                <div className="sec-head mb-50">
                  <h3 className=" main-color mb-15">
                    Why Join Sole Digital Media?
                  </h3>
                </div>
                <div className="accordion bord">
                  <div
                    className="item active wow fadeInUp"
                    data-wow-delay=".1s"
                  >
                    <div onClick={openAccordion} className="title">
                      <h6>Maximize Your Growth & Income</h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div className="accordion-info">
                      <ul className="rest dot-list">
                        <li className="mb-10">
                          Participate in exclusive TikTok campaigns and LIVE
                          challenges
                        </li>
                        <li className="mb-10">
                          Receive monthly performance-based coin bonuses
                        </li>
                        <li className="mb-10">
                          Get connected to brand deals and sponsorships
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="item wow fadeInUp" data-wow-delay=".2s">
                    <div onClick={openAccordion} className="title">
                      <h6> Professional Support You Can Trust</h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div className="accordion-info">
                      <ul className="rest dot-list">
                        <li className="mb-10">
                          Access TikTok LIVE Studio to stream professionally
                          from your PC
                        </li>
                        <li className="mb-10">
                          Join strategy sessions and coaching from top LIVE
                          experts
                        </li>
                        <li className="mb-10">
                          Learn from exclusive training and growth workshops
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="item wow fadeInUp" data-wow-delay=".3s">
                    <div onClick={openAccordion} className="title">
                      <h6>Platform Protection & Enhanced Features</h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div className="accordion-info">
                      <ul className="rest dot-list">
                        <li className="mb-10">
                          Get LIVE access even if you haven&apos;t reached 1,000
                          followers
                        </li>
                        <li className="mb-10">
                          Enjoy protection against unjustified bans
                        </li>
                        <li className="mb-10">
                          Maintain 100% of your LIVE income — we charge no
                          commission
                        </li>
                        <li className="mb-10">
                          Ensure your success while staying aligned with
                          TikTok's Community Guidelines
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-70">
          <div
            className="row lg-marg"
            style={{
              position: "relative",
              padding: "40px",
              borderRadius: "15px",
              color: "white", // Add this to make text readable on dark background
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'url("/assets/imgs/cover1.JPG")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: -1,
                borderRadius: "15px",
              }}
            />
            <div className="col-lg-12">
              <div className="title mt-20">
                <h4>Supported Regions</h4>
              </div>
              <div className="text mt-15">
                <div>
                  We welcome creators from:
                  <ul className="rest dot-list">
                    <li className="mb-10">MENA: UAE, KSA, Egypt, Morocco,</li>
                    <li className="mb-10">
                      MENA: UAE, KSA, Egypt, Morocco, Tunisia & more
                    </li>
                    <li className="mb-10">
                      North America: United States & Canada
                    </li>
                  </ul>
                </div>
              </div>

              <div className="title mt-40">
                <h4>Eligibility Criteria</h4>
              </div>
              <div className="text mt-15">
                <div>
                  To join the Sole Digital Media Creator Network, creators must:
                  <ul className="rest dot-list">
                    <li className="mb-10">
                      Go LIVE for at least 4 hours per day
                    </li>
                    <li className="mb-10">
                      Follow TikTok&apos;s Community Guidelines and LIVE
                      policies
                    </li>
                    <li className="mb-10">
                      Have no history of major violations or bans
                    </li>
                    <li className="mb-10">
                      Use only one active TikTok account
                    </li>
                    <li className="mb-10">
                      Be located in MENA, USA, or Canada
                    </li>
                    <li className="mb-10">
                      Not be affiliated with another TikTok LIVE agency
                    </li>
                    <li className="mb-10">
                      Show genuine engagement and commitment to LIVE content
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="sec-head mt-60">
            <h3 className="main-color mb-15">
              LIVE feature access without 1,000 followers is subject to TikTok
              review and approval.
            </h3>
          </div>

          <div className="row justify-content-between mt-50">
            {[
              {
                title: "What You'll Gain?",
                content: [
                  "Monthly Bonus Coins & Milestone Rewards",
                  "PK Battles & Creator-Only Competitions",
                  "Invitations to Official TikTok Campaigns",
                ],
              },
              {
                title: "How to Join?",
                content: [
                  "Fill out our registration form",
                  "Our team reviews your profile",
                  "Receive official invite via TikTok app",
                ],
              },
              {
                title: "Benefits",
                content:
                  "Full support for your TikTok LIVE career including coaching, analytics, and brand deals.",
              },
              {
                title: "Cost to Join",
                content:
                  "Zero commission on LIVE earnings. Management fee only applies to brand partnerships.",
              },
            ].map((item, index) => (
              <div className="col-lg-6 mb-30 px-3" key={index}>
                <div
                  className="card-simple"
                  style={{
                    background: "var(--main-color)",
                    borderRadius: "15px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    color: "#fff",
                    padding: "15px 15px",
                    minHeight: "200px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    margin: "0 auto",
                    maxWidth: "550px",
                  }}
                >
                  <h4 className="mb-20">{item.title}</h4>
                  <div className="content" style={{ flex: 1 }}>
                    {Array.isArray(item.content) ? (
                      <ul className="rest dot-list">
                        {item.content.map((line, i) => (
                          <li className="mb-15" key={i}>
                            {line}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>{item.content}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Intro;

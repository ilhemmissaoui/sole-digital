"use client";
import React, { useEffect } from "react";

function Portfolio() {
  function Playing() {
    gsap.registerPlugin(ScrollTrigger);

    const cards = document.querySelectorAll(".cards .card-item");
    let stickDistance = 0;

    const firstCardST = ScrollTrigger.create({
      trigger: cards[0],
      start: "center center",
    });

    const lastCardST = ScrollTrigger.create({
      trigger: cards[cards.length - 1],
      start: "bottom bottom",
    });

    cards.forEach((card, index) => {
      const scale = 1 - (cards.length - index) * 0.025;
      const scaleDown = gsap.to(card, {
        scale: scale,
        transformOrigin: "50% " + (lastCardST.start + stickDistance),
      });

      ScrollTrigger.create({
        trigger: card,
        start: "center center",
        end: () => lastCardST.start + stickDistance,
        pin: true,
        pinSpacing: false,
        ease: "none",
        animation: scaleDown,
        toggleActions: "restart none none reverse",
      });
    });
  }
  useEffect(() => {
    Playing();

    // Clean up function
    return () => {
      // Dispose GSAP ScrollTrigger instances
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);
  return (
    <section className="services-inline2 section-padding">
      <div className="container ontop">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">Our Core Values</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="row md-marg align-items-end">
            <div className="col-lg-2">
              <span className="num md-mb10">01</span>
            </div>
            <div className="col-lg-4 md-mb10">
              <div>
                <h2>Excellence</h2>
              </div>
            </div>
            <div className="col-lg-4 md-mb10">
              <p>Delivering uncompromising quality in every project.</p>
            </div>
            <div className="col-lg-2 d-flex justify-content-center">
              <div className="icon-img-80 opacity-7">
                <img src="/assets/imgs/icons/1.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="row md-marg align-items-end">
            <div className="col-lg-2">
              <span className="num md-mb10">02</span>
            </div>
            <div className="col-lg-4">
              <div className="md-mb30">
                <div>
                  <h2>Innovation</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4 md-mb30">
              <p>Embracing change, technology, and forward-thinking ideas.</p>
            </div>
            <div className="col-lg-2 d-flex justify-content-center">
              <div className="icon-img-80 opacity-7">
                <img src="/assets/imgs/icons/2.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="item bord-thin-bottom">
          <div className="row md-marg align-items-end">
            <div className="col-lg-2">
              <span className="num md-mb10">03</span>
            </div>
            <div className="col-lg-4">
              <div className="md-mb30">
                <div>
                  <h2>Integrity</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4 md-mb30">
              <p>Operating with transparency, accountability, and respect.</p>
            </div>
            <div className="col-lg-2 d-flex justify-content-center">
              <div className="icon-img-80 opacity-7">
                <img src="/assets/imgs/icons/3.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="item bord-thin-bottom">
          <div className="row md-marg align-items-end">
            <div className="col-lg-2">
              <span className="num md-mb10">04</span>
            </div>
            <div className="col-lg-4">
              <div className="md-mb30">
                <div>
                  <h2>Collaboration</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4 md-mb30">
              <p>
                Building meaningful partnerships with clients and team members.
              </p>
            </div>
            <div className="col-lg-2 d-flex justify-content-center">
              <div className="icon-img-80 opacity-7">
                <img src="/assets/imgs/icons/4.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="item bord-thin-bottom">
          <div className="row md-marg align-items-end">
            <div className="col-lg-2">
              <span className="num md-mb10">05</span>
            </div>
            <div className="col-lg-4">
              <div className="md-mb30">
                <div>
                  <h2>Adaptability</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4 md-mb30">
              <p>
                Remaining agile and responsive in a rapidly evolving digital
                environment.
              </p>
            </div>
            <div className="col-lg-2 d-flex justify-content-center">
              <div className="icon-img-80 opacity-7">
                <img src="/assets/imgs/icons/5.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="title mt-90 mb-30">
          <h1>Why Choose SoleDigital Media ?</h1>
        </div>

        <ul className="text-lg">
          <li className="mb-20">
            <strong>Strategic Approach:</strong> Every project is grounded in
            insight, aligned with business goals, and built for scalability.
          </li>
          <li className="mb-20">
            <strong>Creative Precision:</strong> We merge creativity with
            function to deliver compelling brand assets and experiences.
          </li>
          <li className="mb-20">
            <strong>End-to-End Expertise:</strong> From concept to launch, we
            handle every stage of the digital journey.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;

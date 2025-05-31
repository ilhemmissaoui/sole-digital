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
    <section className="services-inline2 ">
      <style jsx>{`
        .core-values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          padding: 2rem 0;
        }

        .bottom-row {
          grid-column: 2 span 2;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin: 0 auto;
          width: 66.66%;
        }

        .value-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 15px;
          padding: 2rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 1200px) {
          .bottom-row {
            width: 100%;
          }
        }

        @media (max-width: 768px) {
          .core-values-grid {
            grid-template-columns: 1fr;
          }

          .bottom-row {
            grid-column: auto;
            grid-template-columns: 1fr;
            width: 100%;
          }
        }

        .core-values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          padding: 2rem 0;
        }

        .value-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 15px;
          padding: 2rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .value-card:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.1);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .value-number {
          font-size: 4rem;
          font-weight: 700;
          opacity: 0.1;
          position: absolute;
          top: 10px;
          right: 20px;
          color: white;
        }

        .value-icon {
          width: 50px;
          height: 50px;
          margin-bottom: 1.5rem;
        }

        .value-title {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          color: white;
          font-weight: 600;
        }

        .value-description {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .core-values-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .value-card {
            padding: 1.5rem;
          }

          .value-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
      <div className="container ontop pt-50">
        <div className="sec-head mb-50">
          <div className="d-flex align-items-center">
            <div>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">Our Core Values</span>
              </h3>
            </div>
          </div>
        </div>

        <div className="core-values-grid">
          <div className="value-card">
            <span className="value-number">01</span>
            <div className="value-icon">
              <img src="/assets/imgs/icons/1.svg" alt="Excellence" />
            </div>
            <h3 className="value-title">Excellence</h3>
            <p className="value-description">
              Delivering uncompromising quality in every project.
            </p>
          </div>

          <div className="value-card">
            <span className="value-number">02</span>
            <div className="value-icon">
              <img src="/assets/imgs/icons/2.svg" alt="Innovation" />
            </div>
            <h3 className="value-title">Innovation</h3>
            <p className="value-description">
              Embracing change, technology, and forward-thinking ideas.
            </p>
          </div>

          <div className="value-card">
            <span className="value-number">03</span>
            <div className="value-icon">
              <img src="/assets/imgs/icons/3.svg" alt="Integrity" />
            </div>
            <h3 className="value-title">Integrity</h3>
            <p className="value-description">
              Operating with transparency, accountability, and respect.
            </p>
          </div>
        </div>

        <div className="bottom-row">
          <div className="value-card">
            <span className="value-number">04</span>
            <div className="value-icon">
              <img src="/assets/imgs/icons/4.svg" alt="Collaboration" />
            </div>
            <h3 className="value-title">Collaboration</h3>
            <p className="value-description">
              Building meaningful partnerships with clients and team members.
            </p>
          </div>

          <div className="value-card">
            <span className="value-number">05</span>
            <div className="value-icon">
              <img src="/assets/imgs/icons/5.svg" alt="Adaptability" />
            </div>
            <h3 className="value-title">Adaptability</h3>
            <p className="value-description">
              Remaining agile and responsive in a rapidly evolving digital
              environment.
            </p>
          </div>
        </div>

        <div className="title mt-120 mb-30">
          <h1>Why Choose SoleDigital Media ?</h1>
        </div>

        <ul className="rest dot-list">
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

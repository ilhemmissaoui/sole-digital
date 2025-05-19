import React from 'react';
import Link from 'next/link'
import services from '@/data/services.json'
function Services() {
  return (
    <section className="services-crev section-padding">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="mb-30">
            <h2 className="fw-600 fz-70 text-u d-rotate wow">
              <span className="rotate-text">
                Featured <span className="fw-200">Services.</span>
              </span>
            </h2>
          </div>
          <h6 className="sub-title main-color d-flex align-items-center">
            <span>Our Specialize</span>
            <span className="thin"></span>
          </h6>
        </div>
        <div className="row sm-marg">
      {services.map((item, index) => (
  <div key={index}>
    <img src={item.img} alt={item.title} />
    <h3>{item.title}</h3>
    <p>{item.desc}</p>
    <Link href={`/page-services-details/${item.slug}`}>
      <a>Read more</a>
    </Link>
  </div>
))}
        </div>
        <div className="sec-bottom mt-100">
          <div className="main-bg d-flex align-items-center">
            <p>Here are some select projects that showcase.</p>
            <a
              href="/page-services"
              className="butn main-color ml-40 underline"
            >
              <span>View All</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;

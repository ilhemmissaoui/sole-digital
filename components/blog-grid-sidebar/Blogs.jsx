import React from "react";
const today = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});
const blogPosts = [
  {
    id: 1,
    imgSrc: "/assets/imgs/blog/1.jpg",
    author: "Sole Digital",
    date: today,
    title: "Maximize Your Reach with Professional SEO Services",
    detailsLink: "/blog-details/1",
  },
  {
    id: 2,
    imgSrc: "/assets/imgs/blog/2.jpg",
    author: "Sole Digital",
    date: today,
    title: "Boost Your Brand with Expert Social Media Marketing Services",
    detailsLink: "/blog-details/2",
  },
  {
    id: 3,
    imgSrc: "/assets/imgs/blog/3.jpg",
    author: "Sole Digital",
    date: today,
    title:
      "Transform Your Online Presence with Advanced Web Development Services",
    detailsLink: "/blog-details/3",
  },
  {
    id: 4,
    imgSrc: "/assets/imgs/blog/2.jpg",
    author: "Sole Digital",
    date: today,
    title:
      "Build Strong Customer Relationships with Comprehensive Content Marketing Services",
    detailsLink: "/blog-details/4",
  },
  {
    id: 5,
    imgSrc: "/assets/imgs/blog/1.jpg",
    author: "Sole Digital",
    date: today,
    title:
      "Drive Traffic and Sales with Targeted Pay-Per-Click (PPC) Advertising Services",
    detailsLink: "/blog-details/5",
  },
  {
    id: 6,
    imgSrc: "/assets/imgs/blog/3.jpg",
    author: "Sole Digital",
    date: today,
    title:
      "Typography: Choosing Fonts for Maximum ImpactEnhance Customer Engagement with Effective Email Marketing Services",
    detailsLink: "/blog-details/6",
  },
  {
    id: 6,
    imgSrc: "/assets/imgs/blog/3.jpg",
    author: "Sole Digital",
    date: today,
    title: "Leverage the Power of Influencer Marketing to Grow Your Brand",
    detailsLink: "/blog-details/7",
  },
  {
    id: 6,
    imgSrc: "/assets/imgs/blog/3.jpg",
    author: "Sole Digital",
    date: today,
    title:
      "Maximize Your Brand’s Impact: A Holistic Approach to Digital Marketing",
    detailsLink: "/blog-details/8",
  },
];

function Blogs() {
  return (
    <section className="blog-main section-padding">
      <div className="container">
        <div className="row lg-marg justify-content-around">
          <div className="col-lg-12">
            <div className="md-mb80 blog">
              <div className="row">
                {blogPosts.map((post, index) => (
                  <div
                    className={`col-md-6 ${index === 4 ? "sm-mb50" : "mb-50"}`}
                    key={post.id}
                  >
                    <div className="item">
                      <div className="img fit-img">
                        <img src={post.imgSrc} alt={post.title} />
                      </div>
                      <div className="cont pt-40">
                        <div className="info sub-title p-color d-flex align-items-center mb-15">
                          <div>
                            <a href="/blog-grid-sidebar">By : {post.author}</a>
                          </div>
                          <div className="ml-30">
                            <a href="/blog-grid-sidebar">{post.date}</a>
                          </div>
                        </div>
                        <h4 className="fz-30">{post.title}</h4>
                        <a
                          href={post.detailsLink}
                          className="butn-crev d-flex align-items-center mt-40"
                        >
                          <span className="hover-this">
                            <span className="circle hover-anim">
                              <i className="ti-arrow-top-right"></i>
                            </span>
                          </span>
                          <span className="text">Read more</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blogs;

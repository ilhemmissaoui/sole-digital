import React from "react";

function Blog() {
  const blogPosts = [
    {
      id: 3,
      title:
        "Transform Your Online Presence with Advanced Web Development Services",
      image: "/assets/imgs/blog/blogg1.PNG",
    },
    {
      id: 2,
      title: "Boost Your Brand with Expert Social Media Marketing Services",
      image: "/assets/imgs/blog/brandmarketing.jpg",
    },
    {
      id: 4,
      title: "Build Strong and Comprehensive Content Marketing Services",
      image: "/assets/imgs/blog/contentmarketing.jpg",
    },
  ];

  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <section className="blog style2">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Our Blogs</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Latest <span className="fw-200">News.</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto vi-more">
              <a href="/blogs" className="butn butn-sm butn-bord radius-30">
                <span>View All</span>
              </a>
              <span className="icon ti-arrow-top-right"></span>
            </div>
          </div>
        </div>
        <div className="row">
          {blogPosts.map((post) => (
            <div className="col-lg-4" key={post.id}>
              <div className={`item ${post.id !== 3 ? "md-mb50" : ""}`}>
                <div className="info sub-title p-color d-flex align-items-center mb-20">
                  <div>
                    <a href="/blogs">By : Admin</a>
                  </div>
                  <div className="ml-30">
                    <a href="/blogs">{currentDate}</a>
                  </div>
                </div>
                <div className="img fit-img">
                  <img src={post.image} alt="" />
                </div>
                <div className="cont pt-30">
                  <h5>{post.title}</h5>
                  <a
                    href={`/blog-details/${post.id}`}
                    className="butn-crev d-flex align-items-center mt-30"
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
    </section>
  );
}

export default Blog;

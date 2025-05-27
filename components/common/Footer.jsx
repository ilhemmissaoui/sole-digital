import React from "react";

function Footer() {
  return (
    <footer className="clean-footer crev">
      <div className="container pb-40 pt-40 ontop">
        <div className="row justify-content-between">
          <div className="col-lg-2">
            <div className="logo icon-img-100 md-mb80">
              <img src="/assets/imgs/soleDigital.svg" alt="" />
            </div>
            <br />
            <div className="column subscribe-minimal">
              <ul className="rest social-icon d-flex align-items-center">
                <li>
                  <a
                    href="https://www.facebook.com/onedigitalmediaest/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-anim"
                    style={{ cursor: "pointer" }}
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="ml-10">
                  <a
                    href="https://www.linkedin.com/company/soledigitalmedia/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-anim"
                    style={{ cursor: "pointer" }}
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li className="ml-10">
                  <a
                    href="https://www.instagram.com/onedigitalmediaest/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-anim"
                    style={{ cursor: "pointer" }}
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Tunisia</h6>

              <div className="p-color fw-400">
                Av. de Yasser Arafat, Sousse 4054
              </div>

              <h6 className="mt-30 mb-15">
                <a href="#0">info@soledigitalmedia.tn</a>
              </h6>
              <a href="#0" className="underline">
                <span className="fz-22 main-color">+216 58 944 414</span>
              </a>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Canada</h6>

              <div className="p-color fw-400">
                3465 Platinum Dr #208, Mississauga, ON L5M 2S1, Canada
              </div>
              <h6 className="mt-30 mb-15">
                <a href="#0">info@soledigitalmedia.com</a>
              </h6>

              <a href="#0" className="underline">
                <span className="fz-22 main-color">+1 (905) 745 4395</span>
              </a>
            </div>
          </div>

          <div className="col-lg-2">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Useful Links</h6>
              <ul className="rest fz-14 opacity-7">
                <li className="mb-15">
                  <a href="/page-about">About</a>
                </li>
                <li className="mb-15">
                  <a href="/page-services">Services</a>
                </li>
                <li className="mb-15">
                  <a href="/blogs">Blog</a>
                </li>
                <li>
                  <a href="/page-contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-30 pb-30 mt-80 bord-thin-top">
          <div className="text-center">
            <p className="fz-14">
              © 2025 soleDigital
              <span className="underline main-color">
                <a href="https://soledigitalmedia.com" target="_blank">
                  Sole Digital
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="circle-blur">
        <img src="/assets/imgs/patterns/blur1.png" alt="" />
      </div>
    </footer>
  );
}

export default Footer;

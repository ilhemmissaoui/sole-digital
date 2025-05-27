import React from "react";

function Footer() {
  return (
    <footer className="clean-footer crev">
      <div className="container pb-40 pt-40 ontop">
        <div className="row justify-content-between">
          <div className="col-lg-2">
            <div className="logo icon-img-100 md-mb80">
              <img src="/assets/imgs/logo.png" alt="" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Tunisia</h6>
              <div className="p-color fw-400 d-flex align-items-center gap-2">
                <i className="fas fa-map-marker-alt"></i>
                Av. de Yasser Arafat, Sousse 4054
              </div>{" "}
              <br />
              <div className="p-color fw-400 d-flex align-items-center gap-2 mt-4">
                <i className="fas fa-envelope"></i>
                <a href="#0">info@soledigitalmedia.tn</a>
              </div>
              <div className="p-color fw-400 d-flex align-items-center gap-2 mt-4">
                <i className="fas fa-phone"></i>
                <a href="#0">+216 58 944 414</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Canada</h6>
              <div className="p-color fw-400 d-flex align-items-start gap-2">
                <i className="fas fa-map-marker-alt pt-1"></i>
                <span>
                  3465 Platinum Dr #208, Mississauga, ON L5M 2S1, Canada
                </span>
              </div>
              <div className="p-color fw-400 d-flex align-items-center gap-2 mt-4">
                <i className="fas fa-envelope"></i>
                <a href="#0">info@soledigitalmedia.com</a>
              </div>
              <div className="p-color fw-400 d-flex align-items-center gap-2 mt-4">
                <i className="fas fa-phone"></i>
                <a href="#0">+1 (905) 745 4395</a>
              </div>
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
        <div className="column subscribe-minimal mt-50">
          <ul className="rest social-icon d-flex align-items-center justify-content-center">
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

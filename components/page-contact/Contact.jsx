import React from "react";

function Contact() {
  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 valign">
            <div className="sec-head info-box full-width md-mb80">
              <div className="morinfo mt-50 pb-30 bord-thin-bottom">
                <h6 className="mb-15">Tunisia</h6>
                <div className="d-flex align-items-center gap-2 p-color">
                  <i className="fas fa-map-marker-alt"></i>
                  <p>Av. de Yasser Arafat, Sousse 4054</p>
                </div>
                <br />
                <div className="phone fw-500">
                  <a
                    href="#0"
                    className="d-flex align-items-center gap-2 p-color"
                  >
                    <i className="fas fa-phone"></i>
                    +216 58 944 414
                  </a>
                </div>
                <div className="morinfo mt-30 pb-30">
                  <div className="d-flex align-items-center gap-2 p-color">
                    <i className="fas fa-envelope"></i>
                    <p>info@soledigitalmedia.tn</p>
                  </div>
                </div>
              </div>

              <div className="morinfo mt-50 pb-30">
                <h6 className="mb-15">Canada</h6>
                <div className="d-flex align-items-start gap-2 p-color">
                  <i className="fas fa-map-marker-alt pt-1"></i>
                  <p>3465 Platinum Dr #208, Mississauga, ON L5M 2S1, Canada</p>
                </div>
                <br />
                <div className="phone fw-500">
                  <div className="d-flex align-items-start gap-2 p-color">
                    <i className="fas fa-phone pt-1"></i>
                    <a href="#0">+1(905) 745 4395</a>
                  </div>
                </div>
                <div className="morinfo mt-30 pb-30">
                  <div className="d-flex align-items-start gap-2 p-color">
                    <i className="fas fa-envelope pt-1"></i>
                    <p>info@soledigitalmedia.com</p>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
          <div className="col-lg-7 offset-lg-1 valign">
            <div className="full-width">
              <div className="sec-head mb-50">
                <h6 className="sub-title main-color mb-15">Let&lsquo;s Chat</h6>
                <h3 className="text-u ls1">
                  Send a <span className="fw-200">message</span>
                </h3>
              </div>
              <form id="contact-form" className="form2" method="post" action="">
                <div className="messages"></div>

                <div className="controls row">
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        placeholder="Name"
                        required="required"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        required="required"
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group mb-30">
                      <input
                        id="form_subject"
                        type="text"
                        name="subject"
                        placeholder="Subject"
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        id="form_message"
                        name="message"
                        placeholder="Message"
                        rows="4"
                        required="required"
                      ></textarea>
                    </div>
                    <div className="mt-30">
                      <button
                        type="submit"
                        className="butn butn-full butn-bord radius-30"
                      >
                        <span className="text">Let&lsquo;s Talk</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

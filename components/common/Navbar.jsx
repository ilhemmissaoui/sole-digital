"use client";
import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";

function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  function handleScroll() {
    const bodyScroll = window.scrollY;
    const navbar = document.querySelector(".navbar");
    if (bodyScroll > 300) navbar?.classList.add("nav-scroll");
    else navbar?.classList.remove("nav-scroll");
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleDropdownMouseMove(event) {
    event.currentTarget.querySelector(".dropdown-menu")?.classList.add("show");
  }

  function handleDropdownMouseLeave(event) {
    event.currentTarget
      .querySelector(".dropdown-menu")
      ?.classList.remove("show");
  }

  function handleToggleNav() {
    const nav = document.querySelector(".navbar .navbar-collapse");
    nav?.classList.toggle("show");
  }

  // Set locale cookie and reload page
  function switchLanguage(newLocale) {
    if (newLocale === locale) return;
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/`;
    window.location.reload();
  }

  return (
    <nav className="navbar navbar-expand-lg bord blur">
      <div className="container o-hidden">
        <a className="logo icon-img-100" href="/">
          <img src="/assets/imgs/Logo3.svg" alt="logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggleNav}
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                <span className="rolling-text">Home</span>
              </a>
            </li>

            <li
              onMouseLeave={handleDropdownMouseLeave}
              onMouseMove={handleDropdownMouseMove}
              className="nav-item dropdown"
            >
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text">Our services</span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/page-services">
                    Services
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/page-services-details">
                    Services Details
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/page-team">
                    Our Team
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/page-team-details">
                    Team Details
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/page-contact">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/page-FAQ">
                    FAQS
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/page-404">
                    Error 404
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/blogs">
                <span className="rolling-text">Blogs</span>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/page-contact">
                <span className="rolling-text">Contact Us</span>
              </a>
            </li>

            {/* LANGUAGE SWITCHER */}
            <li
              onMouseLeave={handleDropdownMouseLeave}
              onMouseMove={handleDropdownMouseMove}
              className="nav-item dropdown"
            >
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text">
                  {locale === "en"
                    ? "English"
                    : locale === "fr"
                    ? "French"
                    : "Arabic"}
                </span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <button
                    className={`dropdown-item ${
                      locale === "en" ? "active" : ""
                    }`}
                    onClick={() => switchLanguage("en")}
                  >
                    English
                  </button>
                </li>
                <li>
                  <button
                    className={`dropdown-item ${
                      locale === "fr" ? "active" : ""
                    }`}
                    onClick={() => switchLanguage("fr")}
                  >
                    French
                  </button>
                </li>
                <li>
                  <button
                    className={`dropdown-item ${
                      locale === "ar" ? "active" : ""
                    }`}
                    onClick={() => switchLanguage("ar")}
                  >
                    Arabic
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="contact-button">
          <a
            href="/page-contact"
            className="butn butn-sm butn-bg main-colorbg radius-5"
          >
            <span className="text">Let&apos;s contact</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

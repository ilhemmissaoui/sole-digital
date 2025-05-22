"use client";
import React, { useEffect } from "react";

function Navbar() {
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

  return (
    <nav className="navbar navbar-expand-lg bord blur">
      <div className="container o-hidden">
        <a className="logo icon-img-100" href="/">
          <img src="/assets/imgs/soleDigital.svg" alt="logo" />
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
            <li className="nav-item">
              <a className="nav-link" href="/page-about">
                <span className="rolling-text">About us</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/page-services">
                <span className="rolling-text">Services</span>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/blogs">
                <span className="rolling-text">Blogs</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/blogs">
                <span className="rolling-text">TikTok agency</span>
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
                <span className="rolling-text">Languages</span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <button className="dropdown-item">English</button>
                </li>
                <li>
                  <button className="dropdown-item">French</button>
                </li>
                <li>
                  <button className="dropdown-item">Arabic</button>
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

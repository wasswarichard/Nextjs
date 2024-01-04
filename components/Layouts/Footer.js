import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="footer-area ptb-100 pb-0">
        <div className="container">
          <div className="row justify-content-lg-between">
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <Link href="/saas" className="logo">
                  <img src="/images/lystface_logo.png" alt="logo" />
                </Link>
                <p>
                  Recognize Faces Your Way: Tailored
                  Recognition Solutions
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget pl-5">
                <h3>Company</h3>

                <ul className="list">
                  <li>
                    <Link href="/about">Use Cases</Link>
                  </li>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/about">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="#">Careers</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>DOCUMENTATION</h3>

                <ul className="list">
                  <li>
                    <Link href="/about">API Reference</Link>
                  </li>
                  <li>
                    <Link href="/contact">Help Center</Link>
                  </li>
                  <li>
                    <Link href="/faq">FAQ</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-6">
                <p>
                  Copyright @2024 Lystloc Inc. All rights reserved
                </p>
              </div>

              <div className="col-lg-6 col-md-6">
                <ul>
                  <li>
                    <Link href="#">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link href="#">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

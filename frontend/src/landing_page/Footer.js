import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#fafafa",
      }}
    >
      <div className="container border-top mt-5 pt-5">

        <div className="row">

          <div className="col-md-3 mb-4">

            <img
              src="media/images/logo.svg"
              alt="Vestora Logo"
              style={{ width: "140px" }}
            />

            <p className="mt-3 text-muted">
              © 2026 Vestora Trading Platform.
              <br />
              All rights reserved.
            </p>
          </div>

          <div className="col-md-3 mb-4">
            <h6>Company</h6>

            <Link to="/about">About</Link>
            <br />

            <Link to="/product">Products</Link>
            <br />

            <Link to="/pricing">Pricing</Link>
            <br />

            <Link to="/support">Support</Link>
          </div>

          <div className="col-md-3 mb-4">
            <h6>Account</h6>

            <Link to="/signup">Open account</Link>
            <br />

            <Link to="/pricing">Pricing plans</Link>
          </div>

          <div className="col-md-3 mb-4">
            <h6>Resources</h6>

            <a href="/">Documentation</a>
            <br />

            <a href="/">Help center</a>
          </div>

        </div>

        <div
          className="mt-4 text-muted"
          style={{
            fontSize: "14px",
            lineHeight: "1.8",
          }}
        >
          <p>
            Investments in the securities market are subject
            to market risks. Please review all related
            documents carefully before investing.
          </p>

          <p>
            Vestora is a learning-focused trading platform
            built to simulate modern investing experiences.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
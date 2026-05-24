import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section>
      <div className="container border-bottom mb-5">

        <div className="text-center py-5">

          <h1 className="mb-3">
            Technology built for investing
          </h1>

          <p
            className="text-muted mb-4"
            style={{
              fontSize: "18px",
            }}
          >
            Sleek, modern and intuitive tools
            designed for trading,
            investing and portfolio tracking.
          </p>

          <Link
            to="/pricing"
            style={{
              textDecoration: "none",
            }}
          >
            Explore investing options{" "}
            <i
              className="fa fa-long-arrow-right"
              aria-hidden="true"
            ></i>
          </Link>

        </div>

      </div>
    </section>
  );
}

export default Hero;
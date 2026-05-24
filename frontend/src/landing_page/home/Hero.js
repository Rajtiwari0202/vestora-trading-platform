import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section>
      <div className="container text-center">

        <img
          src="media/images/homeHero.png"
          alt="Vestora dashboard preview"
          className="img-fluid mb-5"
          style={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        />

        <h1
          className="mb-3"
          style={{
            fontSize: "48px",
            fontWeight: "700",
          }}
        >
          Invest in everything
        </h1>

        <p
          className="text-muted mb-4"
          style={{
            fontSize: "20px",
          }}
        >
          Trade stocks, ETFs, mutual funds
          and track your portfolio
          from one clean platform.
        </p>

        <Link
          to="/signup"
          className="btn btn-primary px-4 py-2 fs-5"
        >
          Sign up now
        </Link>

      </div>
    </section>
  );
}

export default Hero;
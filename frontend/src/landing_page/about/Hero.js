import React from "react";

function Hero() {
  return (
    <section>
      <div className="container">

        <div className="row text-center py-5">

          <h1
            className="mb-4"
            style={{
              fontSize: "40px",
              fontWeight: "700",
            }}
          >
            We’re building investing
            for the next generation.
          </h1>

          <p
            className="text-muted"
            style={{
              fontSize: "18px",
            }}
          >
            Vestora was built with one goal —
            make investing feel simple,
            transparent and accessible.
          </p>

        </div>

        <div
          className="row border-top pt-5 text-muted"
          style={{
            lineHeight: "1.9",
            fontSize: "18px",
          }}
        >

          <div className="col-lg-6 mb-4">

            <p>
              Investing platforms often feel
              complicated for new users.
              We wanted something cleaner,
              faster and easier to trust.
            </p>

            <p>
              Vestora combines investing,
              portfolio tracking and market tools
              into one platform built for
              long-term investors.
            </p>

            <p>
              Every screen is designed to feel
              intuitive and fast.
            </p>

          </div>

          <div className="col-lg-6 mb-4">

            <p>
              We believe pricing should be clear,
              interfaces should stay simple,
              and investing should feel accessible.
            </p>

            <p>
              Vestora is growing as a product-first
              platform focused on building useful
              fintech tools for Indian investors.
            </p>

            <p>
              This is just the beginning.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
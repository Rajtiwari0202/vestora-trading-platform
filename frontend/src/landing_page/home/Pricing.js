import React from "react";
import { Link } from "react-router-dom";

function Pricing() {
  return (
    <section>
      <div className="container">

        <div className="row align-items-center">

          <div className="col-lg-5 mb-4">

            <h2 className="mb-3">
              Transparent pricing
            </h2>

            <p className="text-muted">
              Built for investors who want
              simple pricing with no hidden fees.
            </p>

            <Link to="/pricing">
              See pricing
              {" "}
              <i
                className="fa fa-long-arrow-right"
                aria-hidden="true"
              ></i>
            </Link>

          </div>

          <div className="col-lg-7">

            <div className="row text-center">

              <div className="col-md-6 mb-3">

                <div className="border rounded p-4 h-100">

                  <h2 className="mb-3">
                    ₹0
                  </h2>

                  <p className="text-muted">
                    Equity delivery
                    <br />
                    and mutual fund investing
                  </p>

                </div>

              </div>

              <div className="col-md-6 mb-3">

                <div className="border rounded p-4 h-100">

                  <h2 className="mb-3">
                    ₹20
                  </h2>

                  <p className="text-muted">
                    Flat intraday
                    <br />
                    and derivatives fee
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Pricing;
import React from "react";
import { Link } from "react-router-dom";

function Brokerage() {
  return (
    <section>
      <div className="container border-top pt-5">

        <div className="row">

          <div className="col-lg-8 mb-4">

            <Link to="/pricing">
              <h4 className="mb-4">
                Brokerage calculator
              </h4>
            </Link>

            <ul
              className="text-muted"
              style={{
                lineHeight: "2",
                fontSize: "15px",
              }}
            >
              <li>
                Flat brokerage on intraday
                and derivatives.
              </li>

              <li>
                Digital contract notes
                delivered instantly.
              </li>

              <li>
                Transparent pricing with
                no hidden fees.
              </li>

              <li>
                Clear breakdown for
                every transaction.
              </li>

              <li>
                Easy portfolio tracking
                and order history.
              </li>

              <li>
                Designed for fast,
                modern investing.
              </li>
            </ul>

          </div>

          <div className="col-lg-4">

            <Link to="/pricing">
              <h4>
                Full pricing list
              </h4>
            </Link>

            <p className="text-muted mt-3">
              Explore charges,
              account fees and
              brokerage details.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Brokerage;
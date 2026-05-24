import React from "react";
import { Link } from "react-router-dom";

function Stats() {
  return (
    <section>
      <div className="container">

        <div className="row align-items-center">

          <div className="col-lg-6 mb-5">

            <h2 className="mb-4">
              Invest with confidence
            </h2>

            <h5>Customer-first always</h5>

            <p className="text-muted">
              Vestora is designed to help
              investors manage portfolios
              with simplicity and clarity.
            </p>

            <h5>No noise. No distractions.</h5>

            <p className="text-muted">
              No spammy notifications.
              No unnecessary clutter.
              Just a clean investing experience.
            </p>

            <h5>A connected ecosystem</h5>

            <p className="text-muted">
              Track holdings, discover products,
              monitor performance and manage
              everything from one dashboard.
            </p>

            <h5>Build better money habits</h5>

            <p className="text-muted">
              Long-term investing tools and
              portfolio insights designed
              to help you make better decisions.
            </p>

          </div>

          <div className="col-lg-6">

            <img
              src="media/images/ecosystem.png"
              alt="Vestora ecosystem"
              className="img-fluid mb-4"
            />

            <div className="text-center">

              <Link
                to="/product"
                className="mx-4"
              >
                Explore products
                {" "}
                <i
                  className="fa fa-long-arrow-right"
                  aria-hidden="true"
                ></i>
              </Link>

              <Link
                to="/signup"
              >
                Try demo
                {" "}
                <i
                  className="fa fa-long-arrow-right"
                  aria-hidden="true"
                ></i>
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Stats;
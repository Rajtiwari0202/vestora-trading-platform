import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <section>
      <div className="container mt-5">

        <div className="row text-center">

          <h2 className="mb-3">
            The Vestora ecosystem
          </h2>

          <p className="text-muted mb-5">
            Extend your investing experience
            with tools built around research,
            tracking and learning.
          </p>

          <div className="col-md-4 mb-5">
            <img
              src="media/images/smallcaseLogo.png"
              alt="Portfolio baskets"
              className="img-fluid mb-3"
            />
            <p className="text-muted">
              Curated investing baskets
            </p>
          </div>

          <div className="col-md-4 mb-5">
            <img
              src="media/images/streakLogo.png"
              alt="Trading strategies"
              className="img-fluid mb-3"
            />
            <p className="text-muted">
              Strategy and automation tools
            </p>
          </div>

          <div className="col-md-4 mb-5">
            <img
              src="media/images/sensibullLogo.svg"
              alt="Options analytics"
              className="img-fluid mb-3"
            />
            <p className="text-muted">
              Advanced market analytics
            </p>
          </div>

          <div className="col-md-4 mb-5">
            <img
              src="media/images/goldenpiLogo.png"
              alt="Bonds"
              className="img-fluid mb-3"
            />
            <p className="text-muted">
              Bonds and fixed income
            </p>
          </div>

          <div className="col-md-4 mb-5">
            <img
              src="media/images/dittoLogo.png"
              alt="Financial planning"
              className="img-fluid mb-3"
            />
            <p className="text-muted">
              Financial planning tools
            </p>
          </div>

          <div className="col-md-4 mb-5">
            <img
              src="media/images/zerodhaFundhouse.png"
              alt="Funds"
              className="img-fluid mb-3"
            />
            <p className="text-muted">
              Investment fund solutions
            </p>
          </div>

          <Link
            to="/signup"
            className="btn btn-primary px-4 py-2 fs-5"
            style={{
              width: "fit-content",
              margin: "0 auto",
            }}
          >
            Sign up now
          </Link>

        </div>

      </div>
    </section>
  );
}

export default Universe;
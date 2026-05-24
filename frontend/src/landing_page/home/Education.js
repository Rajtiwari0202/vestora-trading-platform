import React from "react";
import { Link } from "react-router-dom";

function Education() {
  return (
    <section>
      <div className="container">

        <div className="row align-items-center">

          <div className="col-lg-6 mb-4">

            <img
              src="media/images/education.svg"
              alt="Learning resources"
              className="img-fluid"
              style={{ maxWidth: "80%" }}
            />

          </div>

          <div className="col-lg-6">

            <h2 className="mb-3">
              Learn investing for free
            </h2>

            <p className="text-muted">
              Beginner-friendly investing lessons,
              market basics and portfolio guides —
              built inside Vestora.
            </p>

            <Link to="/product">
              Learning Hub
              {" "}
              <i
                className="fa fa-long-arrow-right"
                aria-hidden="true"
              ></i>
            </Link>

            <p className="mt-5 text-muted">
              Join the community,
              ask investing questions,
              and learn from other investors.
            </p>

            <Link to="/support">
              Community & support
              {" "}
              <i
                className="fa fa-long-arrow-right"
                aria-hidden="true"
              ></i>
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;
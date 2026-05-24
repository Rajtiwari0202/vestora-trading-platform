import React from "react";
import { Link } from "react-router-dom";

function RightSection({
  imageURL,
  productName,
  productDesription,
  learnMore,
}) {
  return (
    <section>
      <div className="container mt-5">

        <div className="row align-items-center">

          <div className="col-lg-6 mb-4">

            <h2 className="mb-3">
              {productName}
            </h2>

            <p className="text-muted">
              {productDesription}
            </p>

            {learnMore && (
              <Link to={learnMore}>
                Learn more
              </Link>
            )}

          </div>

          <div className="col-lg-6 mb-4">

            <img
              src={imageURL}
              alt={productName}
              className="img-fluid"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default RightSection;
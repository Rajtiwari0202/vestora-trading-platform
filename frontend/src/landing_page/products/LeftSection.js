import React from "react";
import { Link } from "react-router-dom";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <section>
      <div className="container mt-5">

        <div className="row align-items-center">

          <div className="col-lg-6 mb-4">

            <img
              src={imageURL}
              alt={productName}
              className="img-fluid"
            />

          </div>

          <div className="col-lg-6">

            <h2 className="mb-3">
              {productName}
            </h2>

            <p className="text-muted">
              {productDesription}
            </p>

            <div className="mb-3">

              {tryDemo && (
                <Link to={tryDemo}>
                  Try demo
                </Link>
              )}

              {learnMore && (
                <Link
                  to={learnMore}
                  style={{ marginLeft: "30px" }}
                >
                  Learn more
                </Link>
              )}

            </div>

            <div>

              {googlePlay && (
                <a href={googlePlay}>
                  <img
                    src="media/images/googlePlayBadge.svg"
                    alt="Google Play"
                  />
                </a>
              )}

              {appStore && (
                <a
                  href={appStore}
                  style={{ marginLeft: "20px" }}
                >
                  <img
                    src="media/images/appstoreBadge.svg"
                    alt="App Store"
                  />
                </a>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default LeftSection;
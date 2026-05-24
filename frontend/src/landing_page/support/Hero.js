import React from "react";

function Hero() {
  return (
    <section
      className="container-fluid"
      id="supportHero"
    >
      <div
        className="p-4"
        id="supportWrapper"
      >
        <h4>
          Vestora Support
        </h4>

        <a href="/">
          Track tickets
        </a>
      </div>

      <div className="row p-5">

        <div className="col-md-6 mb-4">

          <h2 className="mb-4">
            Search for answers
            or browse help topics
          </h2>

          <input
            type="text"
            placeholder="Search support articles..."
          />

          <div
            className="mt-4"
            style={{
              lineHeight: "2",
            }}
          >
            <a href="/">
              Account opening
            </a>
            <br />

            <a href="/">
              Segment activation
            </a>
            <br />

            <a href="/">
              Intraday margins
            </a>
            <br />

            <a href="/">
              Platform guide
            </a>
          </div>

        </div>

        <div className="col-md-6">

          <h3 className="mb-4">
            Featured
          </h3>

          <ol
            style={{
              lineHeight: "2",
            }}
          >
            <li>
              <a href="/">
                New market features
                this month
              </a>
            </li>

            <li>
              <a href="/">
                Latest trading
                platform updates
              </a>
            </li>

            <li>
              <a href="/">
                Account security tips
              </a>
            </li>
          </ol>

        </div>

      </div>
    </section>
  );
}

export default Hero;
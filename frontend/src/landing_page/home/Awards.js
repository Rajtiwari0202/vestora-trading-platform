import React from "react";

function Awards() {
  return (
    <section>
      <div className="container">

        <div className="row align-items-center">

          <div className="col-lg-6 mb-4">
            <img
              src="media/images/largestBroker.svg"
              alt="Vestora trading illustration"
              className="img-fluid"
            />
          </div>

          <div className="col-lg-6">

            <h2 className="mb-3">
              A smarter way to invest in India
            </h2>

            <p className="text-muted mb-4">
              Vestora helps investors trade,
              invest and manage portfolios
              through one modern platform.
            </p>

            <div className="row">

              <div className="col-md-6">
                <ul>
                  <li>Futures & Options</li>
                  <li>Commodity derivatives</li>
                  <li>Currency derivatives</li>
                </ul>
              </div>

              <div className="col-md-6">
                <ul>
                  <li>Stocks & IPOs</li>
                  <li>Mutual funds</li>
                  <li>Bonds & securities</li>
                </ul>
              </div>

            </div>

            <img
              src="media/images/pressLogos.png"
              alt="Press logos"
              className="img-fluid mt-4"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Awards;
import React from "react";

function Hero() {
  return (
    <section>
      <div className="container">

        <div className="row text-center border-bottom pb-5">

          <h1 className="mb-3">
            Pricing
          </h1>

          <p
            className="text-muted"
            style={{
              fontSize: "18px",
            }}
          >
            Transparent investing with
            simple pricing and no hidden fees.
          </p>

        </div>

        <div className="row text-center mt-5">

          <div className="col-lg-4 mb-4">

            <img
              src="media/images/pricingEquity.svg"
              alt="Equity investing"
              className="img-fluid mb-4"
            />

            <h3 className="mb-3">
              ₹0 equity delivery
            </h3>

            <p className="text-muted">
              Invest in long-term stocks
              with zero brokerage.
            </p>

          </div>

          <div className="col-lg-4 mb-4">

            <img
              src="media/images/intradayTrades.svg"
              alt="Intraday trading"
              className="img-fluid mb-4"
            />

            <h3 className="mb-3">
              ₹20 intraday & F&O
            </h3>

            <p className="text-muted">
              Flat pricing on trades
              across derivatives
              and intraday.
            </p>

          </div>

          <div className="col-lg-4 mb-4">

            <img
              src="media/images/pricingMF.svg"
              alt="Mutual funds"
              className="img-fluid mb-4"
            />

            <h3 className="mb-3">
              ₹0 mutual funds
            </h3>

            <p className="text-muted">
              Direct mutual fund investing
              with simple tracking.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
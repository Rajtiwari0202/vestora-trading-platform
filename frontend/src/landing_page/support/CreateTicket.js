import React from "react";

function CreateTicket() {
  return (
    <section>
      <div className="container">

        <div className="row mt-5 mb-5">

          <h2 className="mb-5">
            Create a support ticket
          </h2>

          <div className="col-md-4 mb-5">

            <h5 className="mb-3">
              <i
                className="fa fa-user-circle"
                aria-hidden="true"
              ></i>{" "}
              Account opening
            </h5>

            <a href="/">Open account online</a>
            <br />

            <a href="/">NRI accounts</a>
            <br />

            <a href="/">KYC verification</a>
            <br />

            <a href="/">Account charges</a>

          </div>

          <div className="col-md-4 mb-5">

            <h5 className="mb-3">
              <i
                className="fa fa-line-chart"
                aria-hidden="true"
              ></i>{" "}
              Trading & markets
            </h5>

            <a href="/">Orders & positions</a>
            <br />

            <a href="/">Intraday & delivery</a>
            <br />

            <a href="/">IPO investing</a>
            <br />

            <a href="/">Market timings</a>

          </div>

          <div className="col-md-4 mb-5">

            <h5 className="mb-3">
              <i
                className="fa fa-credit-card"
                aria-hidden="true"
              ></i>{" "}
              Funds
            </h5>

            <a href="/">Add funds</a>
            <br />

            <a href="/">Withdraw balance</a>
            <br />

            <a href="/">UPI payments</a>
            <br />

            <a href="/">Bank account update</a>

          </div>

          <div className="col-md-4 mb-5">

            <h5 className="mb-3">
              <i
                className="fa fa-lock"
                aria-hidden="true"
              ></i>{" "}
              Security
            </h5>

            <a href="/">Password reset</a>
            <br />

            <a href="/">2FA login</a>
            <br />

            <a href="/">Device verification</a>

          </div>

          <div className="col-md-4 mb-5">

            <h5 className="mb-3">
              <i
                className="fa fa-book"
                aria-hidden="true"
              ></i>{" "}
              Learning
            </h5>

            <a href="/">Market basics</a>
            <br />

            <a href="/">Beginner investing</a>
            <br />

            <a href="/">Trading guides</a>

          </div>

          <div className="col-md-4 mb-5">

            <h5 className="mb-3">
              <i
                className="fa fa-life-ring"
                aria-hidden="true"
              ></i>{" "}
              General support
            </h5>

            <a href="/">Contact support</a>
            <br />

            <a href="/">Report an issue</a>
            <br />

            <a href="/">Feedback</a>

          </div>

        </div>
      </div>
    </section>
  );
}

export default CreateTicket;
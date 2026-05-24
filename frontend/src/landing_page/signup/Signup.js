import React from "react";

function Signup() {
  return (
    <section>
      <div className="container">

        <div className="row align-items-center mt-5">

          <div className="col-lg-6 mb-5">

            <img
              src="media/images/signup.png"
              alt="Signup"
              className="img-fluid"
            />

          </div>

          <div className="col-lg-6">

            <h1 className="mb-3">
              Open your Vestora account
            </h1>

            <p
              className="text-muted mb-4"
              style={{
                fontSize: "18px",
              }}
            >
              Start investing with a simple,
              modern and transparent platform.
            </p>

            <form>

              <div className="mb-3">

                <label className="form-label">
                  Full Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your full name"
                />

              </div>

              <div className="mb-3">

                <label className="form-label">
                  Email
                </label>

                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />

              </div>

              <div className="mb-4">

                <label className="form-label">
                  Mobile Number
                </label>

                <input
                  type="tel"
                  className="form-control"
                  placeholder="Enter your mobile number"
                />

              </div>

              <button
                type="submit"
                className="btn btn-primary px-4 py-2"
              >
                Create account
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Signup;
import React, { useState } from "react";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const dashboardURL =
    "https://vestora-trading-platform-dasboard.vercel.app/";

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.mobile) {
      alert("Please fill all fields");
      return;
    }

    alert("Account created successfully!");
    window.location.href = dashboardURL;
  }

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
            <h1 className="mb-3">Open your Vestora account</h1>

            <p
              className="text-muted mb-4"
              style={{
                fontSize: "18px",
              }}
            >
              Start investing with a simple, modern and transparent platform.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Full Name</label>

                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>

                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <label className="form-label">Mobile Number</label>

                <input
                  type="tel"
                  name="mobile"
                  className="form-control"
                  placeholder="Enter your mobile number"
                  value={formData.mobile}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary px-4 py-2">
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
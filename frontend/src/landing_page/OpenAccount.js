import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <section>
      <div className="container text-center">

        <h2 className="mb-3">
          Open your Vestora account
        </h2>

        <p
          className="text-muted mb-4"
          style={{
            fontSize: "18px",
          }}
        >
          Invest with a modern platform,
          intuitive portfolio tracking,
          and transparent pricing.
        </p>

        <Link
          to="/signup"
          className="btn btn-primary px-4 py-2 fs-5"
        >
          Sign up now
        </Link>

      </div>
    </section>
  );
}

export default OpenAccount;
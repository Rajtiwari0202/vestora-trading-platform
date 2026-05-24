import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section>
      <div className="container text-center py-5">

        <h1
          style={{
            fontSize: "72px",
            fontWeight: "700",
          }}
        >
          404
        </h1>

        <h3 className="mb-3">
          Page not found
        </h3>

        <p className="text-muted mb-4">
          Sorry, the page you’re looking for doesn’t exist.
        </p>

        <Link
          to="/"
          className="btn btn-primary px-4 py-2"
        >
          Go back home
        </Link>

      </div>
    </section>
  );
}

export default NotFound;
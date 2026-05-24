import React from "react";

function Team() {
  return (
    <section className="py-5">
      <div className="container">

        {/* Heading */}
        <div className="row border-top pt-5 mb-5">
          <h2 className="text-center">Meet the Builder</h2>
        </div>

        {/* Main content */}
        <div
          className="row align-items-center"
          style={{
            lineHeight: "1.9",
            fontSize: "18px",
          }}
        >
          {/* Left side */}
          <div className="col-lg-5 text-center mb-5">

            <div
              style={{
                width: "280px",
                height: "280px",
                borderRadius: "50%",
                overflow: "hidden",
                margin: "0 auto",
                boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
              }}
            >
              <img
                src="/media/images/RajTiwariImage.jpg"
                alt="Raj Tiwari"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            <h2
              className="mt-4"
              style={{
                color: "#387ed1",
                fontWeight: "600",
                letterSpacing: "1px",
              }}
            >
              VESTORA
            </h2>

            <h4 className="mt-3">Raj Tiwari</h4>

            <p className="text-muted">
              Founder • Full Stack Developer
            </p>
          </div>

          {/* Right side */}
          <div className="col-lg-7 text-muted">

            <p>
              I built <strong>Vestora</strong> as a full-stack fintech platform
              to understand how modern trading and investing systems are
              designed—from clean user interfaces to portfolio dashboards and
              backend architecture.
            </p>

            <p>
              The goal behind Vestora was to go beyond tutorials and build a
              real product with reusable components, routing, structured pages
              and scalable frontend architecture.
            </p>

            <p>
              This project is helping me deeply understand React, modern UI
              development, backend integration, authentication and how fintech
              platforms manage real-world workflows.
            </p>

            <p>
              Outside development, I spend time solving DSA problems, learning
              system design, improving problem solving and building strong
              full-stack projects for product-based roles.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
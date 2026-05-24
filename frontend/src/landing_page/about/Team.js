import React from "react";

function Team() {
  return (
    <section>
      <div className="container">
        <div className="row border-top pt-5">
          <h2 className="text-center mb-5">Meet the builder</h2>
        </div>

        <div
          className="row align-items-center text-muted"
          style={{
            lineHeight: "1.9",
            fontSize: "18px",
          }}
        >
          <div className="col-lg-6 text-center mb-4">
            <img
              src="media\images\RajTiwariImage.jpg"
              alt="Raj Tiwari"
              className="img-fluid"
              style={{
                width: "280px",
                height: "280px",
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />

            <h4 className="mt-4">Raj Tiwari</h4>

            <p>Founder & Full Stack Developer</p>
          </div>

          <div className="col-lg-6">
            <p>
              I built Vestora as a full-stack fintech platform to deeply
              understand how modern trading and investment systems are designed.
            </p>

            <p>
              The idea started with a simple goal: create an investing platform
              that feels clean, intuitive and trustworthy — while learning how
              real-world fintech products handle portfolios, market workflows
              and user experience.
            </p>

            <p>
              Vestora is being built with React, routing, reusable UI
              components, backend APIs, authentication, portfolio management and
              deployment — with the mindset of building a production-ready
              product, not just another practice project.
            </p>

            <p>
              Outside of development, I enjoy problem solving, data structures &
              algorithms, and building products that combine clean engineering
              with strong user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;

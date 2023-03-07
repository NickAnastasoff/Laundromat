import React from "react";
import Wide from "./images/Wide.png";
import "./index.css";

function Homepage() {
  return (
    <div className="container">
      <div className="header">
        <img src={Wide} alt="Laundromat" />
        <h1>We're not your average laundromat</h1>
      </div>
      <main className="main-content">
        <section className="services">
          <h2>Our Services</h2>
          <ul>
            <li>Self-service washers and dryers</li>
            <li>Detergent and fabric softener vending machines</li>
            <li>On site change machine</li>
          </ul>
        </section>
        <section className="why-choose-us">
          <h2>Why Choose Us?</h2>
          <p>
            At our laundromat, we pride ourselves on providing top-quality
            service to our customers. Here are just a few reasons why you should
            choose us:
          </p>
          <ul>
            <li>State-of-the-art machines and equipment</li>
            <li>Clean and well-maintained facility</li>
            <li>Competitive pricing</li>
            <li>Convenient location and hours</li>
          </ul>
        </section>
        <section className="visit-us">
          <h2>Visit Us Today!</h2>
          <p>
            Stop by our laundromat today and see for yourself why we're the best
            in town. We look forward to serving you!
          </p>
        </section>
      </main>
    </div>
  );
}

export default Homepage;

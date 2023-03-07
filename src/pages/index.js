import React from "react";
import Wide from "./images/Wide.png";
import Soap from "./images/Soap.png";
import "./index.css";

function Homepage() {
  return (
    <div className="container">
      <div className="header">
        <img src={Wide} alt="Laundromat" />
        <h1>Cottage Road Eco Laundry</h1>
        <a 
          href="https://www.google.com/maps/dir//Cottage+Rd,+South+Portland,+ME+04106/@43.6281138,-70.2645891,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x4cb29e7f8daeb5f9:0xd1c3b31802044f43!2m2!1d-70.2400752!2d43.6349793!3e0" target="_blank" rel="noopener noreferrer">
          Get Directions
        </a>
      </div>
      <main className="main-content">
      <img src={Soap} alt="Laundromat" />
      <section className="blurb">
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
        <section className="machines">
          <h2>we have x machines!</h2>
          <p>
           we clean our machines daily
          </p>
          <ul>
            <li>x washers</li>
            <li>y dryers</li>
            <li>2 change machines</li>
            <li>1 soap dispenser</li>
          </ul>
        </section>
        <section className="visit-us">
          <h2>Visit Us Today!</h2>
          <p>
            Stop by our laundromat today and see for yourself why we're the best
            in town. We look forward to serving you!
          </p>
        </section> 
        </section>
      </main>    
    </div>
  );
}

export default Homepage;

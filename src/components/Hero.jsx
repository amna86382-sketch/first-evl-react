
import React from "react";
import DoctorCard from "./DoctorCard";

function Hero() {
  return (
    <section className="hero section-container" id="home">

      <div className="hero-content">
        <span className="small-label">
          YOUR TRUSTED HEALTHCARE PARTNER
        </span>

        <h1>
          Intelligent Clinical Care
          <span> Delivered Anywhere</span>
        </h1>

        <p>
          Secure, encrypted and evidence-based clinical
          pathways for patients and healthcare professionals.
          Experience modern healthcare with intelligent
          telehealth technology.
        </p>

        <div className="hero-buttons">
          <a href="#appointment" className="primary-btn">
            Book Consultation
          </a>

          <a href="#doctors" className="secondary-btn">
            Find Specialist
          </a>
        </div>
      </div>

      <div className="hero-doctor">
        <DoctorCard />
      </div>

    </section>
  );
}

export default Hero;


import React from "react";

function DoctorCard() {
  return (
    <div className="doctor-card">
      <img
        src="/images/doctor.jpg"
        alt="Doctor"
        className="doctor-image"
      />

      <div className="doctor-info">
        <h3>Dr. Eleanor Vance</h3>
        <p>Senior Cardiologist</p>

        <div className="doctor-rating">
          ★ 4.9 Rating
        </div>

        <p className="available">● Available Today</p>

        <div className="doctor-buttons">
          <a href="#appointment" className="primary-btn">
            Book Visit
          </a>

          <a href="#doctors" className="secondary-btn">
            View Profile
          </a>
        </div>
      </div>
    </div>
  );
}

export default DoctorCard;

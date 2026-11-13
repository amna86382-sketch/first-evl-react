import React from "react";
import doctors from "../Data/doctor";
function DoctorCard() {
  return (
    <>
      {doctors.map((doctor) => (
        <div className="doctor-card" key={doctor.id}>
          <img
            src={doctor.image}
            alt={doctor.name}
            className="doctor-image"
          />
          <div className="doctor-info">
            <h3>{doctor.name}</h3>
            <p>{doctor.role}</p>
            <div className="doctor-rating">★ {doctor.rating} Rating</div>
            <p className="available">● {doctor.status}</p>
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
      ))}
    </>
  );
}
export default DoctorCard;

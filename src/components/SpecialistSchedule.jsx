
import React, { useState } from "react";
import doctors from "../Data/doctor";

function SpecialistSchedule() {

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");

  const departments = [
    "All",
    "Cardiology",
    "Neurology",
    "Dermatology",
    "Pediatrics"
  ];

  const filteredDoctors = doctors.filter((doctor) => {

    const matchesSearch =
      doctor.name.toLowerCase().includes(search.toLowerCase());

    const matchesDepartment =
      department === "All" ||
      doctor.department === department;

    return matchesSearch && matchesDepartment;
  });

  function bookDoctor(doctor) {
    localStorage.setItem(
      "selectedDoctor",
      JSON.stringify(doctor)
    );

    document.getElementById("appointment")?.scrollIntoView({
      behavior: "smooth"
    });
  }

  return (
    <section className="schedule-section section-container" id="doctors">

      <div className="section-heading">
        <span className="small-label">SPECIALIST AVAILABILITY</span>
        <h2>Specialist Response & On-Call Schedule</h2>
        <p>Find a specialist and request an appointment.</p>
      </div>

      <div className="filter-area">

        <input
          type="text"
          placeholder="Search doctor..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          {departments.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

      </div>

      <div className="table-wrapper">

        <table className="doctor-table">

          <thead>
            <tr>
              <th>Specialist</th>
              <th>Department</th>
              <th>Experience</th>
              <th>Wait Time</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {filteredDoctors.length > 0 ? (

              filteredDoctors.map((doctor) => (

                <tr key={doctor.id}>

                  <td>
                    <strong>{doctor.name}</strong>
                    <small className="table-rating">
                      ★ {doctor.rating}
                    </small>
                  </td>

                  <td>{doctor.department}</td>

                  <td>{doctor.experience}</td>

                  <td>{doctor.waitTime}</td>

                  <td>
                    <span
                      className={
                        doctor.status === "Available"
                          ? "status-available"
                          : "status-busy"
                      }
                    >
                      {doctor.status}
                    </span>
                  </td>

                  <td>
                    <button
                      className="table-button"
                      onClick={() => bookDoctor(doctor)}
                    >
                      Book Now
                    </button>
                  </td>

                </tr>

              ))

            ) : (

              <tr>
                <td colSpan="6" className="no-results">
                  No doctors found.
                </td>
              </tr>

            )}

          </tbody>

        </table>

      </div>

    </section>
  );
}

export default SpecialistSchedule;

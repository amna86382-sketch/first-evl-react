import React, { useState } from "react";
function IntakeForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    concern: "",
    urgency: "Normal",
    consultation: "Online",
    description: ""
  });
  const [message, setMessage] = useState("");
  function handleChange(e) {
    const{ name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.concern.trim()
    ) {
      setMessage("Please fill all required fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setMessage("Please enter a valid email.");
      return;
    }
    if (!/^\d{10,15}$/.test(formData.phone)) {
      setMessage("Please enter a valid phone number (10-15 digits).");
      return;
    }
    const patient = {
      id: Date.now(),
      ...formData,
      submittedAt: new Date().toLocaleString()
    };
    const savedPatients =
      JSON.parse(localStorage.getItem("patients")) || [];
    savedPatients.push(patient);
    localStorage.setItem(
      "patients",
      JSON.stringify(savedPatients)
    );
    setMessage("Appointment request submitted successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      concern: "",
      urgency: "Normal",
      consultation: "Online",
      description: ""
    });
  }
  return (
    <section className="intake-section section-container" id="appointment">
      <div className="section-heading">
        <span className="small-label">PATIENT REGISTRATION</span>
        <h2>Clinical Intake & Triage Form</h2>
        <p>
          Complete this form to request a healthcare consultation.
        </p>
      </div>
      <form className="intake-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label>Patient Full Name *</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email Address *</label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Phone Number *</label>
            <input
              type="tel"
              name="phone"
              placeholder="+92....."
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Medical Concern *</label>
            <input
              type="text"
              name="concern"
              placeholder="Enter your medical concern"
              value={formData.concern}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Urgency Level</label>
            <select
              name="urgency"
              value={formData.urgency}
              onChange={handleChange}
            >
              <option>Normal</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>
          <div className="form-group">
            <label>Consultation Type</label>
            <select
              name="consultation"
              value={formData.consultation}
              onChange={handleChange}
            >
              <option>Online</option>
              <option>In Person</option>
            </select>
          </div>
        </div>
        <div className="form-group full-width">
          <label>Describe Your Symptoms</label>
          <textarea
            name="description"
            placeholder="Describe your medical concern..."
            rows="4"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        {message && (
          <p className="form-message">{message}</p>
        )}
        <button type="submit" className="primary-btn">
          Submit Appointment Request
        </button>
      </form>
    </section>
  );
}
export default IntakeForm;
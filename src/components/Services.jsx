import React from "react";
import services from "../Data/services";
import ServiceCard from "./ServiceCard";
function Services() {
  return (
    <section className="services-section section-container" id="services">
      <div className="section-heading">
        <span className="small-label">OUR SERVICES</span>
        <h2>Specialized Telehealth Infrastructures</h2>
        <p>
          Modern technology for better healthcare experiences.
        </p>
      </div>
      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            icon={service.icon}
            title={service.title}
            description={service.description}
            category={service.category}
          />
        ))}
      </div>
    </section>
  );
}
export default Services;
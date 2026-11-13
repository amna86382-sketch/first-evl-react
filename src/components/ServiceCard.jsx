import React from "react";
function ServiceCard(props) {
  return (
    <div className="service-card">
      <div className="service-icon">
        {props.icon}
      </div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <span className="service-category">
        {props.category}
      </span>
      <a href="#appointment" className="learn-link">
        Learn More →
      </a>
    </div>
  );
}
export default ServiceCard;
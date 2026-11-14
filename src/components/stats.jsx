
import React from "react";

function Stats() {
  const statistics = [
    {
      id: 1,
      number: "99.4%",
      title: "Patient Satisfaction"
    },
    {
      id: 2,
      number: "<12m",
      title: "Average Response Time"
    },
    {
      id: 3,
      number: "250+",
      title: "Medical Specialists"
    }
  ];

  return (
    <section className="stats section-container">

      {statistics.map((item) => (
        <div className="stat-card" key={item.id}>
          <h2>{item.number}</h2>
          <p>{item.title}</p>
        </div>
      ))}

    </section>
  );
}

export default Stats;


import React from "react";
import studies from "../Data/studies";

function Studies() {
  return (
    <section className="studies-section section-container" id="studies">

      <div className="section-heading">
        <span className="small-label">SUCCESS STORIES</span>
        <h2>Telehealth Transformation Studies</h2>
      </div>

      <div className="studies-grid">

        {studies.map((study) => (
          <div className="study-card" key={study.id}>

            <div className="study-content">

              <span className="study-category">
                {study.category}
              </span>

              <h3>{study.title}</h3>

              <p>{study.description}</p>

              <div className="study-results">
                <div>
                  <h2>{study.result}</h2>
                  <small>Study Result</small>
                </div>

                <div>
                  <h2>{study.improvement}</h2>
                  <small>Improvement</small>
                </div>
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Studies;

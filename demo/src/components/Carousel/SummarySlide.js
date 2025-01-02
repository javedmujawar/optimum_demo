import React from "react";
//import "./SummarySlide.css";

const SummarySlide = ({ answers, steps }) => {
  console.log(answers, steps)
  return (
    <div className="summary-slide">
      <h2>Summary</h2>
      <ul>
        {steps.map((step, index) => (
          <li key={index}>
            {step.title}: {answers[index] || ""}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SummarySlide;

import { useEffect } from "react";
import React from "react";
import axios from "axios";

const SummarySlide = ({ answers, steps }) => {
  const icons = ["👍", "🤔", "👎"];
  useEffect(() => {
    axios
      .post("apiendPoint", answers)
      .then((res) => {
        console.log("data saved.");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  return (
    <div className="summary-slide">
      <h2>Summary</h2>
      <ul>
        {steps.map((step, index) => (
          <li key={index}>
            {step.title}: {icons[answers[index] ]|| ""}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SummarySlide;

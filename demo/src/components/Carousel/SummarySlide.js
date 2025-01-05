import { useEffect } from "react";
import React from "react";
import axios from "axios";

const SummarySlide = ({ answers, steps, options }) => {
  useEffect(() => {
    axios
      .post("apiendPoint", answers)
      .then((res) => {
        console.log("data saved.");
      })
      .catch((err) => {
        console.log(err);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="summary-slide">
      <h2>Summary</h2>
      <ul>
        {steps.map((step, index) => (
          <li key={index}>
            {step}: {options[answers[index]].icon || ""}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SummarySlide;

import React, { useState } from "react";
import Carousel from ".";
import SummarySlide from "../SummarySlide/SummarySlide";
import "./PollForm.css";

const PollForm = () => {
  const steps = [
    { title: "How was your week?", options: ["👍", "🤔", "👎"] },
    { title: "Rate your productivity", options: ["🌟", "💼", "📉"] },
  ];

  const [answers, setAnswers] = useState({});
  const [currentStep, setCurrentStep] = useState(0);

  const handleSelectOption = (stepIndex, option) => {
    setAnswers({ ...answers, [stepIndex]: option });
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  return (
    <div className="poll-form">
      <div className="side-panel">
        {steps.map((step, index) => (
          <div key={index} className={`title ${index === currentStep ? "active" : ""}`}>
            {step.title}
          </div>
        ))}
      </div>
      <Carousel
        steps={steps}
        currentStep={currentStep}
        onSelectOption={handleSelectOption}
      />
      {currentStep === steps.length && (
        <SummarySlide answers={answers} steps={steps} />
      )}
    </div>
  );
};

export default PollForm;

import React, { useState } from "react";
import Step from "./Step";
import SummarySlide from "./SummarySlide";
import CarouselSlider from "./CarouselSlider";
import "./Carousel.css";

const Carousel = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSelectOption = (label) => {
    console.log(label);
    setAnswers({ ...answers, [currentStep]: label });
    // if (currentStep < steps.length - 1)
    setCurrentStep(currentStep + 1);
  };

  return (
    <>
      {steps && currentStep < steps.length ? (
        <div className="carousel-container">
          <div className="carousel-track">
            {steps.map((step, index) => (
              <Step key={index} {...step} onNext={handleSelectOption} />
            ))}
            <CarouselSlider
              steps={steps}
              currentStep={currentStep}
              onSelectOption={handleNext}
            />
          </div>
        </div>
      ) : (
        <SummarySlide answers ={answers} steps={steps}/>
      )}
    </>
  );
};

export default Carousel;

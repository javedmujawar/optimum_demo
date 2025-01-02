import React, { useState } from "react";
import Step from "./Step";
import CarouselSlider from "./CarouselSlider"
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


  const handleSelectOption = (stepIndex, option) => {
    setAnswers({ ...answers, [stepIndex]: option });
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  return (
    <div className="carousel-container">
      
      <div class="carousel-track" style={{
          transform: `translateX(-${currentStep * 100}%)`,
          transition: "transform 0.5s ease-in-out",
        }}>
        {steps.map((step, index) => (
          <Step key={index} {...step} onNext={handleNext} />
        ))}
        <CarouselSlider
        steps={steps}
        currentStep={currentStep}
        onSelectOption={handleSelectOption}
      />
      </div>
    </div>
  );
};

export default Carousel;

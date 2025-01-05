import React, { useState } from "react";
import Step from "./Step";
import SummarySlide from "./SummarySlide";
import CarouselSlider from "./CarouselSlider";
import "./Carousel.css";

const Carousel = ({ steps }) => {
  const { questions, options } = steps[0];
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };


  const handleSelectOption = (label) => {
    setAnswers({ ...answers, [currentStep]: label });
    // if (currentStep < steps.length - 1)
    setCurrentStep(currentStep + 1);
  };

  return (
    <>
      {questions && currentStep < questions.length ? (
        <>
          <div className="carouselSliderMainBackground">
            <div></div>
            <div></div>
          </div>
          <div className="carousel-container">
            <div className="carousel-track">
              {questions.map((step, index) => (
                <Step
                  key={index}
                  question={step}
                  onNext={handleSelectOption}
                  index={index}
                  currentStep={currentStep}
                  options={options}
                />
              ))}
              <CarouselSlider
                steps={questions}
                currentStep={currentStep}
                onSelectOption={handleNext}
              />
            </div>
          </div>
        </>
      ) : (
        <SummarySlide answers={answers} steps={questions} options={options} />
      )}
    </>
  );
};

export default Carousel;

import React from "react";
import "./Carousel.css";

const CarouselSlider = ({ steps, currentStep, onSelectOption }) => {
  return (
    <div className="carouselSliderMain">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentStep ? "active" : ""}`}
        //   onClick={() => onSelectOption(index) }
        >
          <div className="options"></div>
        </div>
      ))}
    </div>
  );
};

export default CarouselSlider;

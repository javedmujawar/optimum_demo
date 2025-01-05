import React from "react";
import "./Carousel.css";

const CarouselSlider = ({ steps, currentStep }) => {
  return (
    <div className="carouselSliderMain">
      {steps?.map((step, index) => (
        <div
          key={index}
          data-testid="carousel-slide"
          className={`carousel-slide ${index === currentStep ? "active" : ""}`}
        >
          <div className="options"></div>
        </div>
      ))}
    </div>
  );
};

export default CarouselSlider;

import { render, screen } from "@testing-library/react";
import CarouselSlider from "../components/Carousel/CarouselSlider";

describe("CarouselSlider Component", () => {
  const mockSteps = ["Step 1", "Step 2", "Step 3"];
  const mockOptions = ["a", "b", "c"];
  const mockCurrentStep = 1;

  test("renders the correct number of slides", () => {
    render(<CarouselSlider steps={mockSteps} currentStep={mockCurrentStep} />);

    // Select all elements with the data-testid "carousel-slide"
    const slides = screen.getAllByTestId("carousel-slide");
    expect(slides).toHaveLength(mockSteps.length);
    // const slides = screen.getAllBy("region"); // Assuming each slide is a region
    //expect(slides).toHaveLength(mockSteps.length);
  });

  test("applies 'active' class to the current step", () => {
    render(<CarouselSlider steps={mockSteps} currentStep={mockCurrentStep} />);
    const slides = screen.getAllByTestId("carousel-slide");

    const activeSlides = slides.filter((slide) =>
      slide.classList.contains("active")
    );
    expect(activeSlides).toHaveLength(1);
  });

});

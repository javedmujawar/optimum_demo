import { render, screen } from "@testing-library/react";
import CarouselSlider from "../components/Carousel/CarouselSlider";

describe("CarouselSlider Component", () => {
  const mockSteps = [
    { title: "Step 1" },
    { title: "Step 2" },
    { title: "Step 3" },
  ];

//   test("renders all steps", () => {
//     render(<CarouselSlider steps={mockSteps} currentStep={0} onSelectOption={() => {}} />);
//     const slides = screen.getAllByRole("region");
//     expect(slides).toHaveLength(mockSteps.length);
//   });

//   test("applies the active class to the current step", () => {
//     const currentStep = 1;
//     render(<CarouselSlider steps={mockSteps} currentStep={currentStep} onSelectOption={() => {}} />);
//     const activeSlide = screen.getByRole("region", { name: /step 2/i });
//     expect(activeSlide).toHaveClass("active");
//   });

//   test("does not apply the active class to non-current steps", () => {
//     const currentStep = 1;
//     render(<CarouselSlider steps={mockSteps} currentStep={currentStep} onSelectOption={() => {}} />);
//     const inactiveSlides = screen.getAllByRole("region").filter((slide) => !slide.classList.contains("active"));
//     expect(inactiveSlides).toHaveLength(mockSteps.length - 1);
//   });

  test("renders correctly with an empty steps array", () => {
    render(<CarouselSlider steps={[]} currentStep={0} onSelectOption={() => {}} />);
    const slides = screen.queryAllByRole("region");
    expect(slides).toHaveLength(0);
  });

  test("matches the snapshot", () => {
    const { container } = render(<CarouselSlider steps={mockSteps} currentStep={0} onSelectOption={() => {}} />);
    expect(container).toMatchSnapshot();
  });
});

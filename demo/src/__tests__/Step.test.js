import { render, screen } from "@testing-library/react";
import Step from "../components/Carousel/Step";
import Oprions from "../components/Carousel/Options";

jest.mock("../components/Carousel/Options", () => jest.fn(() => <div data-testid="options-mock"></div>));

describe("Step Component", () => {
  const mockProps = {
    question: "What is your favorite color?",
    options: [
      { icon: "🔴", label: "Red" },
      { icon: "🔵", label: "Blue" },
    ],
    onNext: jest.fn(),
    index: 1,
    currentStep: 1,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders the question text", () => {
    render(<Step {...mockProps} />);
    expect(screen.getByText(mockProps.question)).toBeInTheDocument();
  });



  test("applies 'activeItem' class when index matches currentStep", () => {
    const { container } = render(<Step {...mockProps} />);
    const carouselItem = container.querySelector(".carousel-item");
    expect(carouselItem).toHaveClass("activeItem");
  });

  test("does not apply 'activeItem' class when index does not match currentStep", () => {
    const { container } = render(<Step {...mockProps} currentStep={2} />);
    const carouselItem = container.querySelector(".carousel-item");
    expect(carouselItem).not.toHaveClass("activeItem");
  });


});

import { render, screen } from "@testing-library/react";
import Step from "../components/Carousel/Step";
import Oprions from "../components/Carousel/Oprions";

jest.mock("../components/Carousel/Oprions", () => jest.fn(() => <div data-testid="options-component"></div>));

describe("Step Component", () => {
  const defaultProps = {
    title: "Step Title",
    options: [{ label: "Option 1" }, { label: "Option 2" }],
    onNext: jest.fn(),
    index: 0,
    currentStep: 0,
  };

  it("renders the title correctly", () => {
    render(<Step {...defaultProps} />);
    expect(screen.getByText("Step Title")).toBeInTheDocument();
  });

  it("applies 'activeItem' class when index equals currentStep", () => {
    render(<Step {...defaultProps} />);
    const carouselItem = screen.getByText("Step Title").closest(".carousel-item");
    expect(carouselItem).toHaveClass("activeItem");
  });

  it("does not apply 'activeItem' class when index does not equal currentStep", () => {
    render(<Step {...defaultProps} currentStep={1} />);
    const carouselItem = screen.getByText("Step Title").closest(".carousel-item");
    expect(carouselItem).not.toHaveClass("activeItem");
  });

//   it("renders the Oprions component with correct props", () => {
//     render(<Step {...defaultProps} />);
//     expect(screen.getByTestId("options-component")).toBeInTheDocument();
//     expect(Oprions).toHaveBeenCalledWith(
//       { data: defaultProps.options, onNext: defaultProps.onNext },
//       {}
//     );
  //});

  it("matches the snapshot", () => {
    const { container } = render(<Step {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });
});

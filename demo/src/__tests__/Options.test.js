import { render, screen, fireEvent } from "@testing-library/react";
import Oprions from "../components/Carousel/Options";

describe("Oprions Component", () => {
  const mockOnNext = jest.fn();
  const mockData = [
    { icon: "🌟", label: "Star" },
    { icon: "🔥", label: "Fire" },
    { icon: "💧", label: "Water" },
  ];

  afterEach(() => {
    jest.clearAllMocks();
  });

//   test("renders all data items", () => {
//     render(<Oprions data={mockData} onNext={mockOnNext} />);
//     const spans = screen.getAllByText(/tooltiptext/);
//     expect(spans).toHaveLength(mockData.length);
//   });

  test("displays the correct icon and label for each item", () => {
    render(<Oprions data={mockData} onNext={mockOnNext} />);
    mockData.forEach((item) => {
      expect(screen.getByText(item.icon)).toBeInTheDocument();
      expect(screen.getByText(`${item.label}.`)).toBeInTheDocument();
    });
  });

//   test("calls onNext with the correct index on click", () => {
//     render(<Oprions data={mockData} onNext={mockOnNext} />);
//     const spans = screen.getAllByRole("button");
//     spans.forEach((span, index) => {
//       fireEvent.click(span);
//       expect(mockOnNext).toHaveBeenCalledWith(index);
//     });
  //});

  test("does not render anything if data is undefined", () => {
    render(<Oprions data={undefined} onNext={mockOnNext} />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  test("does not render anything if data is empty", () => {
    render(<Oprions data={[]} onNext={mockOnNext} />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  test("matches the snapshot", () => {
    const { container } = render(<Oprions data={mockData} onNext={mockOnNext} />);
    expect(container).toMatchSnapshot();
  });
});

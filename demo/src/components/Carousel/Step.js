import Oprions from "./Oprions";
const Step = (props) => {
  const { question, options, onNext, index, currentStep } = props;

  return (
    <div
      className={`carousel-item ${index === currentStep ? "activeItem" : ""}`}
    >
      <div>
        <h1>{question}</h1>
      </div>
      <div>
        <Oprions data={options} onNext={onNext} />
      </div>
    </div>
  );
};

export default Step;

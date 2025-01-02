import Oprions from "./Oprions";
const Step = (props) => {
  const { title, options,onNext, index , currentStep } = props;

  return (
    <div className={`carousel-item ${index === currentStep ? "activeItem" : ""}`}>
    
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        <Oprions data={options} onNext={onNext} />
      </div>
    </div>
  );
};

export default Step;

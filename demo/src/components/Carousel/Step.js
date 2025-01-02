import Oprions from "./Oprions";
const Step = (props) => {
  const { title, options } = props;

  return (
    <div className="carousel-item">
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        <Oprions data={options} />
      </div>
    </div>
  );
};

export default Step;

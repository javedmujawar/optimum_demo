const Oprions = (props) => {
  const { data, onNext } = props;
  return (
    <div>
      {data &&
        data.map((item, index) => {
          return (
            <span
              
              className="icon"
              onClick={() => {
                onNext(index);
              }}
              key={index}
            >
              {item.icon}
              <span className="tooltiptext">{item.label}.</span>
            </span>
          );
        })}
    </div>
  );
};

export default Oprions;

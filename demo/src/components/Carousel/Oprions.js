const Oprions = (props) => {
  const { data } = props;
  console.log(props);

  return (
    <div>
      {data &&
        data.map((item) => {
          return <span>{item.icon}</span>;
        })}
    </div>
  );
};

export default Oprions;

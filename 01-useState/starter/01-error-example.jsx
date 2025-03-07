const ErrorExample = () => {
  let count = 0;
  const handleClick = () => {
    count = count + 1;
  };

  return (
    <>
      <h2>{count}</h2>
      <button className="btn" onClick={handleClick}>
        Incrase
      </button>
    </>
  );
};

export default ErrorExample;

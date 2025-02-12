import { useState } from "react";

const UseStateObject = () => {
  const [person, setName] = useState({
    name: "peter",
    age: 23,
    hobby: "Basket ball",
  });

  const displayPerson = () => {
    setName({
      name: "boore",
      age: 33,
      hobby: "football",
    });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h4>{person.age}</h4>
      <h4>Enjoys: {person.hobby}</h4>
      <button className="btn" onClick={displayPerson}>
        show Boore
      </button>
    </>
  );
};

export default UseStateObject;

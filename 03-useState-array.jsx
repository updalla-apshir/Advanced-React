import { data, people } from "../../../data";
import React from "react";

const UseStateArray = () => {
  const [peaple, setPeople] = React.useState(data);
  const removeItem = (id) => {
    let newPeople = peaple.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  const removeAll = () => {
    setPeople([]);
  };
  return (
    <div>
      {peaple.map((person) => {
        const { name, id } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button className="btn" onClick={() => removeItem(id)}>
              Remove
            </button>
          </div>
        );
      })}
      <button
        className="btn"
        onClick={removeAll}
        style={{ marginTop: "3rem", background: "red" }}
      >
        Remove All
      </button>
    </div>
  );
};

export default UseStateArray;

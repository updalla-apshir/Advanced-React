import React, { useReducer } from "react";
import { data } from "../../../data";

const deafultSate = {
  people: data,
  isLoading: false,
};

const reducerr = (state, action) => {
  switch (action.type) {
    case "CLEAR_LIST": {
      return { ...state, people: [] };
    }
    case "REMOVE_ITEM": {
      const newItem = state.people.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, people: newItem };
    }
    case "RESET_LIST": {
      return { ...state, people: data };
    }
  }
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducerr, deafultSate);

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id } });
  };
  const clearList = () => {
    dispatch({ type: "CLEAR_LIST" });
  };
  const resetList = () => {
    dispatch({ type: "RESET_LIST" });
  };
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length < 1 ? (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={resetList}
        >
          Reset
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={clearList}
        >
          clear items
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;

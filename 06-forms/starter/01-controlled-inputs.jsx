import { useState } from "react";

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
    // console.log(name);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmitButton = (e) => {
    e.preventDefault();
    console.log(name, email);
  };
  return (
    <form className="form" onSubmit={handleSubmitButton}>
      <h4>Controlled inputs</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          type="text"
          id="name"
          className="form-input"
          value={name}
          onChange={handleChange}
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="text"
          id="email"
          className="form-input"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <button type="submit" className="btn btn-block">
        Submit
      </button>
    </form>
  );
};
export default ControlledInputs;

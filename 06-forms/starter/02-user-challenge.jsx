import { useState } from "react";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);

  const handleInput = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Enter a name");
    } else {
      // const newUSer = [...users, { name }];
      // setUsers(newUSer) other way to use

      setUsers((prevUSer) => [...prevUSer, { name }]);
      setName("");
    }
  };
  const removeUser = (indexToRemove) => {
    // setUsers((prevUsers) =>
    //   prevUsers.filter((_, index) => index !== indexToRemove)
    // );
    const updateUser = users.filter((_, index) => index !== indexToRemove);
    setUsers(updateUser);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={handleInput}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {users.length > 0 && (
        <ul>
          {users.map((user, index) => (
            <li
              key={index}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <h4>{user.name}</h4>
              <h4
                style={{
                  background: "red",
                  color: "white",
                  cursor: "pointer",
                  padding: "0 10px",
                }}
                onClick={() => removeUser(index)}
              >
                Remove
              </h4>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default UserChallenge;

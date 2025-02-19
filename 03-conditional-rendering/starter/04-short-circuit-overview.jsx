import { useState, useEffect } from "react";

const ShortCircuitOverview = () => {
  const [users, setUsers] = useState();
  const [userName, setUsername] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      // if (!userName) return;
      const userApi = `https://api.github.com/users/${userName}`;

      try {
        const response = await fetch(userApi);
        const data = await response.json();
        setUsers(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUsers();
  }, [userName]);
  const handleserachButton = () => {
    const userNameInput = document.getElementById("userName").value;
    setUsername(userNameInput);
    console.log(users);
  };

  return (
    <>
      <div>
        <input type="text" id="userName" />
        <button className="btn" onClick={handleserachButton}>
          Search
        </button>
      </div>
      <div>
        {users ? (
          <div>
            <h2>{users.login}</h2>
            <h2>{users.company}</h2>
            <img
              src={users.avatar_url}
              alt=""
              style={{ width: "120px", borderRadius: "50%" }}
            />
          </div>
        ) : null}
      </div>
    </>
  );
};
export default ShortCircuitOverview;

import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState();
  const login = () => {
    setUser({ name: "Abdalla Boore" });
  };
  const logout = () => {
    setUser();
  };
  return (
    <div>
      {user ? (
        <div>
          <h2>{user.name}</h2>
          <button className="btn" onClick={logout}>
            LogOut
          </button>
        </div>
      ) : (
        <div>
          <h2>Please Login</h2>
          <button className="btn" onClick={login}>
            login
          </button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;

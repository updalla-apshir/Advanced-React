import { useState, createContext, useContext } from "react";
import NavLinks from "./NavLinks";

export const creatingContext = createContext();
export const useAppContext = () => useContext(creatingContext);

const Navbar = () => {
  const [user, setUser] = useState({ name: "bob" });
  const logout = () => {
    setUser(null);
  };
  return (
    <creatingContext.Provider value={{ user, logout }}>
      <nav className="navbar">
        <h5>CONTEXT API</h5>
        <NavLinks user={user} logout={logout} />
      </nav>
    </creatingContext.Provider>
  );
};
export default Navbar;

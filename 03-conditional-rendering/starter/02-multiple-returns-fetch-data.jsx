import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState();
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        setError(true);
      }
      const user = await response.json();
      setUser(user);
      console.log(user);
    } catch (err) {
      setError(true);
      console.log(err);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  if (isError) {
    return <h2>Ther's an error</h2>;
  }
  return (
    <div>
      <img
        style={{ width: "120px", borderRadius: "25px" }}
        src={user.avatar_url}
      />
      <h2>{user.name}</h2>
      <h5>Works at {user.company}</h5>
      <p>{user.bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;

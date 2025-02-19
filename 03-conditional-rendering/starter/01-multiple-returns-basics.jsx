import { useEffect, useState } from "react";

const MultipleReturnsBasics = () => {
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 1000);
  });

  if (isLoading) {
    return <h2>loading.....</h2>;
  }
  return <h2>Multiple Returns Basics</h2>;
};
export default MultipleReturnsBasics;

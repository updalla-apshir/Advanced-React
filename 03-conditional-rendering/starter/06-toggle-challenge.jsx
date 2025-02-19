import { useState } from "react";

const ToggleChallenge = () => {
  const [alert, setAlert] = useState(false);
  const toglleButton = () => {
    if (alert) {
      setAlert(false);
    } else {
      setAlert(true);
    }
  };
  return (
    <div>
      <button className="btn" onClick={toglleButton}>
        Toggle
      </button>
      {alert && <AlertComponent />}
    </div>
  );
};

const AlertComponent = () => {
  return <div className="alert alert-danger">Hello World</div>;
};

export default ToggleChallenge;

import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export default function UserDetail({ prop }) {
  const [timerPassed, setTimerPassed] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setTimerPassed(true);
    }, 1500);
  }, []);

  return (
    <div>
      {timerPassed && (
        <>
          <p>ID: {prop.id}</p>
          <p>Username: {prop.username}</p>
          <p>User: {prop.username}</p>
          <p>Email: {prop.email}</p>
        </>
      )}
    </div>
  );
}

UserDetail.propTypes = {
  prop: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

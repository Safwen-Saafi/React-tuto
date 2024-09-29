import PropTypes from "prop-types";
import { UserName } from "./UserName";

export function UserInfo(props) {
  console.log(props);
  return (
    <div>
      <UserName username={props.usename} />
      <span>User logged in: {props.isLoggedIn ? "Yes" : "No"}</span>
      <br />
      <span>My favourite food is:</span>
      <ul>
        <li>Name: {props.name}</li>
        <li>Age: {props.age}</li>
        <li>Favourite Food :</li>
        <ul>
          <li>Name: {props.favouriteFood[0]?.name}</li>
          <li>Taste: {props.favouriteFood[0]?.taste}</li>
        </ul>
      </ul>
    </div>
  );
}

UserInfo.propTypes = {
  usename: PropTypes.string,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isLoggedIn: PropTypes.bool,
  favouriteFood: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      taste: PropTypes.string.isRequired,
    })
  ).isRequired,
};

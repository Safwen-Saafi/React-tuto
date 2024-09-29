import PropTypes from "prop-types";

export function UserName(props) {
  return (
    //Fragments
    <>
      <b>Username :</b>
      <span>{props.username}</span>
      <br/>
    </>
  );
}


UserName.propTypes = {
  username: PropTypes.string
};

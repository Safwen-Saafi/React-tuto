import PropTypes from "prop-types";

export default function UserDetail({ prop }) {
  return (
    <div key={prop.id}>
      <p>ID: {prop.id}</p>
      <p>Username: {prop.username}</p>
      <p>Email: {prop.email}</p>
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

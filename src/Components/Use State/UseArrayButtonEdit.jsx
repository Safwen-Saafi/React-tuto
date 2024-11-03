import { useState } from "react";
import PropTypes from "prop-types";

// setUsers: the function that lets you update the users array
// user: the current users value

export function ButtonUse({ user, setUsers }) {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUserName] = useState(user.username);
  const [email, setEmail] = useState(user.email);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setIsEditing((currentState) => !currentState);
          }}
        >
          Edit
        </button>
        <button
            onClick={() => {
              setUsers((currentUsersState) =>
                currentUsersState.filter((currentUser) =>
                  currentUser.id !== user.id
                )
              );
            }}
          >
            Delete
          </button>
        {isEditing && (
          <button
            onClick={() => {
              setUsers((currentUsersState) =>
                currentUsersState.map((currentUser) =>
                  currentUser.id === user.id
                    ? { ...currentUser, username, email }
                    : currentUser
                )
              );
              setIsEditing(false);
            }}
          >
            Save
          </button>
        )}
      </div>
      <div>
        <b>ID: </b>
        <span>{user.id}</span>
        <br />
        <b>Username: </b>
        {isEditing ? (
          <input
            name="use"
            id="use"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        ) : (
          <span>{user.username}</span>
        )}
        <br />
        <b>Email: </b>
        {isEditing ? (
          <input
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        ) : (
          <span>{user.email}</span>
        )}
        <br />
      </div>
    </div>
  );
}

ButtonUse.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  setUsers: PropTypes.func.isRequired,
};

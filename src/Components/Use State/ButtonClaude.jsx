import { useState } from "react";
import PropTypes from "prop-types";

export function ButtonClaude({ user }) {
  // State for all editable fields
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    id: user.id,
    username: user.username,
    email: user.email
  });

  // Handle input changes for all fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle save/edit toggle
  const toggleEdit = () => {
    setIsEditing((currentState) => !currentState);
  };

  // Handle delete (placeholder - you'd typically pass a delete function from parent)
  const handleDelete = () => {
    // Implement delete logic or call a delete function passed as a prop
    console.log("Delete user", userData.id);
  };

  return (
    <div style={{ 
      border: '1px solid #ddd', 
      margin: '10px', 
      padding: '10px', 
      borderRadius: '5px' 
    }}>
      <div>
        <button onClick={toggleEdit}>
          {isEditing ? "Save" : "Edit"}
        </button>
        <button onClick={handleDelete}>Delete</button>
      </div>
      <div>
        <b>ID: </b>
        <span>{userData.id}</span>
        <br />
        
        <b>Username: </b>
        {isEditing ? (
          <input 
            aria-label="username"
            name="username"
            id="username"
            value={userData.username} 
            onChange={handleInputChange}
            style={{ marginLeft: '10px' }}
          />
        ) : (
          <span>{userData.username}</span>
        )}
        <br />
        
        <b>Email: </b>
        {isEditing ? (
          <input 
            aria-label="email"
            name="email"
            id="email"
            value={userData.email} 
            onChange={handleInputChange}
            style={{ marginLeft: '10px' }}
          />
        ) : (
          <span>{userData.email}</span>
        )}
        <br />
      </div>
    </div>
  );
}

ButtonClaude.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

import { useState } from "react";
import { useFetchUser } from "../../Utils/Hooks/useFetchuser";

export default function FetchUser() {
  const [userId, setUserId] = useState(1);
  const { userData, loading, error } = useFetchUser(userId);

  const handleNextUser = () => {
    setUserId(prev => prev < 10 ? prev + 1 : 1);
  };

  if (loading) {
    return (
      <div>
        <h1>Loading user {userId}...</h1>
        <button onClick={handleNextUser} disabled>{ loading ? "NextUser is Loading" : "Next User"}</button>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>Error loading user {userId}</h1>
        <p>{error.message}</p>
        <button onClick={handleNextUser}>Try Next User</button>
      </div>
    );
  }

  return (
    <div>
      <h1>User {userId} Details</h1>
      <button onClick={handleNextUser}>Next User</button>
      <pre>{JSON.stringify(userData, null, 2)}</pre>
    </div>
  );
}



// The number 2 means:

// Each nested level will be indented by 2 spaces
// Makes the output more readable
// Common practice is to use 2 or 4 spaces

// If you changed it to JSON.stringify(userData) (without the null, 2), you'd get:

// A single line of text
// No formatting
// Much harder to read

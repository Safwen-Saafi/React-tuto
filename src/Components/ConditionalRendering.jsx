import PropTypes from "prop-types";

function Dashboard({ status, isLoggedIn, hasNotifications, username }) {
  // `if` statement for greeting
  const getGreeting = () => {
    if (isLoggedIn) {
      return <h1>Welcome back, {username || "User"}!</h1>;
    }
    return <h1>Please sign in to access your dashboard.</h1>;
  };

  // `switch` statement for status message
  const getStatusMessage = () => {
    switch (status) {
      case "loading":
        return <p>Loading your data...</p>;
      case "success":
        return <p>Your data has been successfully loaded.</p>;
      case "error":
        return <p>Error loading data. Please try again later.</p>;
      default:
        return <p>Status unknown.</p>;
    }
  };

  return (
    <div>
      {/* Greeting based on login status */}
      {getGreeting()}

      {/* Ternary for rendering either dashboard or login prompt */}
      {isLoggedIn ? (
        <>
          {/* Status message based on loading state */}
          {getStatusMessage()}

          {/* Notification using && operator */}
          {hasNotifications && <p>You have new notifications!</p>}

          {/* Optional message if there are no notifications */}
          {!hasNotifications && <p>No new notifications.</p>}
        </>
      ) : (
        <p>Please log in to see your dashboard content.</p>
      )}
    </div>
  );
}

// Define PropTypes for the Dashboard component
Dashboard.propTypes = {
  status: PropTypes.oneOf(["loading", "success", "error"]).isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  hasNotifications: PropTypes.bool,
  username: PropTypes.string,
};

// Define default values for optional props
Dashboard.defaultProps = {
  hasNotifications: false,
  username: "User",
};

export default Dashboard;

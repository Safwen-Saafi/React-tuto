import { useDocumentClick } from "./Utils/Hooks/useDocumentClick";
// import { UserContext } from "./Context/UserContext";
// import { PostContainer } from "./Components/Context API/PostContainer";
// import FetchUser from "./Components/Fetch API/FetchUser";
// import { Link, Outlet } from "react-router-dom";
import { ButtonClaude } from "./Components/Use State/ButtonClaude";

export default function App() {
  // Custom Hook
  useDocumentClick();
  // So if you go to the network section, you'll notice how the first request is aborted because the component is unmounted, remember
  // that we are in strictMode so the re-rendering happens twice

  // Context API data
  const users = [
    {
      id: 1,
      username: "saf123",
      email: "safwen@example.com",
    },
    {
      id: 2,
      username: "bob456",
      email: "bob@example.com",
    },
    {
      id: 3,
      username: "sawsan",
      email: "sawsan@example.com",
    },
  ];

  return (
    <div>
      {/* <nav>
      <ul>
        <li><Link to="/form">Users</Link></li>
      </ul>
      </nav> */}

      {/* <UserContext.Provider value={{ ...userdata, setUserData }}>
      </UserContext.Provider>
      <FetchUser/>
      <Outlet /> */}

      {users.map((person) => {
        return <ButtonClaude key={person.id} user={person} />;
      })}
    </div>
  );
}

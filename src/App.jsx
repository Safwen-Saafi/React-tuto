import { useState } from "react";
import { useDocumentClick } from "./Utils/Hooks/useDocumentClick";
import { UserContext } from "./Context/UserContext";
import { PostContainer } from "./Components/Context API/PostContainer";
import FetchUser from "./Components/Fetch API/FetchUser";
import { Link, Outlet } from "react-router-dom";

export default function App() {
 
  // Custom Hook
  useDocumentClick();
  // So if you go to the network section, you'll notice how the first request is aborted because the component is unmounted, remember
  // that we are in strictMode so the re-rendering happens twice

  // Context API data
  const [userdata, setUserData] = useState({
    id: 221,
    username: "Safwen",
    email: "safwen@gmail.coom",
  });

  return (
    <div>
      <nav>
      <ul>
        <li><Link to="/form">Users</Link></li>
      </ul>
      </nav>

      <UserContext.Provider value={{ ...userdata, setUserData }}>
        <PostContainer />
        {/* Any Component inside this or its children are part of the user context, any data inside the usercontext will be accessible through all of the children*/}
      </UserContext.Provider>
      <FetchUser/>
      <Outlet />
    </div>
  );
}

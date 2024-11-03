import { useEffect, useState } from "react";
import { useDocumentClick } from "./Utils/Hooks/useDocumentClick";
import { UserContext } from "./Context/UserContext";
import { PostContainer } from "./Components/Context API/PostContainer";

export default function App() {
  useEffect(() => {
    const controller = new AbortController();

    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          { signal: controller.signal }
        );
        const json = await response.json();
        console.log(json);
      } catch (err) {
        console.log(err);
      }
    }
    fetchUsers();
    // Cleanup function
    return () => {
      controller.abort();
    };
  }, []);

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
      <UserContext.Provider value={{ ...userdata, setUserData }}>
        <PostContainer />
        {/* Any Component inside this or its children are part of the user context, any data inside the usercontext will be accessible through all of the children*/}
      </UserContext.Provider>
    </div>
  );
}

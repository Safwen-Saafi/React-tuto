// import LoginForm from "./Components/LoginForm";
// import { RegisterFormArray } from "./Components/RegisterFormArray";
// import { ButtonUse } from "./Components/UseArrayButtonEdit";
// import UserDetail from "./Components/UserDetail";
// import Counter from "./Components/UseState";
import { useEffect, useState } from "react";
import PostBlog from "./Components/PostBlog";
import { useDocumentClick } from "./Utils/Hooks/useDocumentClick";
import { UserContext } from "./Context/UserContext";
import { PostContainer } from "./Components/PostContainer";
import PostContent from "./Components/PostContent";

export default function App() {
  window.addEventListener("resize", () => {
    console.log(window.innerHeight, window.innerWidth);
  });

  // const [username, setUserName] = useState("");
  // const [email, setEmail] = useState("");
  // const [counter, setCounter] = useState(4);

  // Add clearForm function to reset fields
  // const clearForm = (e) => {
  //   e.preventDefault(); // Prevent form submission
  //   setUserName(""); // Reset username to empty
  //   setEmail(""); // Reset email to empty
  // };

  // const [users, setUsers] = useState([
  //   {
  //     id: 1,
  //     username: "saf123",
  //     email: "safwen@example.com",
  //   },
  //   {
  //     id: 2,
  //     username: "bob456",
  //     email: "bob@example.com",
  //   },
  //   {
  //     id: 3,
  //     username: "sawsan",
  //     email: "sawsan@example.com",
  //   },
  // ]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users", { method: "GET" })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // });

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
  });
  useDocumentClick();
  // So if you go to the network section, you'll notice how the first request is aborted because the component is unmounted, remeber
  // that we are in strictMode so the re-rendering happens twice
  const [userdata, setUserData] = useState({
    id: 221,
    username: "Safwen",
    email: "safwen@gmail.coom",
  });
  return (
    <div>
      {/* <h1>User List</h1>
      {users.map((user) => {
        return <UserDetail key={user.id} prop={user} />;
      })}
      ;
      <RegisterFormArray />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newUser = {
            id: counter,
            username,
            email,
          };
          setCounter((currentCount) => currentCount + 1);
          setUsers((currentUsersState) => [...currentUsersState, newUser]);
        }}
      >
        <div>
          <label htmlFor="username">UserName</label>
          <input
            id="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button>Add User</button>
        <button onClick={clearForm}>Clear</button>
      </form>
      {users.map((user) => {
        return <ButtonUse key={user.id} user={user} setUsers={setUsers} />;
      })} */}
      <PostBlog />
      <UserContext.Provider value={{...userdata, setUserData}}>
        <PostContainer />
        {/* Any Component inside this or its children are part of the user context, any data inside the usercontext will be accessible through all of the children*/}
      </UserContext.Provider>
    </div>
  );
}

import LoginForm from "./Components/LoginForm";
import { RegisterFormArray } from "./Components/RegisterFormArray";
import UserDetail from "./Components/UserDetail";
import Counter from "./Components/UseState";

export default function App() {
  window.addEventListener("resize", () => {
    console.log(window.innerHeight, window.innerWidth);
  });
  const mock = [
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
  ];
  return (
    <div>
      <h1>User List</h1>
      {mock.map((user) => {
        return <UserDetail key={user.id} prop={user} />;
      })}
      <LoginForm />
      <Counter />
      <RegisterFormArray/>
    </div>
  );
}

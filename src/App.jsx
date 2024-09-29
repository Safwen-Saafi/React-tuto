import UserDetail from "./Components/UserDetail";

export default function App() {
  const mock = [
    {
      id: 1,
      username: "alice123",
      email: "alice@example.com",
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
        return <UserDetail key={user.id} user={user} />;
      })}
    </div>
  );
}

import { UserInfo } from "./Components/UserInfo";

export default function App() {
  return (
    <div id="user-profile">
      <h1>Root component</h1>
      {/* Passing the value directly as a string */}
      <UserInfo
        usename="Alice"
        name="Alice"
        age={25}
        favouriteFood={[
          {
            name: "Pizza",
            taste: "savory",
          },
        ]}
        isLoggedIn={true}
      />
      <UserInfo
        favouriteFood={[
          {
            name: "Couscous",
            taste: "spicy",
          },
        ]}
        age={20}
        name="Safwen"
        isLoggedIn={false}
      />
    </div>
  );
}

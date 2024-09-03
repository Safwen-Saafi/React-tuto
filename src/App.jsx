import { UserInfo } from "./Components/UserInfo";

export default function App() {
  return (
    <div id="user-profile">
      <h1>Root component</h1>
      <UserInfo
        age={20}
        isLoggedIn={false}
        favouriteFood={[
          {
            name: "Couscous",
            taste: "spicy"
          }
        ]}
      />
    </div>
  );
}

export function UserInfo(props) {
  console.log(props);
  return (
    <div>
      <span>My favourite food is</span>
      <ul>
        <li>Age: {props.age}</li>
        <li>Favourite Food name: {props.favouriteFood[0].name}</li>
        <li>Taste: {props.favouriteFood[0].taste}</li>
      </ul>
    </div>
  );
}

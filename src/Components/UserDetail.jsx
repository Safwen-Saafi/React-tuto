export default function UserDetail({ user }) {
  return (
    <div key={user.id}>
      <p>ID: {user.id}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

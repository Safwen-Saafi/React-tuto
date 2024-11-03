export function LoginForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const username = formData.get("username");
        const password = formData.get("password");
        // fetch("http://localhost:3001/api/login", {
        //   method: "POST",
        //   body: {
        //     username,
        //     password,
        //   },
        // });
      }}
    >
      <div>
        <label htmlFor="username">Username</label>
        <br />
        <input
          id="username"
          name="username"
          type="text"
          required
          onChange={(e) => {
            console.log(`Username: ${e.target.value}`);
          }}
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <br />
        <input
          id="password"
          name="password"
          type="password"
          required
          onChange={(e) => {
            console.log(`Password: ${e.target.value}`);
          }}
        />
      </div>

      <button type="submit">Log in</button>
    </form>
  );
}

export default LoginForm;

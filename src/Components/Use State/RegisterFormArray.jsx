import { useState } from "react";

export function RegisterFormArray() {
  const [formFields, setFormFields] = useState({
    username: "",
    displayName: "",
    password: "",
  });
  const isDisabled =
    !formFields.username || !formFields.password || !formFields.displayName;
  console.log(formFields);
  return (
    <form
     onSubmit={(e) => {
      e.preventDefault();}}
    >
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="pass"
          value={formFields.password}
          // We're gonna spread the JS Object
          // currentvalue represents the current state of formFields
          // Keep in mind that setFormFields works on the whole JS object and not the specific field
          onChange={(e) =>
            setFormFields((currentvalue) => ({
              ...currentvalue,
              password: e.target.value,
            }))
          }
        />
      </div>
      <div>
        <label htmlFor="username">UserName</label>
        <input
          id="user"
          value={formFields.username}
          onChange={(e) =>
            setFormFields((currentvalue) => ({
              ...currentvalue,
              username: e.target.value,
            }))
          }
        />
      </div>
      <div>
        <label htmlFor="displayName">Display Name</label>
        <input
          id="displayName"
          value={formFields.displayName}
          onChange={(e) =>
            setFormFields((currentvalue) => ({
              ...currentvalue,
              displayName: e.target.value,
            }))
          }
        />
      </div>
      <button disabled={isDisabled}>Sign Up</button>
    </form>
  );
}

import { useState } from "react";

export function RegisterForm() {
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");
 const [displayName, setDisplayName] = useState("");
 const isDisabled = !username || !password || !displayName;


 return (
   <form>
     <div>
       <label htmlFor="username">Username</label>
       <input id="username" value={password} onChange={(e) => setPassword(e.target.value)}/>
     </div>
     <div>
       <label htmlFor="username">UserName</label>
       <input id="password" value={username} onChange={(e) => setUsername(e.target.value)}/>
     </div>
     <div>
       <label htmlFor="displayName">Display Name</label>
       <input id="displayName" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
     </div>
     <button disabled={isDisabled}>Sign Up</button>
   </form>
 );
}

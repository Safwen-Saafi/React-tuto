import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

export default function PostContent () {
  const userContextData = useContext(UserContext); 
  return (

   <div>
    <span>Post Content</span>
    <br/>
    {userContextData.id}
    <br/>
    <button onClick={ () => {
      userContextData.setUserData((currentState) => ({
        ...currentState,
        email: 'safwenmagnifico@mammmamia.it'
      }))}
    }>Click me</button>    
    </div> 
  )
} 

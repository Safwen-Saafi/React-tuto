import { useContext } from "react";
import PostContent from "./PostContent";
import { UserContext } from "../Context/UserContext";

export function PostContainer () {
  const userContextData = useContext(UserContext); {/*Consume the usercontext data API */}
  return (
    <div>
        <span>Post container</span>
        <div>{userContextData.email}</div>
        <PostContent/>
    </div>

  )
}

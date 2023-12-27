import React, { useContext } from "react";
import UserContext from "../context/UserContext";

export default function Profile() {
  const { user } = useContext(UserContext); //point 5: extract / recevie data from the context provider.
  const { isLoged } = useContext(UserContext);
  console.log(user);

  return (
    <div>
      <h1>Name: {user.name}</h1>
      <h1>Name: {user.password}</h1>

      <h2>{isLoged}</h2>
    </div>
  );
}

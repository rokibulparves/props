import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

export default function User() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser, isLoged, setIsLoged } = useContext(UserContext); //Point 4: Using the userContextProvider

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ name, password }); // sending data into the context provider.
    setIsLoged(isLoged ? true : false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
}

import React, { useState } from "react";
import UserContext from "./UserContext";

export default function AuthContext({ children }) {
  const [isLoged, setIsLoged] = useState(false);

  return (
    <UserContext.Provider value={{ isLoged, setIsLoged }}>
      {children}
    </UserContext.Provider>
  );
}

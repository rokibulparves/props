//Point 2: We have to create a context provider.
//There can be many types of data. like here is a data for the user and password storeing.
//For every data type there can be various context provider. Here it is for the user name and user password.
//Make sure you pass the value.

import React, { useState } from "react";
import UserContext from "./UserContext";

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(""); //This state is use for receiving data and share data.

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

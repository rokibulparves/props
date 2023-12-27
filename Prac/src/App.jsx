//Point 3: use the specifec context provider to wrap every component

import User from "./component/User";
import Profile from "./component/Profile";
import UserContextProvider from "./context/UserContextProvider";
import AuthContext from "./context/AuthContext";

export default function App() {
  return (
    <UserContextProvider>
      <AuthContext>
        <User />
        <Profile />
      </AuthContext>
    </UserContextProvider>
  );
}

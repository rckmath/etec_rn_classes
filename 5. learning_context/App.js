import React from "react";

import { UserProvider } from "./src/contexts/UserContext";
import HomeScreen from "./src/screens/HomeScreen";

const App = () => {
  return (
    <UserProvider>
      <HomeScreen />
    </UserProvider>
  );
};

export default App;

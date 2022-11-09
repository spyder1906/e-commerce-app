import React from "react";
import Layout from "./pages/Layout";
import Login from "./pages/login/Login";
import { useLogify } from "react-logify";

function App() {
  const { user, onLogin, onLogout } = useLogify();
  return (
    <>
      {!user.id && <Login onLogin={onLogin}/>}
      {user.id && <Layout onLogout={onLogout}/>}
    </>
  );
}

export default App;

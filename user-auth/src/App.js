import React from "react";
import { Route, Link } from "react-router-dom";
import LoginForm from "../src/components/users/LoginForm";
import Users from "../src/components/users/Users";
import LogoutPage from "../src/components/users/LogoutPage";
import UserRegistration from "../src/components/users/UserRegistration";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route path="/register">
        <UserRegistration />
      </Route>
      <Route exact path="/">
        <LoginForm />
      </Route>
      <Route exact path="/users">
        <Users />
      </Route>
      <Route exact path="/logout">
        <LogoutPage />
      </Route>
    </div>
  );
}

export default App;

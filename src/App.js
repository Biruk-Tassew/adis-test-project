import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React from "react";
import { Users } from "./features/users/User";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/">
            <Users />
          </Route>
          <Route path="/add-user">
            <h1>Add user</h1>
          </Route>
          <Route path="/edit-user">
            <h1>Edit user</h1>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

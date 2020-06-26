import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components


// pages
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Villagers from "./pages/Villagers";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/profile">
                <Profile />
            </Route>
            <Route exact path="/Villagers">
                <Villagers />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

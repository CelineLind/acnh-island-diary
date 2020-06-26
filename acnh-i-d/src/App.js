import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components


// pages
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

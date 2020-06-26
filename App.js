import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "styles/style.css";

// components


// pages
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

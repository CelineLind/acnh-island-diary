import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "styles/style.css";

// components


// pages


export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch />
        <Footer />
      </div>
    </Router>
  );
}

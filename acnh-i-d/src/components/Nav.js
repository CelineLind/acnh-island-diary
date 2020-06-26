// imports
import React from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";

export default function Nav() {
    return (
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/villagers">Villagers</Link></li>
          </ul>
        </nav>
      )
}
// imports
import React from "react";
import "../styles/style.css";
import antonio from "../media/antonioVil.png";
import player from "../media/myPlayer.png";

export default function Home() {
    return (
      <div>
        <head>
            <title>ACNH Island Diary</title>
            <nav>
                <ul>
                    <li><a href="landingPage.html">Home</a></li>
                    <li><a href="profilePage.html">Profile</a></li>
                    <li><a href="villagersPage.html">Villagers</a></li>
                </ul>
            </nav>
        </head>

        <body>
            <div class="sidebar">
                <img src={player} id="player-image" alt="villager"/>
                <h3 id="username">Username</h3>

                <div class="villager-table">
                    <img src={antonio} id="villager-icon" alt="villager"/>
                    <img src={antonio} id="villager-icon" alt="villager"/>
                    <img src={antonio} id="villager-icon" alt="villager"/>
                </div>
            </div>
            
            <div class="main">
                <h1 id="page-heading">Welcome to your ACNH Island Diary</h1>
                <p>Log your villagers, your town fruit and other adventures.</p>
            </div>
        </body>
    </div>
    );
  }
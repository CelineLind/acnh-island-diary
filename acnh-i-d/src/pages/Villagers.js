//imports
import React from "react";
import "../styles/style.css";
import antonio from "../media/antonioVil.png";
import player from "../media/myPlayer.png";

export default function Villagers() {
    return (
      <div>
        <head>
          <link rel="stylesheet" href="../styles/style.css"/>
          <title>Villagers</title>
          <nav>
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
              <h1 id="page-heading">Villagers</h1>
              <p>Select your villagers and read information about them.</p>
              <input type="text" id="search-bar" placeholder="Search"/>
              <br/>

              <div class="villager-options">
                  <section>
                      <section id="row">
                          <figure>
                              <p><img src={antonio} alt="villager"/></p>
                              <figcaption>Villager Name</figcaption>
                          </figure>

                          <figure>
                              <p><img src={antonio} alt="villager"/></p>
                              <figcaption>Villager Name</figcaption>
                          </figure>

                          <figure>
                              <p><img src={antonio} alt="villager"/></p>
                              <figcaption>Villager Name</figcaption>
                          </figure>
                      </section>

                  </section>
              </div>
          </div>
        </body>
      </div>
    );
  }
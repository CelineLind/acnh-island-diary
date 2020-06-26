//imports
import React from "react";
import "../styles/style.css";
import antonio from "../media/antonioVil.png";
import player from "../media/myPlayer.png";
import dummyPassport from "../media/passportIMGPlaceholder.png";

export default function Profile() {
    return (
      <div>
        <head>
          <title>Profile</title>
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

          <div class="profile-option-bar">
              <ul>
                  <li>Passport</li>
                  <li>Island</li>
              </ul>
          </div>
            
          <div class="main">
              <div id="passport-section">
                  <img src={dummyPassport}/>
                  <br/>
                  <button type="button">Delete</button>
                  <button type="button">Edit</button>
              </div>

              <br/>

              <div id="island-section">
                  <h3>Island Name Here</h3>
                  <p><strong>Native Fruit:</strong> Pears</p>
              </div>
          </div>
        </body>
    </div>
    );
  }
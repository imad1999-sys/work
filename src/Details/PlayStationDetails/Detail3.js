import React, { Component } from "react";
import NavBar from "../../Component/NavBar";
import Footer from "../../Component/Footer";
import Second from "../../Images/PlayStation/3.jpg";
import {Link} from "react-router-dom";
import "../../CSS/Details.css";
export default class Detail2 extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div class="card mb-3" style={{ maxWidth: "1400px" }}>
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src={Second} class="card-img" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">
                  NexiGo 2020 Upgraded 2TB SSHD Playstation 4 PS4 Console
                  Holiday Bundle, Included 3X Games (The Last of Us, God of War,
                  Horizon Zero Dawn)
                </h5>
                <p class="card-text">
                  Includes a jet-black 2TB SSHD PlayStation 4 System, a Matching
                  DualShock 4 Wireless Controller, upgrade with 2TB NexiGO SSHD
                  for a better performance; NexiGo Professional Upgrade with 2
                  Year warranty on SSHD;
                </p>
                <p class="card-text">
                  【NexiGo Exclusive】Why SSHD? Remarkably improving system
                  performance and Solid Reliability without barely any error.
                </p>
                <p class="card-text">
                  【NexiGo Exclusive】Why 2TB? A vast space to install and play
                  many AAA-grade games that come in huge file size. This will
                  greatly benefit gamers who share their PS4 with other people
                  (e.g. family members).
                </p>
                <p class="card-text">
                  2x USB 3.1 Generation 1 port, 1x AUX Port, HDMI out port (HDR
                  output supported) AC 100-240V, 50/60Hz
                </p>
                <p class="card-text">
                  3 Game Included: Two Game Vouchers, and One physical game (the
                  Last of Us) 【Note:】 Although game codes are printed with a
                  3/31/2020 expiration date, Sony has extended the expiration
                  date until 3/31/2021. Please redeem codes following the normal
                  process.
                </p>
                <div className="price_and_bundle">
                  <h3>Price : $550.11</h3>
                </div>
                <Link
                  className="btn btn-outline-dark"
                  style={{ fontFamily: "'Baloo Tamma 2', cursive;" }}
                  to="/playstation"
                >
                  Back to Products
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

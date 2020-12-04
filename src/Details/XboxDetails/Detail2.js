import React, { Component } from "react";
import NavBar from "../../Component/NavBar";
import Footer from "../../Component/Footer";
import Second from "../../Images/Xbox/3.jpg";
import {Link} from "react-router-dom";
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
                  Microsoft Xbox One S 1TB HDD with Two Wireless Controllers
                  Black and White (Previous Model), 1-Month Game Pass Trial,
                  14-Day Xbox Live Gold, Xbox One Chat Headset and HDMI
                </h5>
                <p class="card-text">
                  Xbox One S 1TB console I Two Xbox Wireless controller I
                  1-month trial of Xbox Game Pass I 14-day trial of Xbox Live
                  Gold
                </p>
                <p class="card-text">
                  Two Xbox One Wireless Controllers: Share the games with your
                  friends with the additional Xbox One Wireless Bluetooth
                  controller; These controllers are compatible with Xbox Series
                  X, Series S, Xbox One X, Xbox One S, Xbox One, Windows 10;
                  Experience the enhanced comfort and feel with the Xbox
                  ergonomic controller
                </p>
                <p class="card-text">
                  Xbox Game Pass 1-month and 14-day Xbox Live Gold included:
                  Play Sea of Thieves, State of Decay 2, and Crackdown 3 with
                  Xbox Game Pass, and over 100 more great games; Connect and
                  play with friends and family on Xbox Live, the most advanced
                  multiplayer network
                </p>
                <p class="card-text">
                  Mytrix Xbox Accessories: Chat in crystal-clear digital
                  wideband audio with the Xbox Chat Headset; 3.5mm audio
                  connection fits with the Xbox controllers and PC; Lightweight
                  and comfortable for long gaming sessions; Also includes the
                  Mytrix Technonlgy HDMI 2.0 cable
                </p>
                <p class="card-text">
                  Watch 4K Blu-ray movies and stream 4K video on Netflix,
                  Amazon, Hulu, and more and experience richer, more luminous
                  colors in games and video with High Dynamic Range technology
                </p>
                <div className="price_and_bundle">
                  <h3>Price : $515.90</h3>
                </div>
                <Link
                  className="btn btn-outline-dark"
                  style={{ fontFamily: "'Baloo Tamma 2', cursive;" }}
                  to="/xbox"
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

import React, { Component } from "react";
import NavBar from "../../Component/NavBar";
import Footer from "../../Component/Footer";
import Second from "../../Images/PlayStation/2.jpg";
import "../../CSS/Details.css";
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
                  SONY PlayStation 4 Slim 1TB Console, Light & Slim PS4 System,
                  1TB Hard Drive, All the Greatest Games, TV, Music & More
                  Platform : iOS, PlayStation, PlayStation 4, Android,
                  PlayStation Vita
                </h5>
                <p class="card-text">
                  Includes a new slim 1TB PlayStation 4 system, a matching
                  DualShock 4 Wireless Controller
                </p>
                <p class="card-text">
                  All the greatest, games, TV, music and more. Connect with your
                  friends to broadcast and celebrate your epic moments at the
                  press of the Share button to Twitch, YouTube, Facebook and
                  Twitter
                </p>
                <p class="card-text">
                  Play online with your friends, get free games, save games
                  online and more with PlayStation Plus membership (sold
                  separately)
                </p>
                <p class="card-text">
                  Use Remote Play to stream gameplay to your Mac, PC, Xperia,
                  and PlayStation Vita
                </p>
                <p class="card-text">Mount not included</p>
                <div className="price_and_bundle">
                  <h3>Price : $350</h3>
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

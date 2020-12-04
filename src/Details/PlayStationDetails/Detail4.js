import React, { Component } from "react";
import NavBar from "../../Component/NavBar";
import Footer from "../../Component/Footer";
import Second from "../../Images/PlayStation/4.jpg";
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
                  Mytrix Playstation 4 Pro 2TB SSHD Console with Dualshock 4
                  Wireless Controller Bundle, 4K HDR, Playstation Pro Enhanced
                  with Solid State Hybrid Drive
                </h5>
                <p class="card-text">
                  PlayStation 4 Pro - 2TB Solid State Hybrid Drive (SSHD) -
                  Gaming Console with Dualshock 4 Wireless Controller - Black
                </p>
                <p class="card-text">
                  Why SSHD? Remarkably improving system performance and Solid
                  Reliability without barely any error.
                </p>
                <p class="card-text">
                  Why 2TB? A vast space to install and play many AAA-grade games
                  that come in huge file size. This will greatly benefit gamers
                  who share their PS4 with other people (e.g. family members).
                </p>
                <p class="card-text">
                  Why PRO? PlayStation 4 PRO - Turn on Boost Mode to give PS4
                  games access to the increased power of PS4 Pro.
                </p>
                <p class="card-text">
                  Native 4K on Pro and Dynamic 4K Gaming. 4K-TV Gaming - More HD
                  Power - HDR Technology - 4K Entertainment and More.
                </p>
                <div className="price_and_bundle">
                  <h3>Price : $420</h3>
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

import React, { Component } from "react";
import NavBar from "../../Component/NavBar";
import Footer from "../../Component/Footer";
import Second from "../../Images/PlayStation/1.jpg";
import "../../CSS/Details.css"
import { Link } from "react-router-dom";
export default class Detail1 extends Component {
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
                  DualShock 4 Wireless Controller for PlayStation 4 - Midnight
                  Blue
                </h5>
                <p class="card-text">
                  Precision control: The feel, shape, and sensitivity of the
                  Dualshock 4's analog sticks and trigger buttons have been
                  enhanced to offer players absolute control for all games on
                  PlayStation 4
                </p>
                <p class="card-text">
                  Sharing at your fingertips: The addition of the share button
                  makes sharing your greatest gaming moments as easy as a push
                  of a button
                </p>
                <p class="card-text">
                  New ways to play: Revolutionary features like the touch pad,
                  integrated light bar, and built in speaker offer exciting new
                  ways to experience and interact with your games
                </p>
                <p class="card-text">
                  Charge Efficiently: The Dualshock 4 wireless controller can be
                  easily be recharged by plugging it into your PS4 system, even
                  when on standby, or with any standard charger with a micro USB
                  port
                </p>
                <p class="card-text">
                  Note: Kindly refer to the user manual provided as a PDF manual
                  in the product description section
                </p>
                <div className="price_and_bundle">
                  <h3>Price : $50.27</h3>
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

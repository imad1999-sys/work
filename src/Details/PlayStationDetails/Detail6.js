import React, { Component } from "react";
import NavBar from "../../Component/NavBar";
import Footer from "../../Component/Footer";
import Second from "../../Images/PlayStation/6.jpg";
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
                  Logitech G Gaming Driving Force Shifter – Compatible with G29
                  and G920 Driving Force Racing Wheels for Playstation 4, Xbox
                  One, and PC
                </h5>
                <p class="card-text">
                  The sim racing shifter for G29 and G920 Driving Force Racing
                  Wheels: Adds realistic shifting to your racing rig
                </p>
                <p class="card-text">
                  Built to last: Durable solid steel gear shifter and hand
                  stitched leather boot and knob cover and six speeds with push
                  down reverse gear
                </p>
                <p class="card-text">
                  Six speed shifter and push down reverse: “H” pattern gear box
                  for fast, smooth shifting.SYSTEM REQUIREMENTS Logitech G29 or
                  G920 Driving Force Racing Wheel.Games that support Logitech
                  Driving Force Shifter(not compatible with Playstation 3).
                  Weight without cable 1.59 pounds. Weight with cable 1.66
                  pounds
                </p>
                <p class="card-text">
                  Secure mounting: Built in clamps mount shifter securely to a
                  table or racing rig. Connection Type : Shifter connection DB9
                  (female)
                </p>
                <p class="card-text">
                  Compatible with PlayStation 4, Xbox One, Windows 8.1, Windows
                  8, or Windows 7, games that support Logitech force feedback
                  racing wheel
                </p>
                <p class="card-text">
                  Weight with cable: 1.66 pound (0.76 kilogram)
                </p>
                <div className="price_and_bundle">
                  <h3>Price : $48.25</h3>
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

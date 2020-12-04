import React, { Component } from "react";
import NavBar from "../../Component/NavBar";
import Footer from "../../Component/Footer";
import First from "../../Images/PlayStation/5.jpg";
import detailFirst from "../../Images/PlayStation/Details/1.jpg";
import detailSecond from "../../Images/PlayStation/Details/2.jpg";
import {Link} from "react-router-dom";
import "../../CSS/Details.css";
export default class Detail5 extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div class="card mb-3" style={{ maxWidth: "1400px" }}>
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src={First} class="card-img" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">
                  Seagate STGD4000400 Game Drive 4TB External Hard Drive
                  Portable HDD - Compatible with PS4 & DualShock 4 Wireless
                  Controller for Playstation 4 - Jet Black
                </h5>
                <p class="card-text">
                  Product 1: Don't delete games from PS4 consoles just to make
                  room for new ones store 100 plus games with 4TB of portable
                  hard drive storage
                </p>
                <p class="card-text">
                  Product 1: Experience no lag gaming and full throttle
                  performance with an external hard drive
                </p>
                <p class="card-text">
                  Product 1: Dive into the action with a quick step by step
                  setup and plug and play USB 3.0 connectivity: no power cable
                  needed
                </p>
                <p class="card-text">
                  Product 1: This game drive features the classic black and blue
                  design of PS4, it’s the perfect accessory for any gaming setup
                  and its compact, travel ready form factor means the adventure
                  can go anywhere
                </p>
                <p class="card-text">
                  Product 2: The feel, shape, and sensitivity of the dual analog
                  sticks and trigger buttons have been improved to provide a
                  greater sense of control, no matter what you play
                </p>
                <p class="card-text">
                  Product 2: The new multi touch and clickable touch pad on the
                  face of the DualShock 4 Wireless Controller opens up worlds of
                  new gameplay possibilities for both newcomers and veteran
                  gamers
                </p>
                <p class="card-text">
                  Product 2: The DualShock 4 Wireless Controller features a
                  built in speaker and stereo headset jack, putting several new
                  audio options in the player's hands
                </p>
                <p class="card-text">
                  Product 2: The Dualshock 4 wireless controller can be easily
                  recharged by plugging it into your PlayStation 4 system, even
                  when in rest mode, or with any standard charger using a USB
                  cable (type A to micro B sold separately)
                </p>
                <div className="price_and_bundle">
                  <h1>This bundle contains 2 items</h1>
                  <h3>Price: $125</h3>
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src={detailFirst} class="card-img" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">
                  1 of Seagate Game Drive 4TB External Hard Drive Portable HDD -
                  Compatible With PS4 (STGD4000400)
                </h5>
                <p class="card-text">
                  Don't delete games from PS4 consoles just to make room for new
                  ones store 100 plus games with 4TB of portable hard drive
                  storage
                </p>
                <p class="card-text">
                  Additional Remappable Front-Facing Buttons: 2 multi-function
                  buttons at the front of the controller can be remapped via
                  Razer Controller Setup for Xbox to unleash greater control and
                  a more personalized play style
                </p>
                <p class="card-text">
                  Experience no lag gaming and full throttle performance with an
                  external hard drive
                </p>
                <p class="card-text">
                  Dive into the action with quick step by step setup and plug
                  and play USB 3. 0 connectivity: no power cable needed
                </p>
                <p class="card-text">
                  This game drive features the classic black and blue design of
                  PS4, it’s the perfect accessory for any gaming setup and its
                  compact, travel ready form factor means the adventure can go
                  anywhere
                </p>
                <p class="card-text">
                  Enjoy long term peace of mind with the included 1 year limited
                </p>
              </div>
            </div>
          </div>
          <hr></hr>
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src={detailSecond} class="card-img" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">
                  1 of DualShock 4 Wireless Controller for PlayStation 4 - Jet
                  Black
                </h5>
                <p class="card-text">
                  The feel, shape, and sensitivity of the dual analog sticks and
                  trigger buttons have been improved to provide a greater sense
                  of control, no matter what you play
                </p>
                <p class="card-text">
                  The new multi touch and clickable touch pad on the face of the
                  DualShock 4 Wireless Controller opens up worlds of new
                  gameplay possibilities for both newcomers and veteran gamers
                </p>
                <p class="card-text">
                  The DualShock 4 Wireless Controller features a built in
                  speaker and stereo headset jack, putting several new audio
                  options in the player's hands
                </p>
                <p class="card-text">
                  The Dualshock 4 wireless controller can be easily recharged by
                  plugging it into your PlayStation 4 system, even when in rest
                  mode, or with any standard charger using a USB cable (type A
                  to micro B sold separately)
                </p>
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
        <Footer></Footer>
      </div>
    );
  }
}

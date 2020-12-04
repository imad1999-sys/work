import React, { Component } from "react";
import NavBar from "../../Component/NavBar";
import Footer from "../../Component/Footer";
import First from "../../Images/Xbox/1.jpg";
import detailFirst from "../../Images/Xbox/Detail1/1.jpg";
import detailSecond from "../../Images/Xbox/Detail1/2.jpg";
import { Link } from "react-router-dom";
import "../../CSS/Details.css";
export default class Detail1 extends Component {
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
                  Razer Wolverine V2 Wired Gaming Controller + Kaira Pro
                  Wireless Gaming Headset for Xbox Series X | S Bundle
                </h5>
                <p class="card-text">
                  The #1 Best-Selling Gaming Peripherals Manufacturer in the US:
                  Source - The NPD Group, Inc., U.S. Retail Tracking Service,
                  Gaming Designed: Keyboards, Mice, PC Headsets, and PC
                  Microphones, Based on dollar sales, Jan. 2017- June 2020
                  combined.
                </p>
                <p class="card-text">
                  Additional Remappable Front-Facing Buttons: 2 multi-function
                  buttons at the front of the controller can be remapped via
                  Razer Controller Setup for Xbox to unleash greater control and
                  a more personalized play style
                </p>
                <p class="card-text">
                  Mecha-Tactile Action Buttons and D-Pad: Wield hyper-responsive
                  actuation with a cushioned touch as you execute your moves
                </p>
                <p class="card-text">
                  TriForce Titanium 50mm Drivers: With titanium-coated
                  diaphragms for added clarity, our cutting-edge drivers can
                  tune highs, mids, and lows separately—producing brighter,
                  clearer sound with richer trebles and more powerful bass
                </p>
                <p class="card-text">
                  EQ and Xbox Pairing Button: Tap twice to cycle through 4 EQ
                  settings—such as FPS Mode that enhances in-game audio like
                  enemy footsteps, and Bass Mode to amplify low frequency
                  sounds. Hold once to connect the headset to console
                </p>
                <p class="card-text">
                  Xbox Wireless and Bluetooth 5.0: Connects directly to your
                  Xbox Series X and devices with Bluetooth connectivity for
                  mobile Xbox gaming
                </p>
                <div className="price_and_bundle">
                  <h1>This bundle contains 2 items</h1>
                  <h3>Price: $230.98</h3>
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
                  1 of Razer Wolverine V2 Wired Gaming Controller for Xbox
                  Series X: Remappable Front-Facing Buttons - Mecha-Tactile
                  Action Buttons and D-Pad - Hair Trigger Mode with Trigger
                  Stop-Switches - Black
                </h5>
                <p class="card-text">
                  Designed for Greater Control and Precision: The controller’s
                  ergonomics provide a natural grip that ensures agile and
                  accurate button interaction, while the contoured design and
                  non-slip rubber grips allow all-day gaming at peak performance
                </p>
                <p class="card-text">
                  Additional Remappable Front-Facing Buttons: 2 multi-function
                  buttons at the front of the controller can be remapped via
                  Razer Controller Setup for Xbox to unleash greater control and
                  a more personalized play style
                </p>
                <p class="card-text">
                  Mecha-Tactile Action Buttons and D-Pad: Wield hyper-responsive
                  actuation with a cushioned touch as you execute your moves
                </p>
                <p class="card-text">
                  Hair Trigger Mode with Trigger Stop-Switches: For a
                  competitive edge, activate Hair Trigger Mode via two
                  slide-locks on the underside of the controller that greatly
                  reduce travel distance to the main triggers, enabling an
                  ultra-fast rate of fire
                </p>
                <p class="card-text">
                  3.5mm Analog Audio Port: Game on for hours in comfort with the
                  ease and convenience of plugging your 3.5mm audio device
                  straight into the controller, instead of the console
                </p>
                <p class="card-text">
                  Razer Controller Setup for Xbox: Experience endless
                  customizability options on the controller. With the Razer
                  Controller Setup for Xbox, you can remap buttons and store
                  your profile settings to maximize your gameplay
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
                  1 of Razer Kaira Pro Wireless Gaming Headset for Xbox Series X
                  | S: TriForce Titanium 50mm Drivers - Supercardioid Mic -
                  Dedicated Mobile Mic - EQ and Xbox Pairing - Xbox Wireless and
                  Bluetooth 5.0 - Black
                </h5>
                <p class="card-text">
                  The #1 Best-Selling Gaming Peripherals Manufacturer in the US:
                  Source - The NPD Group, Inc., U.S. Retail Tracking Service,
                  Gaming Designed: Keyboards, Mice, PC Headsets, and PC
                  Microphones, Based on dollar sales, Jan. 2017- June 2020
                  combined.
                </p>
                <p class="card-text">
                  TriForce Titanium 50mm Drivers: With titanium-coated
                  diaphragms for added clarity, our cutting-edge drivers can
                  tune highs, mids, and lows separately—producing brighter,
                  clearer sound with richer trebles and more powerful bass
                </p>
                <p class="card-text">
                  HyperClear Cardioid Mic: The bendable mic has improved housing
                  and pickup for amazing voice capture that suppresses noise
                  from the back and sides—supported by mic monitoring and
                  game/chat balance to ensure optimal levels
                </p>
                <p class="card-text">
                  Dedicated Mobile Mic: Hidden in the headset is a second mic
                  that works without the HyperClear Cardioid Mic—handy for when
                  you need to talk while commuting, whether it’s for online
                  gaming or answering calls
                </p>
                <p class="card-text">
                  Breathable Memory Foam Ear Cushions: Using a fabric weave that
                  doesn’t trap heat, the headset is easy on the ears, while its
                  soft padded headband provides even more comfort to keep you in
                  peak form during gaming marathons
                </p>
                <p class="card-text">
                  EQ and Xbox Pairing Button: Tap twice to cycle through 4 EQ
                  settings—such as FPS Mode that enhances in-game audio like
                  enemy footsteps, and Bass Mode to amplify low frequency
                  sounds. Hold once to connect the headset to console Xbox
                  Wireless and Bluetooth 5.0: Connects directly to your Xbox
                  Series X and devices with Bluetooth connectivity for mobile
                  Xbox gaming
                </p>
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
        <Footer></Footer>
      </div>
    );
  }
}

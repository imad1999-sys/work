import React, { Component } from "react";
import NavBar from "../../Component/NavBar";
import Footer from "../../Component/Footer";
import Third from "../../Images/Xbox/2.jpg";
import {Link} from "react-router-dom";
import detailFirst from "../../Images/Xbox/Detail1/1.jpg";
import detailSecond from "../../Images/Xbox/Detail1/2.jpg";
export default class Detail3 extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div class="card mb-3" style={{ maxWidth: "1400px" }}>
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src={Third} class="card-img" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Elite Series 2 Controller - Black</h5>
                <p class="card-text">
                  Play like a pro with the all new Xbox elite wireless
                  controller series 2
                </p>
                <p class="card-text">
                  Tailor the controller with new interchangeable thumbstick and
                  paddle shapes
                </p>
                <p class="card-text">
                  Experience limitless customization and exclusive configuration
                  options with the Xbox Accessories app
                </p>
                <p class="card-text">
                  Stay in the game for longer with upto 40 hours of rechargeable
                  battery life. Use Xbox Wireless, Bluetooth, or the included
                  USB C cable to play across your Xbox One and Windows 10
                  devices
                </p>
                <p class="card-text">
                  Compatible with Xbox Series X, Xbox One, Windows 10
                </p>
                <div className="price_and_bundle">
                  <h3>Price: $125.10</h3>
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

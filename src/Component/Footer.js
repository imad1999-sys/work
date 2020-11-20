import React, { Component } from "react";
import "../CSS/Footer.css";
export default class Footer extends Component {
  render() {
    return (
      <div>
        <div class="jumbotron">
          <h1 class="display-4 icon-footer">
            <i class="fas fa-gamepad"></i>
          </h1>
          <h4 className="region">
            <i class="fas fa-globe-americas"></i>
            Country / Region : Canada
          </h4>
          <div className="row">
            <div class="col">
              <ol class="first-footer-list">
                <li>
                  <a href="#">Support</a>
                </li>
                <li style={{ marginTop: "10px" }}>
                  <a href="#">Privacy Policy</a>
                </li>
                <li style={{ marginTop: "10px" }}>
                  <a href="#">Website Terms Of Use</a>
                </li>
                <li style={{ marginTop: "10px" }}>
                  <a href="#">Sitemap</a>
                </li>
                <li style={{ marginTop: "10px" }}>
                  <a href="#">Legal</a>
                </li>
                <li style={{ marginTop: "10px" }}>
                  <a href="#">About SIE</a>
                </li>
              </ol>
            </div>
            <div class="col">
              <ol class="second-footer-list">
                <li>
                  <a href="#">PSN Terms Of Service</a>
                </li>
                <li style={{ marginTop: "10px" }}>
                  <a href="#">PS Store Cancellation Policy</a>
                </li>
                <li style={{ marginTop: "10px" }}>
                  <a href="#">Health Warning</a>
                </li>
                <li style={{ marginTop: "10px" }}>
                  <a href="#">About Rating</a>
                </li>
              </ol>
            </div>
          </div>
          <div class="copyright">
            <div class="container">
              <div class="row">
                <div class="col text-left">
                  CopyRight &copy; 2020 <a href="#">Consoles Store</a>. All
                  Rights Reserved
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import "../CSS/NavBar.css"
export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand site-title" href="#">
            <i class="fas fa-gamepad"></i> Consoles Store
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link btn btn-outline-primary playstation-link" href="#">
                  <i class="fab fa-playstation"></i> PlayStation
                </a>
              </li>
              <li class="nav-item" style={{marginLeft: '10px'}}>
                <a class="nav-link btn btn-outline-primary xbox-link" href="#">
                  <i class="fab fa-xbox"></i> Xbox
                </a>
              </li>
              <li class="nav-item" style={{marginLeft : '870px'}}>
                <a class="nav-link btn btn-outline-primary items-link" href="#">
                  <i class="fas fa-shopping-cart"></i> items
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

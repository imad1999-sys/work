import React, { Component } from "react";
import "../CSS/NavBar.css";
import PlayStationPage from "../Pages/PlayStationPage";
import XboxPage from "../Pages/XboxPage";
import Items from "../Pages/Items";
import HomePage from "../Pages/HomePage";
import {
  Link,
  Route,
  Switch,
  BrowserRouter as Router,
  NavLink,
  Redirect
} from "react-router-dom";
export default class NavBar extends Component {
  render() {
    return (
        <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link class="navbar-brand site-title" to="/">
              <i class="fas fa-gamepad"></i> Consoles Store
            </Link>
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
                  <Link
                    to="/playstation"
                    className="nav-link btn btn-outline-primary playstation-link"
                  >
                    <i class="fab fa-playstation"></i> PlayStation
                  </Link>
                </li>
                <li class="nav-item" style={{ marginLeft: "10px" }}>
                  <Link
                    class="nav-link btn btn-outline-primary xbox-link"
                    to="/xbox"
                  >
                    <i class="fab fa-xbox"></i> Xbox
                  </Link>
                </li>
                <li class="nav-item" style={{ marginLeft: "870px" }}>
                  <Link
                    class="nav-link btn btn-outline-primary items-link"
                    to="/items"
                  >
                    <i class="fas fa-shopping-cart"></i> items
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
    );
  }
}

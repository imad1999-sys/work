import React, { Component } from "react";
import PlayStation from "../Images/playstation.jpg";
import Xbox from "../Images/xbox.jpg";
import "../CSS/Content.css";
import { Link } from "react-router-dom";
export default class Content extends Component {
  render() {
    return (
      <div>
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={PlayStation} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h2 className="playstation">PlayStations</h2>
                <p className="playstation-title">
                  to see more info about playstations <Link class="btn btn-outline-info" to="/playstation"> <i class="fas fa-info-circle"></i> Click Here</Link>
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={Xbox} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h2 className="xbox">Xboxs</h2>
                <p className="xbox-title">
                  to see more info about xboxs <Link class="btn btn-outline-info" to="/xbox"> <i class="fas fa-info-circle"></i> Click Here</Link>
                </p>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

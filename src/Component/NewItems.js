import React, { Component } from "react";
import "../CSS/NewItems.css";
export default class NewItems extends Component {
  render() {
    return (
      <div>
        <div class="jumbotron jumbotron-fluid" style={{ backgroundColor: '#f1f2f6'}}>
          <div class="container">
            <p
              class="display-4 consoles-title"
              style={{ textAlign: "left", fontSize: "30px" }}
            >
              New Consoles
            </p>
            <div
              id="carouselExampleFade"
              class="carousel slide carousel-fade"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <h1
                    class="lead"
                    style={{ textAlign: "left", fontSize: "80px" , marginLeft:'50px' }}
                  >
                    PlayStation 5
                  </h1>
                  <a class="btn btn-outline-dark details-link" > <i class="fas fa-info-circle"></i> View Details</a>
                </div>
                <div class="carousel-item">
                  <h1
                    class="lead"
                    style={{ textAlign: "left", fontSize: "80px" , marginLeft:'50px' }}
                  >
                    Xbox Series X
                  </h1>
                  <a class="btn btn-outline-dark details-link" > <i class="fas fa-info-circle"></i> View Details</a>
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleFade"
                role="button"
                data-slide="prev"
                style ={{ marginRight: '100px'}}
              >
                <span
                  class="fas fa-arrow-circle-left"
                  aria-hidden="true"
                  style ={{ marginRight: '140px' , color: '#2C3A47'}}
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleFade"
                role="button"
                data-slide="next"
              >
                <span
                  class="fas fa-arrow-circle-right"
                  aria-hidden="true"
                  style={{ color: '#2C3A47'}}
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

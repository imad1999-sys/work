import React, { Component } from "react";
import NavBar from "../Component/NavBar";
import Footer from "../Component/Footer";
import First from "../Images/Xbox/1.jpg";
import Second from "../Images/Xbox/2.jpg";
import Third from "../Images/Xbox/3.jpg";
import Fourth from "../Images/Xbox/4.jpg";
import {Link} from "react-router-dom";
export default class XboxPage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="row">
          <div className="col">
            <div class="accordion" id="accordionExample">
              <div class="card">
                <div class="card-header" id="headingOne">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link btn-block text-left title-brand"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <i class="fas fa-copyright"></i>
                      Brand
                    </button>
                  </h2>
                </div>

                <div
                  id="collapseOne"
                  class="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    <ul class="brand-choices">
                      <li>
                        <input
                          class="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          value="option1"
                        />
                        <label class="form-check-label" for="exampleRadios1">
                          Microsoft
                        </label>
                      </li>
                      <li>
                        <input
                          class="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          value="option1"
                        />
                        <label class="form-check-label" for="exampleRadios1">
                          Xbox
                        </label>
                      </li>
                      <li>
                        <input
                          class="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          value="option1"
                        />
                        <label class="form-check-label" for="exampleRadios1">
                          Seagate
                        </label>
                      </li>
                      <li>
                        <input
                          class="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          value="option1"
                        />
                        <label class="form-check-label" for="exampleRadios1">
                          Razer
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingTwo">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link btn-block text-left collapsed title-price"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <i class="fas fa-dollar-sign"></i>
                      Price
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseTwo"
                  class="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    <ul className="price-choice">
                      <li>
                        <input
                          class="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          value="option1"
                        />
                        <label class="form-check-label" for="exampleRadios1">
                          less than 10$
                        </label>
                      </li>
                      <li>
                        <input
                          class="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          value="option1"
                        />
                        <label class="form-check-label" for="exampleRadios1">
                          10$ to 15$
                        </label>
                      </li>{" "}
                      <li>
                        <input
                          class="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          value="option1"
                        />
                        <label class="form-check-label" for="exampleRadios1">
                          15$ to 25$
                        </label>
                      </li>{" "}
                      <li>
                        <input
                          class="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          value="option1"
                        />
                        <label class="form-check-label" for="exampleRadios1">
                          25$ to 35$
                        </label>
                      </li>{" "}
                      <li>
                        <input
                          class="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          value="option1"
                        />
                        <label class="form-check-label" for="exampleRadios1">
                          more than 35$
                        </label>
                      </li>{" "}
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingThree">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link btn-block text-left collapsed title-date"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <i class="fas fa-calendar-alt"></i>
                      Release Date
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseThree"
                  class="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    <ul class="date-choice">
                      <li>
                        <input
                          class="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          value="option1"
                        />
                        <label class="form-check-label" for="exampleRadios1">
                          last 30 days
                        </label>
                      </li>{" "}
                      <li>
                        <input
                          class="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          value="option1"
                        />
                        <label class="form-check-label" for="exampleRadios1">
                          last 60 days
                        </label>
                      </li>{" "}
                      <li>
                        <input
                          class="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          value="option1"
                        />
                        <label class="form-check-label" for="exampleRadios1">
                          last 90 days
                        </label>
                      </li>{" "}
                      <li>
                        <input
                          class="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          value="option1"
                        />
                        <label class="form-check-label" for="exampleRadios1">
                          Coming Soon
                        </label>
                      </li>{" "}
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingFour">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link btn-block text-left collapsed title-condition"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      <i class="fas fa-question-circle"></i>
                      Condition
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseFour"
                  class="collapse"
                  aria-labelledby="headingFour"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    <ul className="condition-choice">
                      <li>
                        <input
                          class="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          value="option1"
                        />
                        <label class="form-check-label" for="exampleRadios1">
                          New
                        </label>
                      </li>{" "}
                      <li>
                        <input
                          class="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          value="option1"
                        />
                        <label class="form-check-label" for="exampleRadios1">
                          Used
                        </label>
                      </li>{" "}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="row row-cols-1 row-cols-md-2 grid-cards">
              <div class="col mb-4">
                <div
                  class="card"
                  style={{ width: "400px", marginRight: "320px" }}
                >
                  <img
                    src={First}
                    class="card-img-top"
                    alt="..."
                    style={{
                      height: "300px",
                      width: "300px",
                      marginLeft: "45px",
                    }}
                  />
                  <div class="card-body">
                    <h5 class="card-title">
                      Microsoft Xbox One S 1TB HDD with Two Wireless Controllers
                      Black and White, 1-Month Game Pass Trial, 14-Day Xbox Live
                      Gold, Xbox One Controller Case
                    </h5>
                    <p class="card-text">Price : $515.90</p>
                    <p class="card-text">By Microsoft</p>
                    <Link className="btn btn-outline-info" to="/xbox/details1">
                      {" "}
                      <i class="fas fa-info-circle"></i>
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col mb-4">
                <div
                  class="card"
                  style={{ width: "400px", marginLeft: "50px" }}
                >
                  <img
                    src={Second}
                    class="card-img-top"
                    alt="..."
                    style={{
                      height: "300px",
                      width: "300px",
                      marginLeft: "45px",
                    }}
                  />
                  <div class="card-body">
                    <h5 class="card-title">
                      Elite Series 2 Controller - Black
                    </h5>
                    <p class="card-text">Price: $125.10</p>
                    <p class="card-text">By Xbox</p>
                    <Link className="btn btn-outline-info" to="/xbox/details2">
                      {" "}
                      <i class="fas fa-info-circle"></i>
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col mb-4">
                <div class="card" style={{ width: "400px" }}>
                  <img
                    src={Third}
                    class="card-img-top"
                    alt="..."
                    style={{
                      height: "300px",
                      width: "300px",
                      marginLeft: "45px",
                    }}
                  />
                  <div class="card-body">
                    <h5 class="card-title">
                      Seagate Game Drive 4TB External Hard Drive Portable HDD -
                      Designed For Xbox One, Green - 1 year Rescue Service
                      (STEA4000402)
                    </h5>
                    <p class="card-text">Price : $80.11</p>
                    <p class="card-text">By Seagate</p>
                    <Link className="btn btn-outline-info" to="/xbox/details3">
                      {" "}
                      <i class="fas fa-info-circle"></i>
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col mb-4">
                <div
                  class="card"
                  style={{ width: "400px", marginLeft: "50px" }}
                >
                  <img
                    src={Fourth}
                    class="card-img-top"
                    alt="..."
                    style={{
                      height: "300px",
                      width: "300px",
                      marginLeft: "45px",
                    }}
                  />
                  <div class="card-body">
                    <h5 class="card-title">
                      Razer Wolverine V2 Wired Gaming Controller + Kaira Pro
                      Wireless Gaming Headset for Xbox Series X | S Bundle
                    </h5>
                    <p class="card-text">Price: $230.98</p>
                    <p class="card-text">By Razer</p>
                    <Link className="btn btn-outline-info" to="/xbox/details4">
                      {" "}
                      <i class="fas fa-info-circle"></i>
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

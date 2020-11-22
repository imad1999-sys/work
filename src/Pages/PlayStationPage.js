import React, { Component } from "react";
import NavBar from "../Component/NavBar.js";
import Footer from "../Component/Footer.js";
import "../CSS/PlayStationPage.css";
import First from "../Images/PlayStation/1.jpg";
import Second from "../Images/PlayStation/2.jpg";
import Three from "../Images/PlayStation/3.jpg";
import Four from "../Images/PlayStation/4.jpg";
import Five from "../Images/PlayStation/5.jpg";
import Six from "../Images/PlayStation/6.jpg";
export default class PlayStationPage extends Component {
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
                          PlayStation
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
                          Sony
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
                          NexiGo
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
                          Mytrix
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
                          Logitech G
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
                      DualShock 4 Wireless Controller for PlayStation 4 -
                      Midnight Blue
                    </h5>
                    <p class="card-text">Price : $50.27</p>
                    <p class="card-text">By PlayStation</p>
                    <a href="#" className="btn btn-outline-info">
                      {" "}
                      <i class="fas fa-info-circle"></i>
                      View Details
                    </a>
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
                      SONY PlayStation 4 Slim 1TB Console, Light & Slim PS4
                      System, 1TB Hard Drive, All the Greatest Games, TV, Music
                      & More
                    </h5>
                    <p class="card-text">Price: $350</p>
                    <p class="card-text">By Sony</p>
                    <a href="#" className="btn btn-outline-info">
                      {" "}
                      <i class="fas fa-info-circle"></i>
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              <div class="col mb-4">
                <div class="card" style={{ width: "400px" }}>
                  <img
                    src={Three}
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
                      NexiGo 2020 Upgraded 2TB SSHD Playstation 4 PS4 Console
                      Holiday Bundle, Included 3X Games (The Last of Us, God of
                      War, Horizon Zero Dawn)
                    </h5>
                    <p class="card-text">Price : $550.11</p>
                    <p class="card-text">By NexiGo</p>
                    <a href="#" className="btn btn-outline-info">
                      {" "}
                      <i class="fas fa-info-circle"></i>
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              <div class="col mb-4">
                <div
                  class="card"
                  style={{ width: "400px", marginLeft: "50px" }}
                >
                  <img
                    src={Four}
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
                      Mytrix Playstation 4 Pro 2TB SSHD Console with Dualshock 4
                      Wireless Controller Bundle, 4K HDR, Playstation Pro
                      Enhanced with Solid State Hybrid Drive
                    </h5>
                    <p class="card-text">Price: $420</p>
                    <p class="card-text">By Mytrix</p>
                    <a href="#" className="btn btn-outline-info">
                      {" "}
                      <i class="fas fa-info-circle"></i>
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              <div class="col mb-4">
                <div class="card" style={{ width: "400px" }}>
                  <img
                    src={Five}
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
                      Seagate STGD4000400 Game Drive 4TB External Hard Drive
                      Portable HDD - Compatible with PS4 & DualShock 4 Wireless
                      Controller for Playstation 4 - Jet Black
                    </h5>
                    <p class="card-text">Price: $125</p>
                    <p class="card-text">By Seagate</p>
                    <a href="#" className="btn btn-outline-info">
                      {" "}
                      <i class="fas fa-info-circle"></i>
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              <div class="col mb-4">
                <div
                  class="card"
                  style={{ width: "400px", marginLeft: "50px" }}
                >
                  <img
                    src={Six}
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
                      Logitech G Gaming Driving Force Shifter – Compatible with
                      G29 and G920 Driving Force Racing Wheels for Playstation
                      4, Xbox One, and PC
                    </h5>
                    <p class="card-text">Price: $48.25</p>
                    <p class="card-text">By Logitech G</p>
                    <a href="#" className="btn btn-outline-info">
                      {" "}
                      <i class="fas fa-info-circle"></i>
                      View Details
                    </a>
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

import React, { Component } from "react";
import NavBar from "../../Component/NavBar";
import Footer from "../../Component/Footer";
import Fourth from "../../Images/Xbox/4.jpg";
import { Link } from "react-router-dom";
import detailFirst from "../../Images/Xbox/Detail1/1.jpg";
import detailSecond from "../../Images/Xbox/Detail1/2.jpg";
export default class Detail4 extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div class="card mb-3" style={{ maxWidth: "1400px" }}>
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src={Fourth} class="card-img" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">
                  Seagate Game Drive 4TB External Hard Drive Portable HDD -
                  Designed For Xbox One, Green - 1 year Rescue Service
                  (STEA4000402)
                </h5>
                <p class="card-text">
                  Don't delete games from Xbox consoles just to make room for
                  new ones store 100 plus titles with 4TB of portable external
                  hard drive storage
                </p>
                <p class="card-text">
                  Experience no lag gaming with a portable hard drive optimized
                  specifically for the Xbox
                </p>
                <p class="card-text">
                  Dive into the action with a quick step by step setup and plug
                  and play USB 3.0 connectivity no power cable needed
                </p>
                <p class="card-text">
                  Featuring the classic green design of the original Xbox logo,
                  this gaming hard drive is the perfect accessory for any setup
                  and its compact, travel ready form factor means the adventure
                  can go anywhere
                </p>
                <p class="card-text">
                  Enjoy long term peace of mind with the included 1 year limited
                  warranty and 1 year Rescue Service
                </p>
                <p class="card-text">Compatible devices: Gaming Console</p>
                <div className="price_and_bundle">
                  <h3>Price: $80.11</h3>
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

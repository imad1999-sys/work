import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Component/NavBar";
import Content from "./Component/Content";
import NewItems from "./Component/NewItems";
import Footer from "./Component/Footer";
import PlayStationPage from "./Pages/PlayStationPage";
import XboxPage from "./Pages/XboxPage";
import Detail1 from "../src/Details/PlayStationDetails/Detail1.js";
import Detail2 from "../src/Details/PlayStationDetails/Detail2.js";
import Detail3 from "../src/Details/PlayStationDetails/Detail3.js";
import Detail4 from "../src/Details/PlayStationDetails/Detail4.js";
import Detail5 from "../src/Details/PlayStationDetails/Detail5.js";
import Detail6 from "../src/Details/PlayStationDetails/Detail6.js";
import xboxDetail1 from "../src/Details/XboxDetails/Detail1.js";
import xboxDetail2 from "../src/Details/XboxDetails/Detail2.js";
import xboxDetail3 from "../src/Details/XboxDetails/Detail3.js";
import xboxDetail4 from "../src/Details/XboxDetails/Detail4.js";
import Items from "../src/Pages/Items.js";
import HomePage from "../src/Pages/HomePage.js";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Component } from "react";
class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/playstation" component={PlayStationPage}></Route>
        <Route exact path="/xbox" component={XboxPage}></Route>
        <Route exact path="/items" component={Items}></Route>
        <Route exact path="/playstation/details1" component={Detail1}></Route>
        <Route exact path="/playstation/details2" component={Detail2}></Route>
        <Route exact path="/playstation/details3" component={Detail3}></Route>
        <Route exact path="/playstation/details4" component={Detail4}></Route>
        <Route exact path="/playstation/details5" component={Detail5}></Route>
        <Route exact path="/playstation/details6" component={Detail6}></Route>
        <Route exact path="/xbox/details1" component={xboxDetail1}></Route>
        <Route exact path="/xbox/details2" component={xboxDetail2}></Route>
        <Route exact path="/xbox/details3" component={xboxDetail3}></Route>
        <Route exact path="/xbox/details4" component={xboxDetail4}></Route>
      </Router>
    );
  }
}

export default App;

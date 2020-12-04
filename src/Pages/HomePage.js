import React, { Component } from "react";
import NavBar from "../Component/NavBar";
import Content from "../Component/Content";
import NewItems from "../Component/NewItems";
import Footer from "../Component/Footer";

export default class HomePage extends Component{
    render(){
        return(<div>
            <NavBar></NavBar>
            <Content></Content>
            <NewItems></NewItems>
            <Footer></Footer>
        </div>)
    }
}
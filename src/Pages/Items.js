import React, { Component } from "react";
import NavBar from "../Component/NavBar";
import Footer from "../Component/Footer";
import Content_Items from "../Component/Content_Items";
export default class Items extends Component{
    render(){
        return(
            <div>
                <NavBar></NavBar>
                <Content_Items></Content_Items>
                <Footer></Footer>
            </div>
        )
    }
}
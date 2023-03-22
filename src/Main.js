import React, { Component } from "react";
import {
    Route, Routes,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import About from "./About";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1 id="tit">Zomato</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/menu">Menu</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
          </ul>
          <div className="content">
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/menu" element={<Menu />}/>
              <Route path="/about" element={<About />}/>
          </Routes>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;
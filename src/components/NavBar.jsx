import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact.jsx";
import { Product } from "./Pages/Product";
import SignIn from "./Pages/SignIn.jsx";
import "./NavBar.css";
import logo from "../assets/img/Biden-crypto-rectangular.png";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const [color, setColor] = useState("FFE366");

  document.body.style.backgroundColor = color;

  return (
    <div >
      <Router>
        <nav className="navbar">
          <div className="nav-container">
            <NavLink exact to="/" className="nav-logo">
              <img src={logo} alt="logo" className="biden-logo" />
            </NavLink>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={() => { handleClick(); setColor("FFE366"); }}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/about"
                  activeClassName="active"
                  className="nav-links"
                  onClick={() => { handleClick(); setColor("FFE366"); }}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/product"
                  activeClassName="active"
                  className="nav-links"
                  onClick={() => { handleClick(); setColor("FFE366"); }}
                >
                  Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/contact"
                  activeClassName="active"
                  className="nav-links"
                  onClick={() => { handleClick(); setColor("FFE366"); }}
                >
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/Signin"
                  activeClassName="active"
                  className="nav-links"
                  onClick={() => { handleClick(); setColor("FFE366"); }}
                >
                  Sign in
                </NavLink>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
          </div>
        </nav>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/product" component={Product} />
        <Route path="/contact" component={Contact} />
        <Route path="/signin" component={SignIn} />
      </Router>
    </div>
  );
}

export default NavBar;

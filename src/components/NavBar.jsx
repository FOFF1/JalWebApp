import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
} from "reactstrap";
import brandLogo from "../images/brand-icon.jpg";
import { Switch, Route } from "react-router-dom";
import About from "../views/AboutPage";
import MyCart from "../views/MyCart";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md" style={{ backgroundColor: "azure" }}>
        <NavbarBrand>
          <Link to="/products">
            <img
              src={brandLogo}
              style={{ width: 30, height: 28, padding: 1, marginTop: -7 }}
              alt="This is brandicon"
            />
            GangaJal
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem style={{padding:'4px'}}>
              <Link to="/about/">About</Link>
            </NavItem>
            <NavItem style={{padding:'4px'}}>
              <Link to="https://github.com/reactstrap/reactstrap">
                Social Media
              </Link>
            </NavItem>
            <NavItem style={{padding:'4px'}}>
              <Link to="/myCart/">My Cart</Link>
            </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            <NavItem style={{padding:'4px'}}>
              <Link to="/login/">Hey User, Login?</Link>
            </NavItem>
          </Nav>
          <NavbarText>Happy Shopping!</NavbarText>
        </Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/myCart">
          <MyCart />
        </Route>
      </Switch>
    </div>
  );
};

export default NavBar;

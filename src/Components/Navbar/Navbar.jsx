import React from "react";
import {BiSearch} from "react-icons/bi";
import {Nav} from "./NavbarElements";

const Navbar = () => {
  return (
    <Nav>
      <div className="title">
        <h4>Hi Shahroz!</h4>
        <h1>
          Welcome to <span>SHOP DASHBOARD</span>
        </h1>
      </div>

      <div className="search">
        <BiSearch />
        <input type="text" placeholder="Search" />
      </div>
    </Nav>
  );
};

export default Navbar;

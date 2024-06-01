import React from "react";
import "../styles/Navbar.scss";
import logo from "../images/book-logo.png";

const Navbar = () => {
  return (
    <nav>
      <div className="logo-div">
        <img src={logo} alt="" />
      </div>
      <div className="title">BookBuzz</div>
    </nav>
  );
};

export default Navbar;

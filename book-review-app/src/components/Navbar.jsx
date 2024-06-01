import React from "react";
import "../styles/Navbar.scss";
import logo from "../images/book-logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <div className="logo-container" onClick={() => navigate("/")}>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="title">BookBuzz</div>
      </div>
    </nav>
  );
};

export default Navbar;

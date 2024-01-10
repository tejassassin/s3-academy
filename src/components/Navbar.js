import React from "react";
import "../styles/Navbar.css";
import logo from "../images/logo.jpg";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo_container">
        <img className="logo" src={logo} />
      </div>

      <div className="navbar_mid">
        <div className="option">Home</div>
        <div className="option">About Us</div>
        <div className="option">Courses</div>
        <div className="option">Team</div>
        <div className="option">Testimonials</div>
      </div>

      <div className="navbar_book_btn">Book Now</div>
    </div>
  );
}

import React from "react";
import "./Navbar.css";

export default function Navbar({ toggleSidebar }) {
  return (
    <nav className="navbar">
      <button className="menu-btn" onClick={toggleSidebar}>
        ☰
      </button>
      <h1 className="logo">KabomHub</h1>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

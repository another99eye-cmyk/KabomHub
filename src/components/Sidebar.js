import React from "react";
import "./Sidebar.css";

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={toggleSidebar}>×</button>
      <a href="#home" onClick={toggleSidebar}>Home</a>
      <a href="#features" onClick={toggleSidebar}>Features</a>
      <a href="#contact" onClick={toggleSidebar}>Contact</a>
    </aside>
  );
}

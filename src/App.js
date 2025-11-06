import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import Sidebar from "./components/Sidebar/Sidebar.js";
import Hero from "./components/Hero/Hero.js";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-layout">
        <Sidebar />
        <Hero />
      </div>
    </div>
  );
}

export default App;

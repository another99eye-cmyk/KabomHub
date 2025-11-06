import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar-menu">
        <li>Dashboard</li>
        <li>My Courses</li>
        <li>Messages</li>
        <li>Settings</li>
      </ul>
    </aside>
  );
};

export default Sidebar;

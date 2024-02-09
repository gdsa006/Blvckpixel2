import React from "react";
import SidebarItem from "./SidebarItem";
import "./Blvckbook.css"; 

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <h2>Sidebar</h2>
      <div className="wrapper">
        <SidebarItem type="text" content="TXT" />
        <SidebarItem type="image" content="IMG" />
      </div>
    </div>
  );
};

export default Sidebar;

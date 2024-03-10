import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Navbar />
      <Sidebar />
      <div className="flex-grow">{children}</div>
    </div>
  );
};

export default Layout;

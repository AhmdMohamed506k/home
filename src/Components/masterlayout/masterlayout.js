import React from "react";
import Navbar from "../navbar/navbar";
import { Outlet } from "react-router-dom";
import Footer from "../footer/footer";

export default function masterlayout() {
  return (
    <div>
      <Navbar />
    
        <Outlet></Outlet>
  
      <Footer />
    </div>
  );
}

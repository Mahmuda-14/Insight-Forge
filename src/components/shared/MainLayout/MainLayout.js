"use client";
import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Container } from "@mui/material";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer></Footer>
    </>
  );
};

export default MainLayout;

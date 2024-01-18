"use client";
import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Container } from "@mui/material";

const MainLayout = ({ children }) => {
  return (
    <>
      <Container maxWidth="lg">
        <Navbar />
        {children}
        <Footer></Footer>
      </Container>
    </>
  );
};

export default MainLayout;

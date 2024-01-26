"use client";
import React from "react";
import Footer from "../footer/Footer";

import { Container } from "@mui/material";
import Navbar from "../Navbar/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Container maxWidth="xl">
        <Navbar />
        {children}
        <Footer></Footer>
      </Container>
    </>
  );
};

export default MainLayout;

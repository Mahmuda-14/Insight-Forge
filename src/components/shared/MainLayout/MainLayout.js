"use client";
import React from "react";
import Footer from "../footer/Footer";

import { Container } from "@mui/material";
import DrawerAppBar from "../Navbar/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Container maxWidth="xl" className="overflow-x-hidden">
       <DrawerAppBar>
       </DrawerAppBar>
        {children}
        <Footer></Footer>
      </Container>
    </>
  );
};

export default MainLayout;

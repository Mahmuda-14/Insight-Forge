"use client";
import React from "react";
import Footer from "../footer/Footer";

import { Box } from "@mui/material";
import DrawerAppBar from "../Navbar/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Box sx={{maxWidth:"xl", overflow:"hidden", margin:"auto"}}>
       
        {children}
      
      </Box>
    </>
  );
};

export default MainLayout;

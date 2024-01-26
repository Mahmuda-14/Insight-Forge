"use client";
import React from "react";
import "./review.css";
import MyCard from "./MyCard";
import Story from "./Story";
import { Box } from "@mui/material";

const Review = () => {
  return (
    <Box
      mt={5}
      p={5}
      gap={10}
      display="flex"
      justifyContent="space-evenly"
      alignItems="center"
      sx={{
        flexDirection: { xs: "column", md: "row" },
        height:650  
      }}
      className=" parallax-container"
    >
      <Box
        sx={{
          width: { sm: "100%", md: "40%" },
        }}
      >
        <MyCard />
      </Box>
      <Box
        sx={{
          width: { sm: "100%", md: "40%" },
        }}
      >
        <Story />
      </Box>
    </Box>
  );
};

export default Review;

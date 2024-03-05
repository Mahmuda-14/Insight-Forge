"use client";
import React from "react";
import "./review.css";
import MyCard from "./MyCard";
import Story from "./Story";
import { Box } from "@mui/material";
import Image from "next/image";

const Review = () => {
  return (
    <div>
      <div className="my-[100px] text-center flex flex-col items-center">
        <Image src="https://i.ibb.co/BqBk2dq/24-removebg-preview-1.png" alt="ok" width={300} height={200}></Image>
        <p className="text-[35px] font-bold text-[#263238]">Reviews of our precious users</p>
        <p className="mt-[20px]">Real People, Real Reviews: Our Happy Customers</p>
      </div>

      <Box
        mt={5}
        p={5}
        gap={10}
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        sx={{
          flexDirection: { xs: "column", md: "row" },
          height: { xs: 950, md: 434 }
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
    </div>
  );
};

export default Review;
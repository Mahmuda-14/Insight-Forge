"use client";
import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { blueGrey, brown, red } from "@mui/material/colors";
import Image from "next/image";

const Story = () => {
  return (
    <div>
      <Card
        sx={{
          paddingTop: "32px",
          paddingBottom: "32px",
          backgroundColor: blueGrey[400],
          color: "#263238",
          px:2
          
        }}
      >
            <div className='flex justify-center  items-center '>
    <Image src="https://i.ibb.co/wWQfKSr/Untitled-design-1-removebg-preview.png" alt='ok' width={150} height={150}></Image>
    </div>
        <CardContent sx={{ padding: "20px" }}>
          <CardHeader
            titleTypographyProps={{
              fontSize: { xs: 18, sm: 26 },
              fontWeight: 'bold',
            }}
       
          
            title="CUSTOMER REVIEW"
          />

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginTop: "30px", color: "white" }}
          >
            From insightful content to user-friendly interfaces, Insight Forge strive to create an engaging platform for collaborative learning. Join Insight Forge in exploring, sharing, and reviewing the wealth of information that fuels everyone collective intellectual growth!
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Story;

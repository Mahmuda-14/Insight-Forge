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

const Story = () => {
  return (
    <div>
      <Card
        sx={{
          paddingTop: "143px",
          paddingBottom: "50px",
          backgroundColor: blueGrey[400],
          color: "white",
          px:2
          
        }}
      >
        <CardContent sx={{ padding: "40px" }}>
          <CardHeader
            titleTypographyProps={{
              fontSize: { xs: 18, sm: 26 },
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

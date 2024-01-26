"use client";
import { FaQuoteLeft } from "react-icons/fa";
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
import { red } from "@mui/material/colors";

const MyCard = () => {
  return (
    <div>
      <Card sx={{ padding: "30px", bgcolor: "white" }}>
        <CardContent>
          <FaQuoteLeft></FaQuoteLeft>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ color: "black", fontSize: "lg", fontWeight: "lg" }}
          >
             Join Insight Forge in exploring, sharing, and reviewing the wealth of information that fuels everyone collective intellectual growth!
          </Typography>
        </CardContent>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          title="Shrimp and Chorizo Paella"
          subheader={<Rating name="size-small" defaultValue={2} size="small" />}
        />
      </Card>
    </div>
  );
};

export default MyCard;

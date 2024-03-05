"use client";
import { FaQuoteLeft } from "react-icons/fa";
import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Rating,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { Add } from "@mui/icons-material";

const MyCard = () => {
  const StyledFaQuoteLeft = styled(FaQuoteLeft)({
    color: 'white'
});
  return (
    <div>
      <Card sx={{ padding: "30px", bgcolor: "transparent", boxShadow:'none' }}>
        <CardContent>
        <StyledFaQuoteLeft />
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ color: "white", fontSize: "lg", fontWeight: "lg" }}
          >
             Join Insight Forge in exploring, sharing, and reviewing the wealth of information that fuels everyone collective intellectual growth!
          </Typography>
        </CardContent>

        <CardHeader sx={{ color: 'white' }}
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          title="Shrimp and Chorizo Paella"
          subheader={<Rating name="size-small" defaultValue={2} sx={{ color: 'white' }} size="small" />}

        />
        <Button className=" text-white left-[400px]"><Add></Add></Button>
      </Card>
    </div>
  );
};

export default MyCard;

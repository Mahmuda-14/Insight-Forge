import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import demo from "../../../../../public/demo.jpg";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const PostCard = () => {
  return (
    <Card sx={{ display: "flex" }}>
      <Image width={100} height="100%" src={demo} alt="demo" />
      <CardContent sx={{ width: "100%" }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          user name
        </Typography>
        <Typography variant="h5" component="div">
          how to become a web developer in 2024?
        </Typography>
        <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
          2 hours ago
        </Typography>
        <Box display="flex" justifyContent="end">
          <Typography sx={{ fontSize: 16 }}>27 answers</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
export default PostCard;

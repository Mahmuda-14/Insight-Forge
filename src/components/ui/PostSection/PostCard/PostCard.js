import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
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
        <Box display="flex" justifyContent="space-between">
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            user name
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Wishlist
          </Typography>
        </Box>
        <Typography
          textAlign="start"
          fontWeight={700}
          sx={{ fontSize: { md: 26, xs: 16 } }}
          component="div"
        >
          how to become a web developer in 2024?
        </Typography>
        <Typography
          textAlign="start"
          sx={{ fontSize: 12 }}
          color="text.secondary"
          gutterBottom
        >
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

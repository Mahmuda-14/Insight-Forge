
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { brown } from "@mui/material/colors";




const Social = ({ src, alt, title }) => {
  return (
    <Card sx={{ display: "flex", padding: '30px', bgcolor: brown[300] }}>
    <Image width={100} height="100%" src={src} alt={alt} />
    <CardContent sx={{ width: "100%" }}>
      <Typography sx={{ fontSize: 16 }} color="text.secondary">
        Join Us On
      </Typography>
      <Typography variant="h5" component="div">
        {title}
      </Typography>
    </CardContent>
  </Card>
  );
};

export default Social;

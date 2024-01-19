import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";


const Social = ({ src, alt, title }) => {
  return (
    <Card sx={{ display: "flex", backgroundColor: "#B2533E", p:3 , justifyContent:"center", alignItems:"center"}}>
      <Image width={50} height="100%" src={src} alt={alt} />
      <CardContent>
        <Typography sx={{ fontSize: 18, color:"white" }} color="text.secondary">
          Join Us On
        </Typography>
        <Typography variant="h4" sx={{color:"white"}}>{title}</Typography>
      </CardContent>
    </Card>
  );
};

export default Social;

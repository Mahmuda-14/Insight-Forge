import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { brown } from "@mui/material/colors";

const Social = ({ src, alt, title }) => {
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: brown[500],
      }}
    >
      <Image width={50} height="100%" src={src} alt={alt} />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          Join Us On
        </Typography>
        <Typography variant="h5">{title}</Typography>
      </CardContent>
    </Card>
  );
};

export default Social;

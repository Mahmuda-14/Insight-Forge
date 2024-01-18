import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Grid } from "@mui/material";
import Image from "next/image";
import MainCotainer from "../Container/MainCotainer";

const Logo = () => {
  return (
    <MainCotainer>
      <Grid
        my={5}
        spacing={3}
        justifyContent="center"
        alignItems="center"
        container
      >
        <Grid item xs={6} md={3}>
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardContent>
              <Image
                src="https://i.ibb.co/gyfztdz/1-removebg-preview-1.png"
                alt="ok"
                width={150}
                height={150}
              ></Image>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6} md={3}>
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardContent>
              <Image
                src="https://i.ibb.co/KLJwRD7/3-removebg-preview.png"
                alt="3-removebg-preview"
                width={150}
                height={150}
              ></Image>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardContent>
              <Image
                src="https://i.ibb.co/kMZ2Ksp/4-removebg-preview.png"
                alt="ok"
                width={150}
                height={150}
              ></Image>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardContent>
              <Image
                src="https://i.ibb.co/JH6JrW8/5-removebg-preview.png"
                alt="ok"
                width={150}
                height={150}
              ></Image>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </MainCotainer>
  );
};

export default Logo;

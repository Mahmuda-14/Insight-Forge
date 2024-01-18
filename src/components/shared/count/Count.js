"use client";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import React from "react";
import MainCotainer from "../Container/MainCotainer";

const Count = () => {
  const footerStyle = {
    backgroundImage: 'url("https://i.ibb.co/8NTY8Pk/ok.png")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "auto",
    width: "100%",
  };

  return (
    <Box mt={8}>
      <div style={footerStyle}>
        <MainCotainer>
          <Grid container spacing={3} py={10}>
            <Grid item lg={3} md={6} xs={12}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src="https://i.ibb.co/D7TFD1q/aa-removebg-preview.png"
                  alt="cover"
                  width={55}
                  height={55}
                />
                <Typography
                  variant="h4"
                  sx={{ margin: "10px", color: "#ffffff" }}
                >
                  126
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: "#ffffff", fontSize: "15px" }}
                >
                  Happy Client
                </Typography>
              </div>
            </Grid>

            <Grid item lg={3} md={6} xs={12}>
              <div
                style={{
                  display: "flex",

                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src="https://i.ibb.co/jzsQGkB/a-removebg-preview-1.png"
                  alt="cover"
                  width={55}
                  height={55}
                />
                <Typography
                  variant="h4"
                  sx={{ margin: "10px", color: "#ffffff" }}
                >
                  109
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: "#ffffff", fontSize: "15px" }}
                >
                  Happy Client
                </Typography>
              </div>
            </Grid>

            <Grid item lg={3} md={6} xs={12}>
              <div
                style={{
                  display: "flex",

                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src="https://i.ibb.co/23xfcBy/a-removebg-preview-3.png"
                  alt="cover"
                  width={55}
                  height={55}
                />
                <Typography
                  variant="h4"
                  sx={{ margin: "10px", color: "#ffffff" }}
                >
                  60
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: "#ffffff", fontSize: "15px" }}
                >
                  Happy Client
                </Typography>
              </div>
            </Grid>

            <Grid item lg={3} md={6} xs={12}>
              <div
                style={{
                  display: "flex",

                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src="https://i.ibb.co/80jhCMm/a-removebg-preview-4.png"
                  alt="cover"
                  width={55}
                  height={55}
                />
                <Typography
                  variant="h4"
                  sx={{ margin: "10px", color: "#ffffff" }}
                >
                  200
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: "#ffffff", fontSize: "15px" }}
                >
                  Happy Client
                </Typography>
              </div>
            </Grid>
          </Grid>
        </MainCotainer>
      </div>
    </Box>
  );
};

export default Count;

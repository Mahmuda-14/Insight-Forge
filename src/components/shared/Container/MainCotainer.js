"use client";
import { Container } from "@mui/material";

const MainCotainer = ({ children }) => {
  return <Container maxWidth="lg">{children}</Container>;
};

export default MainCotainer;

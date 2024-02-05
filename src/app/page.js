"use client"


import Banner from "@/components/banner/banner";
import Chatbot from "@/components/chatbot/chatbot";
import DrawerAppBar from "@/components/shared/Navbar/Navbar";

import Footer from "@/components/shared/footer/Footer";

import { Box, Container } from "@mui/material";


// import PostSection from "@/components/ui/PostSection/PostSection";

const HomePage = () => {
  return (
    <Box sx={{ maxWidth: "xl", mx: "auto" }} style={{ background: 'linear-gradient(to right, #FFFFFF, #87CEEB)'}}>
      <DrawerAppBar></DrawerAppBar>
      <Banner></Banner>
      <Chatbot></Chatbot>
      <Footer></Footer>
    </Box>
  );
};

export default HomePage;

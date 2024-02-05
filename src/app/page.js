"use client"


import Banner from "@/components/banner/banner";
import Chatbot from "@/components/chatbot/chatbot";
import DrawerAppBar from "@/components/shared/Navbar/Navbar";

import Footer from "@/components/shared/footer/Footer";
<<<<<<< HEAD
import Logo from "@/components/shared/logo/Logo";
import { Box, Container, Divider } from "@mui/material";
import Discuss from "./discussion/Discuss";
=======

import { Box, Container } from "@mui/material";
>>>>>>> 89cbd3f5e3e364511551da224db7197850f811a7


// import PostSection from "@/components/ui/PostSection/PostSection";

const HomePage = () => {
  return (
    <Box sx={{ maxWidth: "xl", mx: "auto" }} >
      <DrawerAppBar></DrawerAppBar>
      <Divider sx={{ backgroundColor: 'white',paddingTop:'45px' }} />
      <Banner></Banner>
<<<<<<< HEAD
      <Discuss></Discuss>
      {/* <Chatbot></Chatbot>
      <Review></Review>
      <All></All>
      <Count></Count>
      <Logo></Logo>
      <Footer></Footer> */}
=======
      <Chatbot></Chatbot>
      <Footer></Footer>
>>>>>>> 89cbd3f5e3e364511551da224db7197850f811a7
    </Box>
  );
};

export default HomePage;

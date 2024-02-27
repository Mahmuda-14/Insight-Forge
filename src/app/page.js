"use client"


import Banner from "@/components/banner/banner";
import Chatbot from "@/components/chatbot/chatbot";
import DrawerAppBar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
import { Box,  Divider } from "@mui/material";
import Discuss from "./discussion/Discuss";


const HomePage = () => {
  return (
    <Box sx={{ maxWidth: "xl", mx: "auto" }} >
      <h1>alkdjdl</h1>
      <DrawerAppBar></DrawerAppBar>
      <Divider sx={{ backgroundColor: 'white',paddingTop:'0px' }} />
      <Banner></Banner>
      <Chatbot></Chatbot>
      <Discuss></Discuss>
      {/* <Review></Review>
      <All></All>
      <Count></Count>
      <Logo></Logo> */}
      <Footer></Footer>
    </Box>
  );
};

export default HomePage;

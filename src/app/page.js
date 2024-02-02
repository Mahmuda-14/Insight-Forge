"use client"

import Review from "@/components/Review/Review";
import All from "@/components/Social/All";
import Banner from "@/components/banner/page";
import Chatbot from "@/components/chatbot/chatbot";
import DrawerAppBar from "@/components/shared/Navbar/Navbar";
import Count from "@/components/shared/count/Count";
import Footer from "@/components/shared/footer/Footer";
import Logo from "@/components/shared/logo/Logo";
import { Container } from "@mui/material";


// import PostSection from "@/components/ui/PostSection/PostSection";

const HomePage = () => {
  return (
    <Container maxWidth="xl">
      <DrawerAppBar></DrawerAppBar>
      <Banner></Banner>
      <Chatbot></Chatbot>
      <Review></Review>
      <All></All>
      <Count></Count>
      <Logo></Logo>
      <Footer></Footer>
    </Container>
  );
};

export default HomePage;

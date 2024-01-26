"use client"
import Review from "@/components/Review/Review";
import All from "@/components/Social/All";
import Banner from "@/components/banner/page";
import Chatbot from "@/components/chatbot/chatbot";

import Count from "@/components/shared/count/Count";
import Logo from "@/components/shared/logo/Logo";
import { Container } from "@mui/material";

// import PostSection from "@/components/ui/PostSection/PostSection";

const HomePage = () => {
  return (
    <Container maxWidth="xl">
      <Banner></Banner>
     <Chatbot></Chatbot>
      <Review></Review>
      <All></All>
      <Count></Count>
      <Logo></Logo>
    </Container>
  );
};

export default HomePage;

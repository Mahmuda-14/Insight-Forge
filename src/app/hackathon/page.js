"use client"
import Hackathonbanner from '@/components/hackathonbanner/hackathonbanner';
import Hackathonfaq from '@/components/hackathonfaq/hackathonfaq';
import DrawerAppBar from '@/components/shared/Navbar/Navbar';
import { Container } from '@mui/material';
import React from 'react';

const page = () => {

  return (

    <Container maxWidth="xl">
      <DrawerAppBar></DrawerAppBar>
      <Hackathonbanner></Hackathonbanner>
      <Hackathonfaq></Hackathonfaq>

    </Container>
  );
};

export default page;
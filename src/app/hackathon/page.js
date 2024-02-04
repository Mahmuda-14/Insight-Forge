"use client"
import Hackathonbanner from '@/components/hackathonbanner/hackathonbanner';
import Hackathonfaq from '@/components/hackathonfaq/hackathonfaq';
import DrawerAppBar from '@/components/shared/Navbar/Navbar';
import { Box } from '@mui/material';
import React from 'react';

const page = () => {

  return (

    <Box sx={{maxWidth:"xl", mx:"auto"}}>
      <DrawerAppBar></DrawerAppBar>
      <Hackathonbanner></Hackathonbanner>
      <Hackathonfaq></Hackathonfaq>

    </Box>
  );
};

export default page;
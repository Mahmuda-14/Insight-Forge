"use client"
import withAuth from '@/components/PrivateRoute/withAuth';
import Hackathonbanner from '@/components/hackathon/hackathonbanner/hackathonbanner';
import Hackathonfaq from '@/components/hackathon/hackathonfaq/hackathonfaq';
import DrawerAppBar from '@/components/shared/Navbar/Navbar';
import { Box } from '@mui/material';
import React from 'react';

const Hackathon = () => {

  return (

    <Box sx={{maxWidth:"xl", mx:"auto"}}>
      <DrawerAppBar></DrawerAppBar>
      <Hackathonbanner></Hackathonbanner>
      <Hackathonfaq></Hackathonfaq>

    </Box>
  );
};

export default withAuth(Hackathon);
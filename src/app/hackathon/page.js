"use client"
import withAuth from '@/components/PrivateRoute/withAuth';
import Hackathonbanner from '@/components/hackathon/hackathonbanner/hackathonbanner';
import Hackathoncards from '@/components/hackathon/hackathoncards/hackathoncards';
import Hackathonfaq from '@/components/hackathon/hackathonfaq/hackathonfaq';
import DrawerAppBar from '@/components/shared/Navbar/Navbar';
import Footer from '@/components/shared/footer/Footer';
import { Box } from '@mui/material';
import React from 'react';

const Hackathon = () => {

  return (

    <Box >
      <DrawerAppBar></DrawerAppBar>
      <Hackathonbanner></Hackathonbanner>
      <Hackathonfaq></Hackathonfaq>
      <Hackathoncards></Hackathoncards>
      <Footer></Footer>
    </Box>
  );
};

// export default withAuth(Hackathon);
export default Hackathon;
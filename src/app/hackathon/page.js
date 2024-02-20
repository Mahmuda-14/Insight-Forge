"use client"
import withAuth from '@/components/PrivateRoute/withAuth';
import Hackathonbanner from '@/components/hackathon/hackathonbanner/hackathonbanner';
import Hackathoncards from '@/components/hackathon/hackathoncards/hackathoncards';
import Hackathonfaq from '@/components/hackathon/hackathonfaq/hackathonfaq';
import DrawerAppBar from '@/components/shared/Navbar/Navbar';
import { Box } from '@mui/material';
import React from 'react';

const Hackathon = () => {

  return (

    <Box sx={{maxWidth:"xl"}} >
      <DrawerAppBar></DrawerAppBar>
      <Hackathonbanner></Hackathonbanner>
      <Hackathonfaq></Hackathonfaq>
      <Hackathoncards></Hackathoncards>

    </Box>
  );
};

// export default withAuth(Hackathon);
export default Hackathon;
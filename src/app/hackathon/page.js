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

    <div className='w-[450px] md:w-[600px] lg:w-[1200px] mx-auto'>
      <DrawerAppBar></DrawerAppBar>
      <Hackathonbanner></Hackathonbanner>
      <Hackathonfaq></Hackathonfaq>
      <Hackathoncards></Hackathoncards>

    </div>
  );
};

// export default withAuth(Hackathon);
export default Hackathon;
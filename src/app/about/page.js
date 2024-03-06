"use client"

import React from 'react';
import Logo from './Logo';
import Review from './Review';
import Count from './Count';
import VideoPlayer2 from './VideoPlayer2';
import DrawerAppBar from '@/components/shared/Navbar/Navbar';
import Footer from '@/components/shared/footer/Footer';
import Member from './Member';





const page = () => {
    return (
        <div>
            <DrawerAppBar></DrawerAppBar>
            <VideoPlayer2></VideoPlayer2>
            <Review></Review>
            {/* <All></All> */}
            <Member></Member>
            <Count></Count> 
            <Logo></Logo>
            <Footer></Footer>

        </div>
    );
};

export default page;
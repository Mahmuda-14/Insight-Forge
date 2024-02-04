/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import useAuth from '@/app/hooks/useAuth';
import useAxiosSecure from '@/app/hooks/useAxiosSecure';
import { Backdrop, Box, Button, Container, Fade, InputLabel, MenuItem, Modal, Select, TextField, Typography } from '@mui/material';
import Link from 'next/link';

import React from 'react';
import toast from 'react-hot-toast';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor:'#C5FFF8',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Banner = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const divBackground = {
        backgroundImage: 'url(https://i.ibb.co/PrqMLQ4/banner.jpg)',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        minHeight: '600px',
        position: 'relative '
    }
    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, .3)',
    }
   

  
       
        return (
            <Box sx={{maxWidth:"xl", mx:"auto"}}>

                <div style={divBackground}>
                    {/* Overlay */}
                    <div style={overlayStyle}>
                        {/* Content Section */}
                        <div style={{ maxWidth: '600px', margin: 'auto', marginTop: '100px' }}>
                            <Typography variant='h3' style={{ textAlign: 'center', color: '#C5FFF8', fontWeight: 600 }}>Welcome to the World of Knowledge Sharing</Typography>
                            <Typography sx={{ textAlign: 'center', color: '#C5FFF8', mt: 5, fontWeight: 600 }} >Unlocking Wisdom, Empowering Minds: Explore a World of Knowledge with Insight Forge , Our Knowledge Share Platform. Join the Conversation, Ignite Learning, and Fuel Curiosity !</Typography>

                            <Box sx={{ textAlign: "center" }}> <Link href={"/discussion"}>
                            <button className='mt-10 px-5 py-3 rounded mx-auto text-black font-semibold bg-[#87CEEB]' >Go to Discuss </button>
                            </Link></Box>
                           

                        </div>
                    </div>
                </div>

            </Box>
        );
    };

    export default Banner;
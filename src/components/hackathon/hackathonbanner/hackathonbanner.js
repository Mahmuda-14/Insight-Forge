
import useAuth from '@/app/hooks/useAuth';
import useAxiosSecure from '@/app/hooks/useAxiosSecure';
import {  Box, Typography } from '@mui/material';

import React from 'react';


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

const Hackathonbanner = () => {

 
    const divBackground = {
        backgroundImage: 'url(https://i.ibb.co/pdqz4JS/hackathon-bg-2.jpg)',
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
                        <div style={{ maxWidth: '600px', margin: 'auto', marginTop: '150px' }}>
                            <Typography variant='h3' style={{ textAlign: 'center', color: 'white', fontWeight: 600 }}>HackSphere: Enter the Innovation Zone</Typography>
                            <Typography sx={{ textAlign: 'center', color: 'white', mt: 5, fontWeight: 600 }} >Virtual hackathons are collaborative coding events conducted entirely online, bringing together participants from around the globe to innovate, create, and solve challenges remotely. Through digital platforms and communication tools, participants collaborate, brainstorm, and develop projects, leveraging their diverse skills and expertise to tackle real-world problems in a dynamic and inclusive environment</Typography>

                           
                           
                           

                        </div>
                    </div>
                </div>

            </Box>
        );
    };

    export default Hackathonbanner;
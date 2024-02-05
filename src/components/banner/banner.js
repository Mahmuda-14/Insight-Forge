/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import useAuth from '@/app/hooks/useAuth';
import useAxiosSecure from '@/app/hooks/useAxiosSecure';
import { Backdrop, Box, Button, Container, Divider, Fade, InputLabel, MenuItem, Modal, Select, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import '../banner/banner.css'
import React from 'react';
import toast from 'react-hot-toast';
// import re from '../../../public/Image/1.jpg'
// import re1 from '../../assets/react.png'
import re2 from '../../assets/Insight Forge (3).png'
import re from '../../../public/Image/13.jpg'
// import re3 from '../../../public/Image/6.jpg'
import re3 from '../../../public/Image/3.jpg'
import re1 from '../../../public/Image/5.jpg'

import './banner.css'
import { TypeAnimation } from 'react-type-animation';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: '#C5FFF8',
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
        // backgroundImage: 'url(https://i.ibb.co/BgTPrSD/banner.jpg)',
        backgroundImage: 'url(https://i.ibb.co/64DZ1fh/banner.jpg)',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        minHeight: '600px',
        position: 'relative ',
        // backgroundColor:'#263238'
    }
    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        // backgroundColor: 'rgba(0, 0, 0, .3)',
    }




    return (
        <Box sx={{ maxWidth: "xl", mx: "auto" }}>


            <div style={divBackground}>
                <div className='grid grid-rows-3 ml-[150px] gap-5'>
                    <div className='w-[17rem] h-[11rem] mt-3 flex' >
                        <Image style={{ borderRadius: '10px'}} src={re}></Image>
                    </div>
                    <div className=' w-[17rem] h-[11rem] flex'>
                        <Image style={{ borderRadius: '10px' }} src={re1}></Image>
                      
                    </div>
                    <div className=' w-[17rem] h-[11rem] mb-3 flex'>
                        <Image style={{ borderRadius: '10px' }} src={re3}></Image>
                        
                    </div>
                </div>


                {/* Overlay */}
                <div style={overlayStyle}>
                    {/* Content Section */}
                    <div className='' style={{ marginLeft: '40rem' }}>
                        <div className='mt-7'>
                            <Image width={855} style={{ borderRadius: '50px', padding: '20px' }} src={re2}></Image>
                            <div className='-mt-[22rem] ml-[34px] mr-[169px]'>
                                <h2 style={{color:'#501715'}} className=' font-mono text-left text-3xl my-3 font-bold '>Welcome to the World of Knowledge Sharing </h2>
                                <div className='flex flex-row'>
                                    <Divider orientation='horizontal' style={{ backgroundColor: '#4c5d57', paddingLeft: '7px', paddingTop: '105px',marginLeft:'9px' }}></Divider>
                                    <p  className="mb-5 text-white  ml-7 mr-[182px]">
                                        <TypeAnimation
                                            sequence={[

                                                'Unlocking Wisdom, Empowering Minds: Explore a World of Knowledge with Insight Forge',
                                                1000,
                                               'Our Knowledge Share Platform.... ',
                                                1000,
                                                'Join the Conversation, Ignite Learning, and Fuel Curiosity !!!',
                                                1000,

                                            ]}
                                            wrapper="span"
                                            speed={50}
                                            style={{ fontSize: '1.5em', display: 'inline-block' }}
                                            repeat={Infinity}
                                        />
                                    </p>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </Box>
    );
};

export default Banner;
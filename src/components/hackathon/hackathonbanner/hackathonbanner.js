/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import useAuth from '@/app/hooks/useAuth';
import useAxiosSecure from '@/app/hooks/useAxiosSecure';
import { Backdrop, Box, Button, Container, Fade, InputLabel, MenuItem, Modal, Select, TextField, Typography } from '@mui/material';

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

const Hackathonbanner = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth();

    const handleRegister = (e) => {
        e.preventDefault()
        if (user && user?.email) {
            const from = e.target
            const teamName = from.teamName.value
            const phoneNumber = from.phoneNumber.value
            const category = from.category.value

            const registerInfo = {
                name: user?.displayName,
                email: user?.email,
                photo: user?.photoURL,
                teamName,
                phoneNumber,
                category,
            }
            axiosSecure.post('/register', registerInfo)
                .then(res => {
                    console.log(res.data)
                    if (res.data.__v === 0) {
                        toast.success("You have been registered for Virtual Hackathon");
                    }
                })
        }
        else {
            toast.success("You are not Logged In!");
            router.push("/login");
        }
    }
       
        return (
            <Box sx={{maxWidth:"xl", mx:"auto"}}>

                <div style={divBackground}>
                    {/* Overlay */}
                    <div style={overlayStyle}>
                        {/* Content Section */}
                        <div style={{ maxWidth: '600px', margin: 'auto', marginTop: '100px' }}>
                            <Typography variant='h3' style={{ textAlign: 'center', color: '#C5FFF8', fontWeight: 600 }}>HackSphere: Enter the Innovation Zone</Typography>
                            <Typography sx={{ textAlign: 'center', color: '#C5FFF8', mt: 5, fontWeight: 600 }} >Virtual hackathons are collaborative coding events conducted entirely online, bringing together participants from around the globe to innovate, create, and solve challenges remotely. Through digital platforms and communication tools, participants collaborate, brainstorm, and develop projects, leveraging their diverse skills and expertise to tackle real-world problems in a dynamic and inclusive environment</Typography>

                            <Box sx={{ textAlign: "center" }}> <button className='mt-10 px-5 py-3 rounded mx-auto text-black font-semibold bg-[#87CEEB]' onClick={handleOpen}>Register For Hackathon</button></Box>
                            <Modal
                                aria-labelledby="transition-modal-title"
                                aria-describedby="transition-modal-description"
                                open={open}
                                onClose={handleClose}
                                closeAfterTransition
                                slots={{ backdrop: Backdrop }}
                                slotProps={{
                                    backdrop: {
                                        timeout: 500,
                                    },
                                }}
                                
                            >
                                <Fade in={open}>
                                    <Box sx={style}>
                                        <form onSubmit={handleRegister} className='from'>
                                            <InputLabel id="demo-select-small-label">Team Name</InputLabel>
                                            <TextField name='teamName'
                                                required
                                                className='input'
                                                id="outlined-multiline-flexible"
                                                label="Team Name"
                                                multiline
                                                sx={{width:'100%', my:1}}
                                               
                                            />
                                            <InputLabel id="demo-select-small-label">Phone Number</InputLabel>
                                            <TextField name='phoneNumber'
                                                required
                                                className='input'
                                                id="outlined-multiline-static"
                                                label="Phone Number"
                                                multiline
                                                sx={{width:'100%', my:1}}
                                            />
                                            <InputLabel id="demo-select-small-label">Category</InputLabel>
                                            <Select className='input' name='category'
                                                required
                                                labelId="demo-simple-select-autowidth-label"
                                                id="demo-simple-select-autowidth"
                                                autoWidth
                                                label="Category"
                                                sx={{width:'100%', my:1}}
                                               
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={`Web Development`}>Web Development</MenuItem>
                                                <MenuItem value={`Problem Solving`}>Problem Solving</MenuItem>

                                            </Select>


                                            <Box sx={{ textAlign: "center", mt:3, background:"#87CEEB", py:1, borderRadius:'5px' }}><button type='submit' className="qusPost" variant="outlined">Register</button></Box>
                                        </form>
                                    </Box>
                                </Fade>
                            </Modal>

                        </div>
                    </div>
                </div>

            </Box>
        );
    };

    export default Hackathonbanner;
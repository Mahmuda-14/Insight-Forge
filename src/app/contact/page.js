"use client"

import { Box, Button, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";
import Lottie from "lottie-react";
import ContactUsAnimation from "../../assets/ContactUsAnimation.json"
import DrawerAppBar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";


export default function Contact() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const message = {
            email_id: data.get('email_id'),
            from_name: data.get('from_name'),
            message: data.get('multiline')
        };
        const serviceId = 'service_b7wimzl';
        const templateId = 'template_l88o8wo'
        emailjs.send(serviceId, templateId, message, 'RYCHj-C3nN_Thw4a0')
            .then((result) => {
                if (result.text) {
                    toast.success("Your message has been sent")
                }
            }, (error) => {
                toast.error("Something was wrong")
            });
    };

    return (

        <Box sx={{ maxWidth: "xl", mx: "auto" }} style={{  padding: '10px' }}>
            <DrawerAppBar></DrawerAppBar>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    maxWidth: "xl",
                    justifyContent: "center",
                    mx: "auto"
                }}
            >

               
                <Grid spacing={5} container sx={{ justifyContent: "center", alignItems: "center" }}>
                    <Grid item xs={12} md={6}>
                        <Lottie animationData={ContactUsAnimation}></Lottie>
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <Typography variant="h4" sx={{ px: '12px', py: '5px', color: '#4f675b', fontWeight: 600, textAlign:"center" }}>Contact us</Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="from_name"
                                label="Name"
                                type="text"
                                id="from_name"
                                sx={{ backgroundColor: "white" }}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email_id"
                                label="Email Address"
                                name="email_id"
                                autoComplete="email"
                                autoFocus
                                sx={{ backgroundColor: "white" }}
                            />

                            <TextField
                                id="outlined-multiline-flexible"
                                label="Write Your Message Here"
                                name="multiline"
                                required
                                fullWidth
                                multiline
                                maxRows={4}
                                sx={{ backgroundColor: "white" }}
                            />


                            <button

                                className='font-semibold w-full py-2 rounded mt-3 mb-2 bg-[#4f675b] text-white'
                            >
                                Send Us
                            </button>

                        </Box>
                    </Grid>

                </Grid>
            </Box>
            <Footer></Footer>
        </Box>

    );
}
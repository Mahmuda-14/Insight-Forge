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
                console.log(error.text);
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
                    maxWidth: "md",
                    justifyContent: "center",
                    mx: "auto"
                }}
            >

                <Paper elevation={10} sx={{ width: '210px', mx: 'auto', my: 4, background: '#87CEEB' }}><Typography variant="h4" sx={{ px: '12px', py: '5px', color: 'black', fontWeight: 600 }}>Contact us</Typography></Paper>
                <Grid spacing={5} container sx={{ justifyContent: "center", alignItems: "center" }}>
                    <Grid item xs={12} md={6}>
                        <Lottie animationData={ContactUsAnimation}></Lottie>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="from_name"
                                label="Name"
                                type="text"
                                id="from_name"
                                sx={{ backgroundColor: "#C5FFF8" }}
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
                                sx={{ backgroundColor: "#C5FFF8" }}
                            />

                            <TextField
                                id="outlined-multiline-flexible"
                                label="Write Your Message Here"
                                name="multiline"
                                required
                                fullWidth
                                multiline
                                maxRows={4}
                                sx={{ backgroundColor: "#C5FFF8" }}
                            />


                            <button

                                className='font-semibold w-full py-2 rounded mt-3 mb-2 bg-[#C5FFF8] text-black'
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
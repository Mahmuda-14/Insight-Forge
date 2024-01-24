"use client"

import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material";
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";



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
                if(result.text){
                    toast.success("Your message has been sent")
                }
            }, (error) => {
                console.log(error.text);
            });
    };

    return (

        <Container component="main" maxWidth="xs">

            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >

                <Paper elevation={10} sx={{ width: '210px', mx: 'auto', my: 4, background: '#E7BCDE' }}><Typography variant="h4" sx={{ px: '12px', py: '5px', color: '#0766AD' }}>Contact Me</Typography></Paper>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="from_name"
                        label="Name"
                        type="text"
                        id="from_name"

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
                    />

                    <TextField
                        id="outlined-multiline-flexible"
                        label="Write Your Message Here"
                        name="multiline"
                        required
                        fullWidth
                        multiline
                        maxRows={4}
                    />


                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Send Me
                    </Button>

                </Box>
            </Box>

        </Container>

    );
}
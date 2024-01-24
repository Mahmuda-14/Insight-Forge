"use client"
import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import chatbotAnimation from "../../assets/chatbotanimation.json"
import Lottie from 'lottie-react';

const Chatbot = () => {
    return (
        <Container maxWidth="lg" sx={{mx:"auto"}}>
            <Typography></Typography>
            <Grid container sx={{my:10}}>
                <Grid item xs={6}>
                    <iframe width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/a67fc70f-0cca-45f7-9000-45b34f18781e"></iframe>
                </Grid>
                <Grid item xs={6}>
                    <Lottie animationData={chatbotAnimation}></Lottie>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Chatbot;
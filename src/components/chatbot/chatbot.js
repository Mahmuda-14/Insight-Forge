"use client"
import { Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import chatbotAnimation from "../../assets/chatbotanimation.json"
import Lottie from 'lottie-react';

const Chatbot = () => {
    return (
        <Container maxWidth="xl" sx={{mx:"auto", px:10}}>
           <Paper elevation={10} sx={{ maxWidth: '400px', mx: 'auto', my: 8, background: '#F9C5D5', py:2, px:1 }}><Typography variant="h4" sx={{ px: '12px', py: '5px', color: '#B2533E', fontWeight:600 }}>Insight Forge Chatbot</Typography></Paper>
           <Typography sx={{ textAlign: 'center', color: '#B2533E', mt: 5, maxWidth:"800px", mx:"auto" }} >Before jump into the discussion section we are requesting you to use our chatbot, insightBot. Here You will get some idea about some basic technology for web development sector. You just need to ask - what is html. It will give you the basic answer of html. You also will find answer for css, javascript, react, next js, node js, mongodb, mongoose, express js,SQL database, angular, vue js, Django, flask, Ruby on Rails, PostgreSQL, Restful apis, version control, docker, kubernetes, apache, nginx, npm, webpack, babel.  </Typography>
            <Grid container sx={{my:10}}>
                <Grid item xs={12} md={12} lg={6}>
                    <iframe width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/a67fc70f-0cca-45f7-9000-45b34f18781e"></iframe>
                </Grid>
                <Grid item xs={12} md={12} lg={6}>
                    <Lottie animationData={chatbotAnimation}></Lottie>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Chatbot;
"use client"
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FAQAnimation from '../../../assets/FaqAnimation.json'
import Lottie from 'lottie-react';
import { Box, Grid, Typography } from '@mui/material';


export default function Hackathonfaq() {
    return (
        <Box sx={{maxWidth:"xl", mx:"auto"}}>
            <div style={{  padding:'10px' }}>
                <Typography variant="h4" sx={{ px: '12px', py: '20px', color: 'black', mt:'40px', fontWeight: 500, textAlign:"center" }}>FAQ for <span className='text-[#4f675b] font-bold'>Hackathon</span></Typography>
                <Grid container spacing={3} sx={{ justifyContent: "center", alignItems: "center", px:5 }}>
                    <Grid item xs={12} md={6} lg={6}>
                        <Lottie animationData={FAQAnimation}></Lottie>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{color:"white"}}/>}
                                aria-controls="panel1-content"
                                id="panel1-header"
                                sx={{fontWeight:600, backgroundColor:"#4f675b", color:"white"}}
                            >
                                What is a virtual hackathon?

                            </AccordionSummary>
                            <AccordionDetails>
                            A virtual hackathon is an event where individuals or teams collaborate remotely to work on innovative projects or solutions within a defined timeframe. Participants typically use online communication tools and platforms to collaborate and present their projects virtually.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{color:"white"}}/>}
                                aria-controls="panel2-content"
                                id="panel2-header"
                                sx={{fontWeight:600, backgroundColor:"#4f675b", color:"white"}}
                            >
                               How do I participate in a virtual hackathon?
                            </AccordionSummary>
                            <AccordionDetails>
                            To participate in a virtual hackathon, you usually need to register on the event website or platform hosting the hackathon. Once registered, you will receive information about the theme, rules, schedule, and any necessary resources. During the event, you collaborate with your team remotely, leveraging online tools and communication channels provided by the organizers.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{color:"white"}}/>}
                                aria-controls="panel2-content"
                                id="panel2-header"
                                sx={{fontWeight:600, backgroundColor:"#4f675b", color:"white"}}
                            >
                                What are the benefits of participating in a virtual hackathon?
                            </AccordionSummary>
                            <AccordionDetails>
                            Participating in a virtual hackathon offers several benefits, including the opportunity to collaborate with diverse individuals or teams from around the world, sharpen your problem-solving and technical skills, network with professionals and potential employers, and gain experience working on real-world projects within a limited timeframe.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{color:"white"}}/>}
                                aria-controls="panel2-content"
                                id="panel2-header"
                                sx={{fontWeight:600, backgroundColor:"#4f675b", color:"white"}}
                            >
                               Do I need to be a programmer to join a virtual hackathon?
                            </AccordionSummary>
                            <AccordionDetails>
                            While programming skills are valuable in many virtual hackathons, they are not always mandatory. Hackathons often welcome participants with a wide range of skills, including designers, project managers, marketers, and domain experts. Teams usually benefit from diverse skill sets and perspectives when working on projects.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{color:"white"}}/>}
                                aria-controls="panel2-content"
                                id="panel2-header"
                                sx={{fontWeight:600, backgroundColor:"#4f675b", color:"white"}}
                            >
                               How are virtual hackathons judged?
                            </AccordionSummary>
                            <AccordionDetails>
                            Virtual hackathons are typically judged by a panel of experts who evaluate projects based on predefined criteria such as innovation, technical complexity, usability, impact, and presentation quality. Judges may also consider factors like teamwork, creativity, and adherence to the hackathon theme or challenge.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{color:"white"}}/>}
                                aria-controls="panel2-content"
                                id="panel2-header"
                                sx={{fontWeight:600, backgroundColor:"#4f675b", color:"white"}}
                            >
                               What happens after a virtual hackathon ends?
                            </AccordionSummary>
                            <AccordionDetails>
                            After a virtual hackathon concludes, teams often present their projects to judges and other participants. Winners may be announced and awarded prizes or recognition. Depending on the hackathon, successful projects might receive further support for development, funding opportunities, or mentorship to help take the project to the next level.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{color:"white"}}/>}
                                aria-controls="panel2-content"
                                id="panel2-header"
                                sx={{fontWeight:600, backgroundColor:"#4f675b", color:"white"}}
                            >
                               How can I find virtual hackathons to participate in?
                            </AccordionSummary>
                            <AccordionDetails>
                            You can find virtual hackathons to participate in through various online platforms, social media groups, and hackathon directories. Websites like Devpost, HackerEarth, and Major League Hacking (MLH) often list upcoming hackathons. Additionally, universities, companies, and organizations may host virtual hackathons and promote them through their networks and websites.
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                </Grid>

            </div>
        </Box>
    );
}
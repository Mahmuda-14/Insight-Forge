
'use client'
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container, Typography } from '@mui/material';

const Banner = () => {
      const divBackground = {
            backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.10), rgb(0, 0, 0, 0.1)), url(https://i.ibb.co/hRs2r4S/slider3-1.jpg)',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            minHeight: '600px',
            position: 'relative'
      }
      {/* Overlay */ }
      const overlayStyle = {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
      }

      //       const handleSearch = (e) => {
      //             e.preventDefault();
      //             const searchText = e.target.searchText.value;
      //             console.log(searchText);

      // }

      return (
            <Container maxWidth="xl">
                  <div style={divBackground}>
                        {/* Overlay */}
                        <div style={overlayStyle}>

                              {/* Content Section */}
                              <div style={{ maxWidth: '600px', margin: 'auto', marginTop: '150px' }}>
                                    <Typography variant='h3' style={{ textAlign: 'center', color: '#F9C5D5', fontWeight: 600 }}>Welcome to the World of Knowledge Sharing</Typography>
                                    <Typography sx={{ textAlign: 'center', color: '#F9C5D5', mt: 5 }} >Unlocking Wisdom, Empowering Minds: Explore a World of Knowledge with Insight Forge , Our Knowledge Share Platform. Join the Conversation, Ignite Learning, and Fuel Curiosity !</Typography>

                                    <Box sx={{ textAlign: "center" }}> <Button sx={{ background: "#B2533E", mt: 5, px: 3, py: 2, mx: "auto" }} href='/discussion' >Explore Discussion</Button></Box>


                                    {/* Search Box
                              <form onSubmit={handleSearch} style={{ display: 'flex', gap: '4px' }}>
                                    <Box
                                          sx={{
                                                width: 500,
                                                maxWidth: '100%',
                                                backgroundColor: 'white',
                                                outline: 'none',
                                                border: 'none'
                                          }}
                                    >
                                          <TextField fullWidth name='searchText' placeholder='Search here' id="fullWidth" />
                                    </Box>
                                    <Button style={{ backgroundColor: '#1976D2' }} type='submit' variant="contained" color="success">
                                          Search
                                    </Button>

                              </form> */}
                              </div>

                        </div>
                  </div>
            </Container>
      );
};

export default Banner;


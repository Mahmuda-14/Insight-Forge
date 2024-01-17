
'use client'
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Banner = () => {
      const divBackground={backgroundImage: 'url(https://i.ibb.co/hRs2r4S/slider3-1.jpg)',
      backgroundSize: 'cover',
       minHeight: '480px',
       position: 'relative'
      }
        {/* Overlay */}
      const overlayStyle={
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
      }

      const handleSearch=(e)=>{
            e.preventDefault();
            const searchText = e.target.searchText.value;
            console.log(searchText);

      }

      return (
      <div style={divBackground}>
                  {/* Overlay */}
            <div style={overlayStyle}>

                  {/* Content Section */}
                  <div style={{maxWidth:'600px', margin:'auto',marginTop:'150px'}}>
                  <h1 style={{textAlign:'center', color:'white'}}>HAVE A QUESTION?</h1>
                  <p style={{textAlign:'center', color:'white'}} >If you have any question you can ask below or enter what you are looking for!</p>

                    {/* Search Box */}
                  <form onSubmit={handleSearch} style={{display:'flex', gap:'4px' }}>
                  <Box
                  sx={{
                  width: 500,
                  maxWidth: '100%',
                  backgroundColor:'white',
                  outline:'none',
                  border:'none'
                  }}
                  >
                  <TextField fullWidth name='searchText'  placeholder='Search here' id="fullWidth" />
                  </Box>
                  <Button style={{backgroundColor:'#1976D2'}} type='submit' variant="contained" color="success">
                  Search
                  </Button>
                  
                  </form>
                  </div>

          </div>      
      </div>
      );
};

export default Banner;


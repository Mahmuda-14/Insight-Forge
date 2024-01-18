
'use client'
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Banner = () => {
      const divBackground = {
<<<<<<< HEAD
            backgroundImage: 'linear-gradient(to right, rgba(19, 19, 19, 0.8), rgb(0, 0, 0, 0.1)),url(https://i.ibb.co/hRs2r4S/slider3-1.jpg)',
=======
            backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.50), rgb(0, 0, 0, 0.50)), url(https://i.ibb.co/hRs2r4S/slider3-1.jpg)',
>>>>>>> 092f66b8901bb93b335c4c8abf342894dea9e06d
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            minHeight: '480px',
            position: 'relative'
<<<<<<< HEAD
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

const handleSearch = (e) => {
      e.preventDefault();
      const searchText = e.target.searchText.value;
      console.log(searchText);
=======
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

      const handleSearch = (e) => {
            e.preventDefault();
            const searchText = e.target.searchText.value;
            console.log(searchText);
>>>>>>> 092f66b8901bb93b335c4c8abf342894dea9e06d

}

<<<<<<< HEAD
return (
      <div style={divBackground}>
            {/* Overlay */}
            <div style={overlayStyle}>

                  {/* Content Section */}
                  <div style={{ maxWidth: '600px', margin: 'auto', marginTop: '150px' }}>
                        <h1 style={{ textAlign: 'center', color: 'white' }}>HAVE A QUESTION?</h1>
                        <p style={{ textAlign: 'center', color: 'white' }} >If you have any question you can ask below or enter what you are looking for!</p>

                        {/* Search Box */}
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

                        </form>
                  </div>

            </div>
      </div>
);
=======
      return (
            <div style={divBackground}>
                  {/* Overlay */}
                  <div style={overlayStyle}>

                        {/* Content Section */}
                        <div style={{ maxWidth: '600px', margin: 'auto', marginTop: '150px' }}>
                              <h1 style={{ textAlign: 'center', color: 'white' }}>HAVE A QUESTION?</h1>
                              <p style={{ textAlign: 'center', color: 'white' }} >If you have any question you can ask below or enter what you are looking for!</p>

                              {/* Search Box */}
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

                              </form>
                        </div>

                  </div>
            </div>
      );
>>>>>>> 092f66b8901bb93b335c4c8abf342894dea9e06d
};

export default Banner;


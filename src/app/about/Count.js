import Image from 'next/image';
import Typography from '@mui/material/Typography';
import { Grid, Paper } from '@mui/material';
import React from 'react';
import './Count.css'


const Count = () => {

  const footerStyle = {
    backgroundImage: 'url("https://i.ibb.co/0hMFwqH/paul-volkmer-f-X-q-Ws-Xl5x8-unsplash.jpg")',
    backgroundImage: 'url("https://i.ibb.co/0hMFwqH/paul-volkmer-f-X-q-Ws-Xl5x8-unsplash.jpg")',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',

    height: '350px',

    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',

  };

  return (
    <div style={{ marginTop: '200px', marginBottom: '100px' }}>
      <div style={footerStyle}>
        <Grid container spacing={10} className='countContainer'>

          <Grid item >
            <div className='count'>
              <Image src="https://i.ibb.co/D7TFD1q/aa-removebg-preview.png" alt="cover" width={55} height={55} />
              <Typography variant="h4" sx={{ margin: '10px', color: '#ffffff' }}>126</Typography>
              <Typography variant="h6" sx={{ color: '#ffffff', fontSize: '15px' }}>Happy Client</Typography>
            </div>
          </Grid>


          <Grid item >
            <div className='count'>
              <Image src="https://i.ibb.co/jzsQGkB/a-removebg-preview-1.png" alt="cover" width={55} height={55} />
              <Typography variant="h4" sx={{ margin: '10px', color: '#ffffff' }}>109</Typography>
              <Typography variant="h6" sx={{ color: '#ffffff', fontSize: '15px' }}>Happy Client</Typography>
            </div>
          </Grid>

          <Grid item >
            <div className='count'>
              <Image src="https://i.ibb.co/23xfcBy/a-removebg-preview-3.png" alt="cover" width={55} height={55} />
              <Typography variant="h4" sx={{ margin: '10px', color: '#ffffff' }}>60</Typography>
              <Typography variant="h6" sx={{ color: '#ffffff', fontSize: '15px' }}>Happy Client</Typography>
            </div>
          </Grid>


          <Grid item >
            <div className='count'>
              <Image src="https://i.ibb.co/80jhCMm/a-removebg-preview-4.png" alt="cover" width={55} height={55} />
              <Typography variant="h4" sx={{ margin: '10px', color: '#ffffff' }}>200</Typography>
              <Typography variant="h6" sx={{ color: '#ffffff', fontSize: '15px' }}>Happy Client</Typography>
            </div>
          </Grid>

        </Grid>

      </div>

    </div>
  );
};

export default Count;
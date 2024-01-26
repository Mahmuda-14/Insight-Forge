
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import { Grid, Paper } from '@mui/material';
import React from 'react';


const Count = () => {

  const footerStyle = {
    backgroundImage: 'url("https://i.ibb.co/8NTY8Pk/ok.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',


    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',

  };

  return (
    <div style={{ marginTop: '200px', marginBottom: '100px' }}>
      <div style={footerStyle}>
        <Paper elevation={10} sx={{ maxWidth: '280px', mx: 'auto', mb: 8,  background: "transparent", py: 2, px: 1 }}><Typography variant="h4" sx={{ px: '12px', py: '5px', color: '#F9C5D5',  mt: 5,fontWeight: 600}}>Our Customer </Typography></Paper>
        <Grid container spacing={1} sx={{ mx: "auto" }}>

          <Grid item xs={12} sm={6} md={3}>
            <div style={{ display: 'flex', padding: '40px', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <Image src="https://i.ibb.co/D7TFD1q/aa-removebg-preview.png" alt="cover" width={55} height={55} />
              <Typography variant="h4" sx={{ margin: '10px', color: '#ffffff' }}>126</Typography>
              <Typography variant="h6" sx={{ color: '#ffffff', fontSize: '15px' }}>Happy Client</Typography>
            </div>
          </Grid>


          <Grid item xs={12} sm={6} md={3}>
            <div style={{ display: 'flex', padding: '40px', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <Image src="https://i.ibb.co/jzsQGkB/a-removebg-preview-1.png" alt="cover" width={55} height={55} />
              <Typography variant="h4" sx={{ margin: '10px', color: '#ffffff' }}>109</Typography>
              <Typography variant="h6" sx={{ color: '#ffffff', fontSize: '15px' }}>Happy Client</Typography>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <div style={{ display: 'flex', padding: '40px', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <Image src="https://i.ibb.co/23xfcBy/a-removebg-preview-3.png" alt="cover" width={55} height={55} />
              <Typography variant="h4" sx={{ margin: '10px', color: '#ffffff' }}>60</Typography>
              <Typography variant="h6" sx={{ color: '#ffffff', fontSize: '15px' }}>Happy Client</Typography>
            </div>
          </Grid>


          <Grid item xs={12} sm={6} md={3}>
            <div style={{ display: 'flex', padding: '40px', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
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

import Image from 'next/image';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import React from 'react';


const Count = () => {
  
    const footerStyle = {
       backgroundImage: 'url("https://i.ibb.co/8NTY8Pk/ok.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
     
        height: '400px',
        width: '100%', 
        marginLeft: 'auto',
        marginRight: 'auto',
       
      };

    return (
       <div style={{ marginLeft:'250px',marginRight:'250px' , marginTop:'200px' ,marginBottom:'100px' }}>
         <div style={footerStyle }>
         <Grid container spacing={15} style={{ marginLeft: '50px'}}>

        <Grid item>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Image src="https://i.ibb.co/D7TFD1q/aa-removebg-preview.png" alt="cover" width={50} height={50} />
            <Typography variant="h4" sx={{ margin: '10px', color: '#ffffff' }}>126</Typography>
            <Typography variant="h6" sx={{ color: '#ffffff', fontSize: '15px' }}>Happy Client</Typography>
          </div>
        </Grid>


        <Grid item >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Image src="https://i.ibb.co/jzsQGkB/a-removebg-preview-1.png" alt="cover" width={45} height={45} />
            <Typography variant="h4" sx={{ margin: '10px', color: '#ffffff' }}>109</Typography>
            <Typography variant="h6" sx={{ color: '#ffffff', fontSize: '15px' }}>Happy Client</Typography>
          </div>
        </Grid>

        <Grid item>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Image src="https://i.ibb.co/23xfcBy/a-removebg-preview-3.png" alt="cover" width={60} height={60} />
            <Typography variant="h4" sx={{ margin: '10px', color: '#ffffff' }}>60</Typography>
            <Typography variant="h6" sx={{ color: '#ffffff', fontSize: '15px' }}>Happy Client</Typography>
          </div>
        </Grid>


        <Grid item >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
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
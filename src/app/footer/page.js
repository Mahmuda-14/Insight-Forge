import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Grid, IconButton } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Image from 'next/image'; 
import Link from 'next/link';
import Divider from '@mui/material/Divider';


const FooterPage = () => {
  const footerStyle = {
    backgroundImage: 'url("https://i.ibb.co/JtjnqGC/Colorful-Playful-School-Class-Zoom-Virtual-Background.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '700px',
    
  };

  const logoStyle = {
    width: '100px',
   paddingTop:'50px'

  };

  return (
    <footer style={footerStyle}>
      <Container>
      
        <div style={{ textAlign: 'center', margin: '20px' }}>
          <Image src="https://i.ibb.co/V92F63N/g-removebg-preview.png" alt="Logo" width={100} height={100} style={logoStyle} />
          <p style={{ margin: '10px', color: '#ffffff' ,fontSize:'15px'}}>Explore a wealth of curated knowledge on Insight Forge, where expertise meets curiosity. <br/>
                                                                          Our platform is dedicated to providing insightful content tailored to elevate your <br/>
                                                                          understanding and ignite your passion for learning.</p>
        </div>

   
        <Grid container spacing={9}>
          <Grid item>
            <Typography variant="h4" sx={{ margin: '10px', color: '#ffffff' ,marginTop:'70px'}}>
              Our Location
            </Typography>

            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', color: '#ffffff', fontSize: '15px' }}>
            <Image
              src="https://i.ibb.co/dbBYfrG/k-removebg-preview-1.png"  
              alt="Company Logo"
              width={40}  
              height={40}  
              style={{ marginBottom: '10px' }}  
            />
              Chittagong
            </Typography>

            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', color: '#ffffff', fontSize: '15px' }}>
            <Image
              src="https://i.ibb.co/6gq3mGB/kk-removebg-preview-1.png"  
              alt="Company Logo"
              width={35}  
              height={35}  
              style={{ marginBottom: '10px' }}  
            />
              you@gmail.com
            </Typography>
            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', color: '#ffffff', fontSize: '15px' }}>
            <Image
               src="https://i.ibb.co/pRkV9h5/kkk-removebg-preview.png"  
              alt="Company Logo"
              width={35}  
              height={35}  
              style={{ marginBottom: '10px' }}  
            />
              +880 01234567890
            </Typography>
          </Grid>

          <Grid item>
            <Typography variant="h4" sx={{ margin: '10px', color: '#ffffff' ,marginTop:'70px'}}>
              Our Service
            </Typography>
            <Link href="#">
            <Typography variant="h6" sx={{ margin: '10px', color: '#ffffff' ,fontSize:'15px' , marginTop:'30px' }}>
              Theme Development
            </Typography>
            </Link>
            <Link href="#">
            <Typography variant="h6" sx={{ margin: '10px', color: '#ffffff' ,fontSize:'15px', marginTop:'20px'}}>
              Web Designing
            </Typography>
            </Link>
            <Link href="#">
            <Typography variant="h6" sx={{ margin: '10px', color: '#ffffff' ,fontSize:'15px' , marginTop:'20px'}}> Web Development</Typography>
            </Link>
          </Grid>


          <Grid item>
            <Typography variant="h4" sx={{ margin: '10px', color: '#ffffff' ,marginTop:'70px'}}>
            What we Provided
            </Typography>
            <Link href="#">
            <Typography variant="h6" sx={{ margin: '10px', color: '#ffffff' ,fontSize:'15px' , marginTop:'30px' }}>
              Theme Development
            </Typography>
            </Link>
            <Link href="#">
            <Typography variant="h6" sx={{ margin: '10px', color: '#ffffff' ,fontSize:'15px', marginTop:'20px'}}>
              Web Designing
            </Typography>
            </Link>
            <Link href="#">
            <Typography variant="h6" sx={{ margin: '10px', color: '#ffffff' ,fontSize:'15px' , marginTop:'20px'}}> Web Development</Typography>
            </Link>
            
          </Grid>


          <Grid item>
            <Typography variant="h4" sx={{ margin: '10px', color: '#ffffff' ,marginTop:'70px'}}>
            Site Links
            </Typography>

            <Typography variant="h6" sx={{ margin: '5px', color: '#ffffff' ,fontSize:'15px'}}>
            <IconButton href="https://www.youtube.com/your-youtube-channel" target="_blank">
              <YouTubeIcon sx={{ fontSize: 30, color: '#ffffff' }} />
              <Typography variant="h6" sx={{ margin: '5px', color: '#ffffff' ,fontSize:'15px'}}>
              Your YouTube Link
            </Typography>
            </IconButton>
            </Typography>

            <Typography variant="h6" sx={{ margin: '5px', color: '#ffffff' ,fontSize:'15px'}}>
            <IconButton href="https://www.facebook.com/your-facebook-page" target="_blank">
              <FacebookIcon sx={{ fontSize: 30, color: '#ffffff' }} />
              <Typography variant="h6" sx={{ margin: '5px', color: '#ffffff' ,fontSize:'15px'}}>
              Your facebook Link
            </Typography>
            </IconButton>
            </Typography>

            <Typography variant="h6" sx={{ margin: '5px', color: '#ffffff' ,fontSize:'15px'}}>
            <IconButton href="https://www.instagram.com/your-instagram-account" target="_blank">
              <InstagramIcon sx={{ fontSize: 30, color: '#ffffff' }} />
              <Typography variant="h6" sx={{ margin: '5px', color: '#ffffff' ,fontSize:'15px'}}>
              Your Instragram Link
            </Typography>
            </IconButton>
            </Typography>

          </Grid>
        </Grid>
        <Divider sx={{ backgroundColor: '#ffffff',  marginTop: '110px' }} />
        <Grid item xs={12} sx={{ textAlign: 'center', marginTop: '10px' }}>
            <Typography variant="body2" sx={{ color: '#ffffff' }}>
              &copy; 2024 Insight Forge. All rights reserved.
            </Typography>
        </Grid>
      </Container>
    </footer>
  );
};

export default FooterPage;

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


const Footer = () => {

  // https://i.ibb.co/JtjnqGC/Colorful-Playful-School-Class-Zoom-Virtual-Background.png
 

  return (
    <Container  >
    <footer style={{
      // backgroundImage: 'url("https://i.ibb.co/8cF21XP/Green-Watercolour-Opening-Soon-Banner-1.png")',
      backgroundColor:'#00897B',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
   
    
    }}>
      
      {/* https://i.ibb.co/V92F63N/g-removebg-preview.png */}
        <div  style={{ textAlign: 'center', margin: '10px' }}>
          <Image src="https://i.ibb.co/99f5L5P/Untitled-design-removebg-preview.png" alt="Logo" width={150} height={150} style={{
    width: '100px',
    paddingTop: '50px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  }}/>
          <p style={{ margin: '5px', color:'#ffffff', fontSize: '15px' }}>Explore a wealth of curated knowledge on Insight Forge, where expertise meets curiosity. <br />
            Our platform is dedicated to providing insightful content tailored to elevate your <br />
            understanding and ignite your passion for learning.</p>
        </div>


        <Grid container spacing={12} sx={{ mx: "auto" }}>
          <Grid item>
            <Typography variant="h4" sx={{ margin: '5px', color:'#ffffff', marginTop: '40px' }}>
              Our Location
            </Typography>

            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', color:'#ffffff', fontSize: '15px' }}>
              <Image
                src="https://i.ibb.co/dbBYfrG/k-removebg-preview-1.png"
                alt="Company Logo"
                width={25}
                height={25}
                style={{ marginBottom: '5px' }}
              />
              Chittagong
            </Typography>

            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', color:'#ffffff', fontSize: '15px' }}>
              <Image
                src="https://i.ibb.co/6gq3mGB/kk-removebg-preview-1.png"
                alt="Company Logo"
                width={25}
                height={25}
                style={{ marginBottom: '5px' }}
              />
              insightforge@gmail.com
            </Typography>
            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center',color:'#ffffff', fontSize: '15px' }}>
              <Image
                src="https://i.ibb.co/pRkV9h5/kkk-removebg-preview.png"
                alt="Company Logo"
                width={25}
                height={25}
                style={{ marginBottom: '5px' }}
              />
              +880 01234567890
            </Typography>
          </Grid>

          <Grid item>
            <Typography variant="h4" sx={{ margin: '5px', color: '#ffffff', marginTop: '40px' }}>
              What we Provided
            </Typography>
            <Link href="#">
              <Typography variant="h6" sx={{ margin: '10px', color: '#ffffff', fontSize: '15px', marginTop: '15px' }}>
                Theme Development
              </Typography>
            </Link>
            <Link href="#">
              <Typography variant="h6" sx={{ margin: '10px', color: '#ffffff', fontSize: '15px', marginTop: '15px' }}>
                Web Designing
              </Typography>
            </Link>
            <Link href="#">
              <Typography variant="h6" sx={{ margin: '10px', color: '#ffffff', fontSize: '15px', marginTop: '15px' }}> Web Development</Typography>
            </Link>

          </Grid>

          <Grid item>
            <Typography variant="h4" sx={{ margin: '5px', color: '#ffffff', marginTop: '40px' }}>
              Our Services
            </Typography>
            <Link href="#">
              <Typography variant="h6" sx={{ margin: '10px', color: '#ffffff', fontSize: '15px', marginTop: '15px' }}>
                Theme Development
              </Typography>
            </Link>
            <Link href="#">
              <Typography variant="h6" sx={{ margin: '10px', color: '#ffffff', fontSize: '15px', marginTop: '15px' }}>
                Web Designing
              </Typography>
            </Link>
            <Link href="#">
              <Typography variant="h6" sx={{ margin: '10px', color: '#ffffff', fontSize: '15px', marginTop: '15px' }}> Web Development</Typography>
            </Link>

          </Grid>

          <Grid item>
            <Typography variant="h4" sx={{ margin: '5px', color: '#ffffff', marginTop: '40px', textAlign: "center" }}>
              Site Links
            </Typography>

            <Typography variant="h6" sx={{ color: '#ffffff', fontSize: '15px' }}>
              <IconButton href="https://www.youtube.com/your-youtube-channel" target="_blank">
                <YouTubeIcon sx={{ fontSize: 20, color: '#ffffff' }} />
                <Typography variant="h6" sx={{ color: '#ffffff', fontSize: '15px' }}>
                  Your YouTube Link
                </Typography>
              </IconButton>
            </Typography>

            <Typography variant="h6" sx={{ color: '#ffffff', fontSize: '15px' }}>
              <IconButton href="https://www.facebook.com/your-facebook-page" target="_blank">
                <FacebookIcon sx={{ fontSize: 20, color: '#ffffff' }} />
                <Typography variant="h6" sx={{ margin: '5px', color: '#ffffff', fontSize: '15px' }}>
                  Your facebook Link
                </Typography>
              </IconButton>
            </Typography>

            <Typography variant="h6" sx={{ color: '#ffffff', fontSize: '15px' }}>
              <IconButton href="https://www.instagram.com/your-instagram-account" target="_blank">
                <InstagramIcon sx={{ fontSize: 20, color: '#ffffff' }} />
                <Typography variant="h6" sx={{ margin: '5px', color: '#ffffff', fontSize: '15px' }}>
                  Your Instragram Link
                </Typography>
              </IconButton>
            </Typography>

          </Grid>
        </Grid>
        <Divider sx={{ backgroundColor: '#ffffff', marginTop: '50px' }} />
        <Grid item xs={12} sx={{ textAlign: 'center', marginTop: '10px' }}>
          <Typography variant="body2" sx={{ color: '#ffffff' }}>
            &copy; 2024 Insight Forge. All rights reserved.
          </Typography>
        </Grid>
      
    </footer>
    </Container>
  );
};

export default Footer;

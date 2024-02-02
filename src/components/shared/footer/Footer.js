import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Grid, IconButton } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Image from 'next/image';
import Link from 'next/link';
import Divider from '@mui/material/Divider';
import QuizIcon from '@mui/icons-material/Quiz';


const Footer = () => {


  return (
    <Box sx={{ maxWidth: "xl", mx: "auto" }} >
      <footer style={{
        backgroundImage: 'url("https://i.ibb.co/8j1tcNW/footer-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '600px',
        position: 'relative ',
        padding: "10px"

      }}>


        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}>

          <p style={{ margin: '5px', color: 'white', fontSize: '20px', textAlign: "center", paddingTop: "10px", marginTop: "120px" }}>Explore a wealth of curated knowledge on Insight Forge, where expertise meets curiosity. <br />
            Our platform is dedicated to providing insightful content tailored to elevate your <br />
            understanding and ignite your passion for learning.</p>



          <Grid container spacing={12} sx={{ mx: "auto" }}>
            <Grid item>
              <Typography variant="h4" sx={{ margin: '5px', color: 'white', marginTop: '40px' }}>
                Our Location
              </Typography>

              <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', color: 'white', fontSize: '15px' }}>
                <Image
                  src="https://i.ibb.co/dbBYfrG/k-removebg-preview-1.png"
                  alt="Company Logo"
                  width={25}
                  height={25}
                  style={{ marginBottom: '5px' }}
                />
                Chittagong
              </Typography>

              <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', color: 'white', fontSize: '15px' }}>
                <Image
                  src="https://i.ibb.co/6gq3mGB/kk-removebg-preview-1.png"
                  alt="Company Logo"
                  width={25}
                  height={25}
                  style={{ marginBottom: '5px' }}
                />
                insightforge@gmail.com
              </Typography>
              <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', color: 'white', fontSize: '15px' }}>
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
              <Typography variant="h4" sx={{ margin: '5px', color: 'white', marginTop: '40px' }}>
                What we Provided
              </Typography>
              <Link href="#">
                <Typography variant="h6" sx={{ margin: '10px', color: 'white', fontSize: '15px', marginTop: '15px' }}>
                  Theme Development
                </Typography>
              </Link>
              <Link href="#">
                <Typography variant="h6" sx={{ margin: '10px', color: 'white', fontSize: '15px', marginTop: '15px' }}>
                  Web Designing
                </Typography>
              </Link>
              <Link href="#">
                <Typography variant="h6" sx={{ margin: '10px', color: 'white', fontSize: '15px', marginTop: '15px' }}> Web Development</Typography>
              </Link>

            </Grid>

            <Grid item>
              <Typography variant="h4" sx={{ margin: '5px', color: 'white', marginTop: '40px' }}>
                Our Services
              </Typography>
              <Link href="#">
                <Typography variant="h6" sx={{ margin: '10px', color: 'white', fontSize: '15px', marginTop: '15px' }}>
                  Theme Development
                </Typography>
              </Link>
              <Link href="#">
                <Typography variant="h6" sx={{ margin: '10px', color: 'white', fontSize: '15px', marginTop: '15px' }}>
                  Web Designing
                </Typography>
              </Link>
              <Link href="#">
                <Typography variant="h6" sx={{ margin: '10px', color: 'white', fontSize: '15px', marginTop: '15px' }}> Web Development</Typography>
              </Link>

            </Grid>

            <Grid item>
              <Typography variant="h4" sx={{ margin: '5px', color: 'white', marginTop: '40px', textAlign: "center" }}>
                Site Links
              </Typography>

              <Typography variant="h6" sx={{ color: 'white', fontSize: '15px' }}>
                <IconButton href="https://www.youtube.com/your-youtube-channel" target="_blank">
                  <YouTubeIcon sx={{ fontSize: 20, color: 'white' }} />
                  <Typography variant="h6" sx={{ color: 'white', fontSize: '15px' }}>
                    Your YouTube Link
                  </Typography>
                </IconButton>
              </Typography>

              <Typography variant="h6" sx={{ color: 'white', fontSize: '15px' }}>
                <IconButton href="https://www.facebook.com/your-facebook-page" target="_blank">
                  <FacebookIcon sx={{ fontSize: 20, color: 'white' }} />
                  <Typography variant="h6" sx={{ margin: '5px', color: 'white', fontSize: '15px' }}>
                    Your facebook Link
                  </Typography>
                </IconButton>
              </Typography>

              <Typography variant="h6" sx={{ color: 'white', fontSize: '15px' }}>
                <IconButton href="https://www.instagram.com/your-instagram-account" target="_blank">
                  <InstagramIcon sx={{ fontSize: 20, color: 'white' }} />
                  <Typography variant="h6" sx={{ margin: '5px', color: 'white', fontSize: '15px' }}>
                    Your Instragram Link
                  </Typography>
                </IconButton>
              </Typography>

            </Grid>
          </Grid>
          <Divider sx={{ backgroundColor: 'white', marginTop: '50px' }} />
          <Grid item xs={12} sx={{ textAlign: 'center', marginTop: '10px' }}>
            <Typography variant="body2" sx={{ color: 'white' }}>
              &copy; 2024 Insight Forge. All rights reserved.
            </Typography>
          </Grid>

        </div>


        <Grid container spacing={12} sx={{ mx: "auto" }}>
          <Grid item>
            <Typography variant="h4" sx={{ margin: '5px', color: '#ffffff', marginTop: '40px' }}>
              Our Location
            </Typography>

            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', color: '#ffffff', fontSize: '15px' }}>
              <Image
                src="https://i.ibb.co/dbBYfrG/k-removebg-preview-1.png"
                alt="Company Logo"
                width={25}
                height={25}
                style={{ marginBottom: '5px' }}
              />
              Chittagong
            </Typography>

            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', color: '#ffffff', fontSize: '15px' }}>
              <Image
                src="https://i.ibb.co/6gq3mGB/kk-removebg-preview-1.png"
                alt="Company Logo"
                width={25}
                height={25}
                style={{ marginBottom: '5px' }}
              />
              insightforge@gmail.com
            </Typography>
            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', color: '#ffffff', fontSize: '15px' }}>
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

          {/* <Grid item>
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

          </Grid> */}

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
    </Box>
  );
};

export default Footer;

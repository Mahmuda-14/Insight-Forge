import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid } from '@mui/material';
import Image from 'next/image';
import Container from '@mui/material/Container';
import { green } from '@mui/material/colors';



const Logo = () => {



  return (
    <Container maxWidth="md"   >
      <Grid container spacing={8} sx={{ backgroundColor: green[300], my: 10, pt: 5, pb: 10, pr: 10 }} >

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ minWidth: 175 }}>
            <CardContent >
              <Image src="https://i.ibb.co/gyfztdz/1-removebg-preview-1.png" alt='ok' width={150} height={150}></Image>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3} >
          <Card sx={{ minWidth: 175 }}>
            <CardContent>
              <Image src="https://i.ibb.co/KLJwRD7/3-removebg-preview.png" alt="3-removebg-preview" width={150} height={150}></Image>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3} >
          <Card sx={{ minWidth: 175 }}>
            <CardContent>
              <Image src="https://i.ibb.co/kMZ2Ksp/4-removebg-preview.png" alt='ok' width={150} height={150}></Image>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3} >
          <Card sx={{ minWidth: 175 }}>
            <CardContent>
              <Image src="https://i.ibb.co/JH6JrW8/5-removebg-preview.png" alt='ok' width={150} height={150}></Image>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </Container>
  );
};

export default Logo;
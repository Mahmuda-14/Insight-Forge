/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
// import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Box, Container, Grid, Stack, TextField } from "@mui/material";
import useAxiosPublic from "../hooks/useAxiosPublic";


const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [blogs, setBlogs] = useState();
  const axiosPublic = useAxiosPublic();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [search, setSearch] = useState()


  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {

    axiosPublic.get(`/allBlog?search=${search}`)
      .then(res => {
        setBlogs(res.data)
      })

  }, [search])

  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.value;
    setSearch(searchText)

  }

  return (
    <Container maxWidth="xl">
      <Box>
        <Typography variant="h3" sx={{ color: "#B2533E", textAlign: "center", fontWeight: 700 }} > Knowledge Revolution </Typography>

        <Typography variant="h6" sx={{ color: "#CD5C08", textAlign: "center", mt: 3 }} >Explore practical strategies for continuous <br /> learning and adapting to the ever-evolving world of information</Typography>

        <Stack justifyContent='center' alignItems='center' >
          <form style={{ display: 'flex', gap: '4px', marginTop: '8px' }}>
            <Box
              sx={{
                width: { xs:400, md:500},
                maxWidth: '100%',
                backgroundColor: 'white',
                outline: 'none',
                border: 'none'
              }}>
              <TextField type='text' fullWidth onKeyUp={handleSearch} placeholder='Search category ' id="fullWidth" />
            </Box>
          </form>
        </Stack>
        <Grid mt={5} container spacing={2}>
          {blogs && blogs.length > 0 ? (
            blogs.map((item, i) => (
              <Grid key={i} item xs={12} md={6}>
                <Card className="card" >
                  <CardMedia
                    component="img"
                    height="294"
                    image={item.image}
                    alt="Paella dish"
                  />
                  <CardContent>
                    <Typography style={{ color: 'black', margin: '10px 0px' }} variant="h5" color="text.secondary">
                      {item.title}
                    </Typography>

                    <Typography style={{ color: 'black', margin: '5px 5px' }} variant="body" color="text.secondary">
                      Category: {item.category}
                    </Typography>

                    <Typography style={{ fontSize: '18px' }} variant="body2" color="text.secondary">
                      {item.details}
                    </Typography>
                  </CardContent>
                  {/*  <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions> */}
                </Card>
              </Grid>
            ))
          ) : (
            <p>No data available.</p>
          )}
        </Grid>
      </Box>
    </Container>
  );
};

export default page;



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
import { Box,Grid, Stack, TextField} from "@mui/material";

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

const page = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [blogs, setBlogs] = useState();

  useEffect(() => {
    fetch("/blog.json")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);


  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.value;
    console.log(searchText);

}

  return (
    <Box>
      <Typography variant="h3" sx={{color:"#B2533E", textAlign:"center", fontWeight:700}} > Knowledge Revolution </Typography>
      
      <Typography variant="h6" sx={{color:"#CD5C08", textAlign:"center", mt:3}} >Explore practical strategies for continuous <br/> learning and adapting to the ever-evolving world of information</Typography>

      <Stack justifyContent='center' alignItems='center' >
      <form  style={{ display: 'flex', gap: '4px',marginTop:'8px' }}>
      <Box
            sx={{
                  width: 500,
                  maxWidth: '100%',
                  backgroundColor: 'white',
                  outline: 'none',
                  border: 'none'
            }}>
            <TextField type='text' fullWidth onKeyUp={handleSearch}  placeholder='Search here' id="fullWidth" />
      </Box>
      

      </form>
      </Stack>

     

      <Grid mt={5} container  spacing={2}>
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

                  <Typography style={{ fontSize: '18px' }} variant="body2" color="text.secondary">
                    {item.details}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))
        ) : (
          <p>No data available.</p>
        )}
      </Grid>
    </Box>
  );
};

export default page;



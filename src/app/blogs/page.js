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
import { Box, Grid } from "@mui/material";

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
  

  // const [blogs, setBlogs] = useState();

  // useEffect(() => {
  //   fetch("/blog.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setBlogs(data);
  //     });
  // }, []);

  const blogs = [
    {
        "_id": "643010e0f5a7e52ce1e8fa65",
        "title": "Introduction to Knowledge Sharing",
        "image":"https://i.ibb.co/30tWs9t/knowledge.jpg",
        "name": "Jane Doe",
        "date": "2024-01-08",
        "details": "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        "comments": [
            {
              "id": 101,
              "author": "Alice",
              "date": "2024-01-02",
              "text": "Great post! Thanks for sharing."
            },
            {
              "id": 102,
              "author": "Bob",
              "date": "2024-01-03",
              "text": "I have a question about..."
            }
          ],
        "rating": 3
    },
    {
        "_id": "643010f9f5a7e52ce1e8fa66",
        "title": "Best Practices for Effective Knowledge Transfer",
        "image":"https://i.ibb.co/G5WNqtq/istockphoto-467209147-612x612.jpg",
        "name": "John Doe",
        "date": "2024-01-06",
        "details": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
        "rating": 2,
        "comments": [
            {
              "id": 201,
              "author": "Charlie",
              "date": "2024-01-06",
              "text": "I totally agree with your points!"
            }
          ]
    },
    {
      "_id": "64301123f5a7e52ce1e8fa68",
      "title": "Best Practices for Effective Knowledge Transfer",
      "image":"https://i.ibb.co/wpsVRqh/istockphoto-1166587507-612x612.jpg",
      "name": "Sarah Smith",
      "date": "2024-01-03",
      "details": "I found the product to be incredibly useful and easy to use. The interface is intuitive, and it has all the features I need. Highly recommend it!",
      "rating": 4,
      "comments": [
          {
            "id": 201,
            "author": "Charlie",
            "date": "2024-01-06",
            "text": "I totally agree with your points!"
          }
        ]
  },
    {
        "_id": "6430110af5a7e52ce1e8fa67",
        "title": "Introduction to Knowledge Sharing",
        "image":"https://i.ibb.co/30tWs9t/knowledge.jpg",
        "name": "MJ Doe",
        "date": "2024-01-05",
        "details": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
        "rating": 5,
        "comments": [
            {
              "id": 101,
              "author": "Alice",
              "date": "2024-01-02",
              "text": "Great post! Thanks for sharing."
            },
            {
              "id": 102,
              "author": "Bob",
              "date": "2024-01-03",
              "text": "I have a question about..."
            }
          ]
    },
   

    {
      "_id": "6430113af5a7e52ce1e8fa69",
      "title": "Introduction to Knowledge Sharing",
      "image":"https://i.ibb.co/q5gkHC6/istockphoto-1395650800-612x612.jpg",
      "name": "Robert Johnson",
      "date": "2024-01-02",
      "details": "This is by far the best service I have ever used. The customer support is outstanding, and the product itself is top-notch. I couldn't be happier!",
      "rating": 5,
      "comments": [
          {
            "id": 101,
            "author": "Alice",
            "date": "2024-01-02",
            "text": "Great post! Thanks for sharing."
          },
          {
            "id": 102,
            "author": "Bob",
            "date": "2024-01-03",
            "text": "I have a question about..."
          }
        ]
  },

    {
        "_id": "6430113af5a7e52ce1e8fa69",
        "title": "Introduction to Knowledge Sharing",
        "image":"https://i.ibb.co/30tWs9t/knowledge.jpg",
        "name": "Robert Johnson",
        "date": "2024-01-02",
        "details": "This is by far the best service I have ever used. The customer support is outstanding, and the product itself is top-notch. I couldn't be happier!",
        "rating": 5,
        "comments": [
            {
              "id": 101,
              "author": "Alice",
              "date": "2024-01-02",
              "text": "Great post! Thanks for sharing."
            },
            {
              "id": 102,
              "author": "Bob",
              "date": "2024-01-03",
              "text": "I have a question about..."
            }
          ]
    }
    
]

  return (
    <Box>
      <Typography variant="h3" sx={{color:"#B2533E", textAlign:"center", fontWeight:700}} > Knowledge Revolution </Typography>
      
      <Typography variant="h6" sx={{color:"#CD5C08", textAlign:"center", mt:3}} >Explore practical strategies for continuous <br/> learning and adapting to the ever-evolving world of information</Typography>
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



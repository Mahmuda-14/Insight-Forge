/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";
import React, { useState } from "react";
import {
  Avatar,
  Backdrop,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Fade,
  IconButton,
  InputLabel,
  Modal,
  Rating,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { blueGrey, brown, red } from "@mui/material/colors";
import Image from "next/image";
import { Add } from "@mui/icons-material";

import toast from "react-hot-toast";
import useAxiosPublic from "../hooks/useAxiosPublic";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: '#fff',
  boxShadow: 24,
  p: 4,
  paddingBottom: 6,

};

const Story = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const axiosPublic = useAxiosPublic()
  const [rating, setRating] = useState(0);

  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
  };


  const handlePost = (e) => {
    e.preventDefault();

    const form = e.target;

    const review = form.review.value;


    console.log(review)

    const reviewItem = {
      review,
      rating,
    };
    console.log(reviewItem)

   
      axiosPublic.post('/review', reviewItem)
      .then(res => {
        console.log(res.data);
        if (res.status === 200) {
          toast.success("Your review has been posted");
          
        }
      })
      .catch(error => {
        console.error('Error posting review:', error);
      });

  };



  return (
    <div>
      <Card
        sx={{
          paddingTop: "11px",
          paddingBottom: "15px",
          backgroundColor: "#4f675b",
          color: "#263238",
          px: 2

        }}
      >
        <div className='flex justify-center  items-center '>
          <Image src="https://i.ibb.co/wWQfKSr/Untitled-design-1-removebg-preview.png" alt='ok' width={150} height={150}></Image>
        </div>
        <CardContent sx={{ padding: "20px" }}>
          <CardHeader
            titleTypographyProps={{
              fontSize: { xs: 18, sm: 26 },
              fontWeight: 'bold',
              color: "white"
            }}

            title="CUSTOMER REVIEW"
          />

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginTop: "30px", color: "white" }}
          >
            From insightful content to user-friendly interfaces, Insight Forge strive to create an engaging platform for collaborative learning. Join Insight Forge in exploring, sharing, and reviewing the wealth of information that fuels everyone collective intellectual growth!
          </Typography>

          <Button onClick={handleOpen} className=" text-white bg-slate-700 left-[400px]"><Add></Add></Button>
          <Modal
            // aria-labelledby="transition-modal-title"
            // aria-describedby="transition-modal-review"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <form onSubmit={handlePost} className='from'>
                  <TextField name='review'
                    required
                    className='input'
                    id="outlined-multiline-static"
                    label="Give Your Review"
                    multiline
                    rows={4}
                    sx={{ width: '100%', my: 1 }}
                  />
                  <InputLabel>Rating</InputLabel>
                  <Rating
                    sx={{ my: 1 }}
                    // placeholderRating={5}
                    value={rating}
                    onChange={handleRatingChange}
                  />

                  <Button type="submit" variant="outlined" className=" text-white top-[34px] -left-[122px] -bottom-[33px] bg-slate-600">Give Review</Button>

                </form>
              </Box>
            </Fade>
          </Modal>


        </CardContent>
      </Card>
    </div>
  );
};

export default Story;

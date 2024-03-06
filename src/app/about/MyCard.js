"use client";
import { FaQuoteLeft } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Rating,
  Typography,
  styled,
} from "@mui/material";


import { red } from "@mui/material/colors";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import useAxiosPublic from "../hooks/useAxiosPublic";
import toast from "react-hot-toast";





const MyCard = () => {

  const [review, setReview] = useState([]);
  const axiosPublic = useAxiosPublic();
  
  useEffect(() => {
     
    axiosPublic.get('/review')
      .then(res => {
        setReview(res.data)
      })
      .catch(error => {
        toast.error("Something was wrong");
      });

  }, [axiosPublic])



  const StyledFaQuoteLeft = styled(FaQuoteLeft)({
    color: 'white'
  });
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="mySwiper"
      >
       {review.map(review => (
        <SwiperSlide key={review._id}>
          <div id="item1" className="carousel-item relative w-full">
            <Card sx={{ padding: "30px", bgcolor: "transparent", boxShadow: 'none' }}>
              <CardContent>
                <StyledFaQuoteLeft />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ color: "white", fontSize: "lg", fontWeight: "lg" }}
                >
                  {review.review}
                </Typography>
              </CardContent>

              <CardHeader sx={{ color: 'white' }}
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                  </Avatar>
                }
                
                subheader={
                  <Rating name="size-small" value={review.rating} sx={{ color: 'white' }} size="small" />
                }
              />
            </Card>
          </div>
        </SwiperSlide>
      ))}
      </Swiper>



    </div>
  );
};

export default MyCard;


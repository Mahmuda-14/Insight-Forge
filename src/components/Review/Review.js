"use client"
import React from 'react';
import './review.css';
import MyCard from './MyCard';
import Story from './Story';


const Review = () => {
  return (


    <div className='flex parallax-container' style={{marginTop:'10px'}}>
      <div>
        <MyCard />
      </div>
      <div>
        <Story />
      </div>
    </div>

  );
};

export default Review;

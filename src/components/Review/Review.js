"use client"
import React from 'react';
import './review.css';
import Image from 'next/image';
import img from '../../../public/team.jpg'
import MyCard from './MyCard';
import Story from './Story';

const Review = () => {
  return (


    <div className='flex parallax-container'>
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


import React from 'react';
import MyCard from './MyCard';
import Story from './Story';
import './review.css';
import Image from 'next/image';
import img from '../../public/team.jpg'

const Review = () => {
  return (


    <div className='flex parallax-container'>
      <div className='parallax-img'>

        <Image src={img} alt="" className='featured-item'></Image>
      </div>
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

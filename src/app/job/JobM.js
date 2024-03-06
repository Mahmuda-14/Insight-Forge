"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import '../../utils/button/theme_button.css'
const JobM = () => {

  const [showMoreInfo1, setShowMoreInfo1] = useState(false);

  const handleReadMoreClick1 = () => {
    setShowMoreInfo1(!showMoreInfo1);
  };

  const [showMoreInfo2, setShowMoreInfo2] = useState(false);

  const handleReadMoreClick2 = () => {
    setShowMoreInfo2(!showMoreInfo2);
  };


  const [showMoreInfo3, setShowMoreInfo3] = useState(false);

  const handleReadMoreClick3 = () => {
    setShowMoreInfo3(!showMoreInfo3);
  };



  return (
    <div className='mx-auto '>
      <div>
        <div>
          <Image
            src="https://i.ibb.co/9tw8f9C/download.gif"
            alt="Company Logo"
            width={400}
            height={400}
            style={{

              paddingTop: '50px',
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          />

        </div>
        <div className='text-center'>
          <p className='text-[35px] font-bold my-[20px]'>Browse from Over <span className='text-[40px] text-[#4f675b] font-extrabold'>200+</span> Jobs</p>
          <p>Empowering careers through seamless integration, our job-focused platform connects talented individuals with dynamic <br />
            opportunities,fostering professional growth and success. </p>
        </div>
      </div>

      <div className='lg:flex md:flex-col-1 justify-center items-center mt-[100px] mb-[150px] lg:ml-[0px] md:ml-[150px]'>

        <div className="max-w-md w-full mx-auto bg-white shadow-md p-8 rounded-md " style={{ float: 'left' }}>
          <Image
            src="https://i.ibb.co/b2PnZHB/16-removebg-preview.png"
            alt="Company Logo"
            width={130}
            height={130}

          />
          <h2 className="text-xl font-bold text-gray-800 mb-2">X Company</h2>
          <p className="text-gray-600 my-[10px]">They typically have a portfolio showcasing their previous work,</p>

          {showMoreInfo1 && (
            <p className='mb-[20px] text-gray-600'>which may include websites they have designed and developed for various clients across different industries.</p>
          )}

          <button
            onClick={handleReadMoreClick1}
            className="blog-button"
          >
            {showMoreInfo1 ? 'Read Less' : 'Read More'}
          </button>
        </div>

        <div className="max-w-md w-full mx-auto bg-white shadow-md p-8 rounded-md" style={{ float: 'left' }}>
          <Image
            src="https://i.ibb.co/TtCGG6b/17-removebg-preview.png"
            alt="Company Logo"
            width={150}
            height={150}

          />
          <h2 className="text-xl font-bold text-gray-800 mb-2">Y Company</h2>
          <p className="text-gray-600 my-[10px]">They employ skilled professionals with expertise in various areas of web development</p>

          {showMoreInfo2 && (
            <p className='mb-[20px] text-gray-600'>such as HTML, CSS, JavaScript, PHP, Python, Ruby on Rails, etc.</p>
          )}

          <button
            onClick={handleReadMoreClick2}
            className="blog-button"
          >
            {showMoreInfo2 ? 'Read Less' : 'Read More'}
          </button>
        </div>

        <div className="max-w-md w-full mx-auto bg-white shadow-md p-8 rounded-md" style={{ float: 'left' }}>
          <Image
            src="https://i.ibb.co/1bqM1yW/26-removebg-preview.png"
            alt="Company Logo"
            width={100}
            height={100}

          />
          <h2 className="text-xl font-bold text-gray-800 mb-2">Z Company</h2>
          <p className="text-gray-600 my-[10px]">They work closely with clients to understand their requirements, goals, and target audience </p>

          {showMoreInfo3 && (
            <p className='mb-[20px] text-gray-600'>to create customized solutions tailored to their needs.</p>
          )}

          <button
            onClick={handleReadMoreClick3}
            className="blog-button"
          >
            {showMoreInfo3 ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>


    </div>
  );
};

export default JobM;
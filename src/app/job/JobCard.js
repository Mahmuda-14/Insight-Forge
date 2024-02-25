
"use client";
// eslint-disable-next-line react-hooks/rules-of-hooks
import React, { useEffect, useState } from 'react';
import Job from './Job';
import useAxiosPublic from '../hooks/useAxiosPublic';

import '../../components/banner/banner.css'
import Marquee from 'react-fast-marquee';



const JobCard = () => {


  const [job, setJobs] = useState([]);
  const axiosPublic = useAxiosPublic();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {

    axiosPublic.get('/job')
      .then(res => {
        setJobs(res.data)
      })

  }, [axiosPublic])

  const marqueeProps = {

    speed: 30,
    direction: 'right',
    pauseOnClick: 'false',
    // gradientColor: 'rgb(248,251,253)'

};


  return (
    <div>
      <div className=' text-center'>
        <h2 className=' text-3xl font-bold'>Browse top jobs</h2>
        <p className='text-xl sm:mx-4 lg:mx-[24rem] my-3'>Empowering careers through seamless integration, our job-focused platform connects talented individuals with dynamic
          opportunities,fostering professional growth and success.</p></div>
          <Marquee {...marqueeProps}>
      <div className='grid grid-cols-4 gap-3 mx-4 my-7'>
        {
          job.map(item => <Job key={item._id} item={item}></Job>)
        }

      </div>
      </Marquee>
    </div>



  );
};

export default JobCard;



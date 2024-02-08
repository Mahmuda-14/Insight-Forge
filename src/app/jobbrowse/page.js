/* eslint-disable react-hooks/rules-of-hooks */
"use client";
// eslint-disable-next-line react-hooks/rules-of-hooks
import React, { useEffect, useState } from 'react';
import '../../utils/button/theme_button.css';
import useAxiosPublic from '../hooks/useAxiosPublic';
import '../../components/banner/banner.css'
import Job from '../job/Job';
import { Divider } from '@mui/material';
import Image from 'next/image';



const page = () => {
    // const [formData, setFormData] = useState({
   
    //     jobtype: ''
    
    //   });
    
    //   const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData((prevData) => ({
    //       ...prevData,
    //       [name]: value,
    //     }));
    //   };
    
    
    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    
    //     }
        const [job, setJobs] = useState([]);
        const axiosPublic = useAxiosPublic();

        useEffect(() => {
      
          axiosPublic.get('/job')
            .then(res => {
              setJobs(res.data)
            })
      
        }, [])
      
        const marqueeProps = {
      
          speed: 30,
          direction: 'right',
          pauseOnClick: 'false',
          // gradientColor: 'rgb(248,251,253)'
      
      };
        
    return (
        <div>
                  {/* <div >
        <h2 className='text-black p-4 pt-[80px] text-2xl  mt-5 text-center font-bold'>Find your dream job.</h2>
        <form onSubmit={handleSubmit} className="lg:w-[800px] md:w-[600px] sm:w-[500px] lg:h-[200px] md:h-[250px] sm:h-[300px] mx-auto bg-white p-8 rounded shadow-2xl lg:flex md:flex-col-1 sm:flex-col-1 justify-center items-center">
        <div >
             
              <select
                type="text" name="jobtype"
                value={formData.jobtype}
                onChange={handleChange}
                className=" p-4  border rounded-md lg:w-[500px] md:w-[500px] sm:w-[450px]" 
              >
                <option value="" disabled>
                  Select a job
                </option>
                <option value="job1">Remote</option>
                <option value="job2">Freelance</option>
                <option value="job3">Full-time</option>
              </select>
            </div>
        <button className='blog-button mx-[10px]'>
          Search
        </button>
        </form>
      </div> */}

<div className="relative mx-auto" style={{
        backgroundImage: 'url("https://i.ibb.co/9h6cYf0/pexels-may-dayua-1595822.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '500px'
      }}>
        
        <div >

          <p className='text-left text-black text-[80px] p-[50px]'>Browse Job</p>


          <Divider sx={{ backgroundColor: 'black' }} />
        </div>
      </div>



      <div>
      <div>
        <Image
            src="https://i.ibb.co/6tqPZ1g/download-2.gif"
            alt="Company Logo"
            width={300}
            height={300}
            style={{

              paddingTop: '50px',
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}

          />
        </div>
       <div className=' text-center my-[100px]'>
        <h2 className=' text-[40px] font-bold text-[#4f675b]'>Browse top jobs</h2>
        <p className='text-[18px] text-center mt-[30px] mb-[60px] mx-auto text-black'>Empowering careers through seamless integration, our job-focused platform connects talented <br/>individuals with dynamic
          opportunities,fostering professional growth and success.</p>
        </div>
          {/* <Marquee {...marqueeProps}> */}
      <div className='grid grid-cols-4 gap-3 mx-4 my-7'>
        {
          job.map(item => <Job key={item.id} item={item}></Job>)
        }

      </div>
      {/* </Marquee> */}
    </div>


        </div>
    );
};

export default page;


/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { Divider } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';
// import useAxiosSecure from '../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import useAxiosPublic from '../hooks/useAxiosPublic';

const page = () => {


  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const { user } = useAuth();
  const axiosPublic = useAxiosPublic()

  const handleReadMoreClick = () => {
    setShowMoreInfo(!showMoreInfo);
  };

  const [formData, setFormData] = useState({
    jobtitle: '',
    companyname: '',
    logo: '',
    location: '',
    description: '',
    jobtype: '',

  });

  // console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const discusItem = {
      email: user?.email,
      formData
    }

    console.log('discusItem:', discusItem);



    axiosPublic.post('/job', discusItem)
      .then(res => {
        console.log(res.data)
        if (res.data.__v === 0) {
          toast.success("Your job has been posted");
        }
      })
      .catch(error => {
        console.error('Error posting job:', error);
      });
    // console.log(formData);
  };



  return (
    <div>
      <div className="relative mx-auto" style={{
        backgroundImage: 'url("https://i.ibb.co/f1C0Ch6/pexels-vojtech-okenka-392018.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '500px'
      }}>
        <div >


          <p className='text-left text-white text-[80px] p-[50px]'>Post a Job</p>


          <Divider sx={{ backgroundColor: '#ffffff' }} />
        </div>
      </div>


      <div className='lg:flex md:flex-col-1 sm:flex-col-1 justify-center items-start'>
        <div className="container  mt-8">

          <form onSubmit={handleSubmit} className="lg:w-[800px] md:w-[600px]  sm:w-[500px]  mx-auto bg-white p-8 rounded shadow-md">
            <div className='flex justify-center items-center'>
              <Image src="https://i.ibb.co/ct1xgpw/hat-removebg-preview.png" alt='gif' width={200} height={200}></Image>
            </div>
            <div className='flex justify-center items-center'>

              <Image src="https://i.ibb.co/5cFq58J/Untitled-design.png" alt='gif' width={70} height={70}></Image>
              <p className='text-[#545454] text-[18px] mt-[50px]'>Passionate software engineer with expertise in full-stack development, dedicated to delivering high-quality, scalable solutions to enhance user experiences and drive innovation.</p>
            </div>
            <div className="mb-12 mt-[80px]">
              <label className="block text-teal-600 text-[22px] mb-2">
                Job Title:
              </label>
              <input
                type="text"
                name="jobtitle"
                value={formData.jobtitle}
                onChange={handleChange}
                className="border rounded w-full py-2 px-3"
                placeholder="Enter Job Title"
              />
            </div>
            <div className="mb-12">
              <label className="block text-teal-600 text-[22px] mb-2">
                Company Name:
              </label>
              <input
                type="text"
                name="companyname"
                value={formData.companyname}
                onChange={handleChange}
                className="border rounded w-full py-2 px-3"
                placeholder="Enter Company Name"
              />
            </div>
            <div className="mb-12">
              <label className="block text-teal-600 text-[22px] mb-2">
                Company Logo:
              </label>
              <input
                type="img"
                name="logo"
                value={formData.logo}
                onChange={handleChange}
                className="border rounded w-full py-2 px-3"
                placeholder="Enter Logo"
              />
            </div>
            <div className="mb-12">
              <label className="block text-teal-600 text-[22px] mb-2">
                Location:
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="border rounded w-full py-2 px-3"
                placeholder="Enter location"
              />
            </div>

            <div className="mb-12">
              <label className="block text-teal-600 text-[22px] mb-2">
                Job Type:
              </label>
              <select
                type="text" name="jobtype"
                value={formData.jobtype}
                onChange={handleChange}
                className="mt-4 p-2 border rounded-md"
              >
                <option value="" disabled>
                  Select a job
                </option>
                <option value="job1">Remote</option>
                <option value="job2">Freelance</option>
                <option value="job3">Full-time</option>
              </select>
            </div>

            <div className="mb-12">
              <label className="block text-teal-600 text-[22px] mb-2">
                Description:
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="border rounded w-full py-2 px-3"
                placeholder="Enter Job Description"
                rows="4"
              />
            </div>


            <div className="mb-4">
              <button
                type="submit"
                className="bg-[#87CEEB] text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
              >
                Post Job
              </button>
            </div>
          </form>
        </div>



        <div className='lg:ml-[0px] md:ml-[150px] sm:ml-[0px]'>
          <div className=" lg:w-[500px] md:w-[500px] sm:w-[350px] bg-white p-8 rounded shadow-md mt-8 ">
            <p className='text-teal-600 text-[30px] mb-[30px] font-bold'>Contact Info</p>
            <p className='text-[#87CEEB] text-[20px]'>Address</p>
            <p className='mb-[20px]'>203 Fake St. Mountain View, San <br /> Francisco, California, USA</p>
            <p className='text-[#87CEEB] text-[20px]'>Phone</p>
            <p className='mb-[20px]'>+880 18464957347 </p>
            <p className='text-[#87CEEB] text-[20px]'>Email Address</p>
            <p>myemailaddress@gmail.com</p>
          </div>

          <div className="lg:w-[500px] md:w-[500px] sm:w-[350px] bg-white p-8 rounded shadow-md mt-[50px]">
            <p className='text-teal-600 text-[30px] mb-[30px] font-bold'>More Info</p>

            <p className='mb-[20px]'>Empowering careers through seamless integration, our job-focused platform connects talented individuals with dynamic opportunities, fostering professional growth and success.</p>

            {showMoreInfo && (
              <p className='mb-[20px]'>Additional information that is revealed when Read More is clicked.</p>
            )}

            <button
              onClick={handleReadMoreClick}
              className="bg-[#87CEEB] text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            >
              {showMoreInfo ? 'Read Less' : 'Read More'}
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default page;
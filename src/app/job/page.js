"use client"
import React, { useState } from 'react';
import Card from './Card';
import JobCard from './JobCard';
import JobM from './JobM';
import Gallery from './Gallery';
import PostForm from './PostForm';
import DrawerAppBar from '@/components/shared/Navbar/Navbar';
import Footer from '@/components/shared/footer/Footer';
import VideoPlayer from './VideoPlayer';
import '../../utils/button/theme_button.css'
// import withAuth from '@/components/PrivateRoute/withAuth';

const Job = () => {
  const [formData, setFormData] = useState({
   
    jobtype: ''

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    }
  
  return (
    <div style={{ padding: '10px' }}>
      <DrawerAppBar></DrawerAppBar>
      <VideoPlayer></VideoPlayer>

      <div >
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
      </div>

      <JobM></JobM>
      <Card></Card>    
      <JobCard></JobCard>
      <PostForm></PostForm>
      <Gallery></Gallery>
      <Footer></Footer>
    </div>
  );
};

export default Job;




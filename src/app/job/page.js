"use client"
import React from 'react';
import Card from './Card';
import JobCard from './JobCard';
import JobM from './JobM';
import Gallery from './Gallery';
import PostForm from './PostForm';
import DrawerAppBar from '@/components/shared/Navbar/Navbar';
import Footer from '@/components/shared/footer/Footer';
import withAuth from '@/components/PrivateRoute/withAuth';

const Job = () => {

  return (
    <div style={{ background: 'linear-gradient(to right, #FFFFFF, #87CEEB)', padding: '10px' }}>
      <DrawerAppBar></DrawerAppBar>
      <div className='bg-gradient-to-r from-teal-800 to-slate-400 h-[23rem]'>
        <h2 className='text-white p-4 pt-[80px] text-2xl ml-[113px] mt-5 text-center'>Find your dream job.</h2>
        <input name="text" type="text" placeholder="text" className="input input-bordered ml-[650px] mt-8 px-5 py-2 rounded-xl" required />
        <button class="btn ml-2 px-5 py-2 bg-black text-white rounded-xl">
          Search
        </button>

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

export default withAuth(Job);



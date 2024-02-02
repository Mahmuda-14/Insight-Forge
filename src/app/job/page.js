
import React from 'react';
import Card from './Card';
import JobCard from './JobCard';
import JobM from './JobM';
import Gallery from './Gallery';
import PostForm from './PostForm';

const page = () => {

  return (
    <div className='mx-auto'>
      <div className='bg-gradient-to-r from-teal-800 to-slate-400 h-[23rem] w-full'>
        <h2 className='text-white p-4 pt-[80px] text-2xl  mt-5 text-center'>Find your dream job.</h2>
        <input name="text" type="text" placeholder="text" className="input input-bordered lg:ml-[650px] md:ml-[200px] sm:ml-[100px] mt-8 px-5 py-2 rounded-xl" required />
        <button class="btn ml-2 px-5 py-2 bg-black text-white rounded-xl">
          Search
        </button>

      </div>
      <JobM></JobM>
      <Card></Card>    
      <JobCard></JobCard>
      <PostForm></PostForm>
      <Gallery></Gallery>
    </div>
  );
};

export default page;



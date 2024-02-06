"use client"
import React from 'react';
import Image from 'next/image';
import Marquee from "react-fast-marquee";

const Logo = () => {


  return (

   <div>
    <div className='flex justify-center  items-center'>
    <Image src="https://i.ibb.co/svHdhg0/Untitled-design.gif" alt='ok' width={300} height={300}></Image>
    </div>
    <div className='text-center'>
    <p className='text-[30px] font-bold'>Unleash our creativity with high-quality assets</p>
    <p className='text-[#00897B] mt-[10px] mb-[50px]'>See the collection and explore with us</p>
    </div>
    {/* <div className='flex justify-center  items-center mb-[-200px]'>
    <Image src="https://i.ibb.co/wWQfKSr/Untitled-design-1-removebg-preview.png" alt='ok' width={200} height={200}></Image>
    </div> */}

     {/* <div className='grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1 justify-around items-center my-[150px]   lg:h-[350px] md:h-[800px] sm:h-[800px]'> */}
     <Marquee className='my-[100px]'>
      <div className=" w-[200px] bg-white p-8 rounded  mt-8 ml-[20px]">
      <Image src="https://i.ibb.co/gyfztdz/1-removebg-preview-1.png" alt='ok' width={150} height={150}></Image>
    </div>
    <div className=" w-[200px] bg-white p-8 rounded  mt-8 ml-[20px]">
    <Image src="https://i.ibb.co/KLJwRD7/3-removebg-preview.png" alt="3-removebg-preview" width={150} height={150}></Image>
    </div>
    <div className=" w-[200px] bg-white p-8 rounded  mt-8 ml-[20px]">
    <Image src="https://i.ibb.co/kMZ2Ksp/4-removebg-preview.png" alt='ok' width={150} height={150}></Image>
    </div>
    <div className=" w-[200px] bg-white p-8 rounded  mt-8 ml-[20px]">
    <Image src="https://i.ibb.co/JH6JrW8/5-removebg-preview.png" alt='ok' width={150} height={150}></Image>
    </div>
    <div className=" w-[200px] flex items-center justify-center bg-white p-8 rounded  mt-8 ml-[20px]">
      <Image src="https://i.ibb.co/mNqrVD8/d-removebg-preview.png" alt='ok' width={100} height={100}></Image>
    </div>
    <div className=" w-[200px] flex items-center justify-center bg-white p-8 rounded  mt-8 ml-[20px]">
      <Image src="https://i.ibb.co/6BQMZ8F/screenshot-361.jpg" alt='ok' width={300} height={300}></Image>
    </div>
    <div className=" w-[200px] flex items-center justify-center bg-white p-8 rounded  mt-8 ml-[20px]">
      <Image src="https://i.ibb.co/YTR71qh/o-removebg-preview.png" alt='ok' width={300} height={300}></Image>
    </div>
    <div className=" w-[200px] flex items-center justify-center bg-white p-8 rounded  mt-8 ml-[20px]">
      <Image  src="https://i.ibb.co/RQnyFdw/download-1.png" alt='ok' width={500} height={300}></Image>
    </div>
    <div className=" w-[200px] flex items-center justify-center bg-white p-8 rounded  mt-8 ml-[20px]">
      <Image src="https://i.ibb.co/S3WxnDv/w-removebg-preview.png" alt='ok' width={500} height={300}></Image>
    </div>
    <div className=" w-[200px] flex items-center justify-center bg-white p-8 rounded  mt-8 ml-[20px]">
      <Image  src="https://i.ibb.co/fM1w8PX/download-2.png" alt='ok' width={500} height={300}></Image>
    </div>
    <div className=" w-[200px] flex items-center justify-center bg-white p-8 rounded  mt-8 ml-[20px]">
      <Image src="https://i.ibb.co/fqxnHPS/download-3.png" alt='ok' width={500} height={300}></Image>
    </div>
    </Marquee>
    </div>
  //  </div>
   
  );
};

export default Logo;
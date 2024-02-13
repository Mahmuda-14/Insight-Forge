"use client";

import Image from 'next/image';
import React from 'react';
import '../../utils/button/theme_button.css'
import Link from 'next/link';
// import Marquee from 'react-fast-marquee';

const Job = ({ item }) => {
    const { logo, jobtitle, description } = item;

   


    return (
       
        <div className="card3 card4 w-[21rem] h-[20rem] bg-white border-y-2 shadow-xl p-5 my-5">
            <Image src={logo} alt='company'
                width={40}
                height={44}
            />
            <h2 className='text-2xl mt-6 mb-4 font-semibold text-black text-left'>{jobtitle}</h2>
            <p className='text-xl text-slate-400 text-left'>{description}</p>
            <Link href="https://creativetechpark.com/?gclid=CjwKCAiAlJKuBhAdEiwAnZb7lViNZvGbxEFmYRiDbeyo6q_Ke46-Y_bibB7zkae1T4lDwYgrvtCt2xoCAwYQAvD_BwE"><button className='blog-button mt-8'>See Details</button></Link>

        </div>
      
    );
};

export default Job;




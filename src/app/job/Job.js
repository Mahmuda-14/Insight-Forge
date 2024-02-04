"use client";

import Image from 'next/image';
import React from 'react';

const Job = ({ item }) => {
    const {logo,jobtitle, description } = item;
    return (
        <div className=" w-[21rem] h-[20rem] bg-white border-y-2 shadow-xl p-5 my-5">
                 <Image src={logo} alt='company'
                 width={40}
                 height={44}
                 

                />
                <h2 className='text-2xl mt-6 mb-4 font-semibold text-black text-left'>{jobtitle}</h2>
                <p  className='text-xl text-slate-400 text-left'>{description}</p>
                <button className=' bg-teal-600 text-white p-3  rounded-xl mt-8'>See Details</button>

            </div>
    );
};

export default Job;


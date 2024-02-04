
import React from 'react';
import './job.css'
const Card = () => {
    return (
        <div className='flex sm:flex-col md:flex-col lg:flex-row my-[100px]'>
            <div className='p'>
                <h2 className='bg-white sm:ml-[59px] sm:mr-[68px] sm:mt-[239px] lg:mt-[281px] lg:mr-[100px] lg:ml-[448px] p-10 rounded-2xl'>1000+<br />Talented waiting for hire</h2>
            </div>
            <div className='w-1/2 sm:ml-[125px] lg:ml-0 mt-[84px]'>
                <h2 className='text-3xl text-black'>Want to hire perfect person?</h2>
                <p className='  text-gray-400'>The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes. Placeholder text commonly used. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying.</p>
                <button class="btn ml-2 mt-4 px-5 py-2 bg-teal-600 hover:bg-gray-400 hover:text-black text-white rounded-xl">
                   Browse Talents
                </button>
                
            </div>


        </div>
    );
};

export default Card;

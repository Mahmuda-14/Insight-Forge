
import React from 'react';
import './job.css';
import '../../utils/button/theme_button.css'
import Link from 'next/link';
const Card = () => {
    return (
        <div className='lg:flex sm:flex-col-1 md:flex-col-1  my-[100px] '>
            <div class=" p">
    <h2 class="bg-white lg:mt-[281px] lg:mr-[100px] lg:ml-[448px] p-10 rounded-2xl hidden lg:block">1000+<br />Talented waiting for hire</h2>
</div>

            <div className='lg:w-[500px] md:w-[500px] sm:w-[500px] sm:ml-[125px] lg:ml-0 lg:mt-[84px]'>
                <h2 className='text-3xl text-black'>Want to get perfect job?</h2>
                <p className='  text-gray-400 my-[50px]'>The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes. Placeholder text commonly used. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying.</p>
                {/* <button class="blog-button my-5">
                   Browse Jobs
                </button> */}
                <Link href="/jobbrowse">   <button class="blog-button my-5">
                   Browse Jobs
                </button></Link>
                
            </div>


        </div>
    );
};

export default Card;

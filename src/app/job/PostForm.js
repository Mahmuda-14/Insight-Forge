import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import '../../components/banner/banner.css'
import '../../utils/button/theme_button.css'

const PostForm = () => {

    return (
        <div className='my-[300px]'>
             <div className='flex justify-around items-center '>
                <div className="flex justify-around items-center w-[750px] h-[310px] mx-auto  shadow-md p-8 rounded-md card3 card4 ">
                    <Image
                        src="https://i.ibb.co/LJQR7LP/18-removebg-preview.png"
                        alt="Company Logo"
                        width={200}
                        height={200}

                    />
                    <div>
                        <h2 className="text-xl font-bold text-gray-800 mb-2">Post a Job</h2>
                        <p className="text-[#006A4E]">This is a simple card example using Tailwind CSS. Customize it as per your needs.</p>
                        <Link href="/jobpost">  <button className='blog-button mt-8'>Post Job</button></Link>
                      
                    </div>
                </div>
                <div className='mx-[50px]'>
                    <Image src="https://i.ibb.co/Sf6Zp4d/fast-backward.gif"
                        alt="Company Logo"
                        width={100}
                        height={100}></Image>
               </div>
               <div className='mx-[50px]'>
                <p className='text-[30px] font-semibold'>Post available job</p>
               </div>
             
            </div>
            <div className='flex justify-around items-center mt-[200px]'>
               <div className='mx-[50px]'>
                <p className='text-[30px] font-semibold'>Search your job</p>
               </div>

               <div className='mx-[50px]'>
                    <Image src="https://i.ibb.co/sHHdqtf/fast-forward.gif"
                        alt="Company Logo"
                        width={100}
                        height={100}></Image>
               </div>

            <div className="flex justify-around items-center w-[750px] h-[310px] mx-auto card3 card4 shadow-md p-8 rounded-md">
                    <Image
                        src="https://i.ibb.co/jGL0VpW/14-removebg-preview-1.png"
                        alt="Company Logo"
                        width={200}
                        height={200}

                    />
                    <div>
                        <h2 className="text-xl font-bold text-gray-800 mb-2">Browse For Job</h2>
                        <p className="text-[#006A4E]">This is a simple card example using Tailwind CSS. Customize it as per your needs.</p>
                       <button className='blog-button mt-8'>Browse Job</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostForm;
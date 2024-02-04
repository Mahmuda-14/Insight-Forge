import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PostForm = () => {


    
    return (
        <div>
             <div className='flex justify-center items-center mt-[200px]'>
                <div className="flex justify-around items-center w-[610px] h-[310px] mx-auto  shadow-md p-8 rounded-md bg-[#B9FF66]">
                    <Image
                        src="https://i.ibb.co/LJQR7LP/18-removebg-preview.png"
                        alt="Company Logo"
                        width={200}
                        height={200}

                    />
                    <div>
                        <h2 className="text-xl font-bold text-gray-800 mb-2">Post a Job</h2>
                        <p className="text-[#006A4E]">This is a simple card example using Tailwind CSS. Customize it as per your needs.</p>
                        <Link href="/jobpost">  <button className="bg-[#87CEEB] text-white px-4 py-2 mt-4 rounded-md hover:bg-[#6495ED] focus:outline-none focus:ring focus:border-blue-300">Post Job</button></Link>
                      
                    </div>
                </div>
                <div className="flex justify-around items-center w-[610px] h-[310px] mx-auto bg-[#006A4E] shadow-md p-8 rounded-md">
                    <Image
                        src="https://i.ibb.co/jGL0VpW/14-removebg-preview-1.png"
                        alt="Company Logo"
                        width={200}
                        height={200}

                    />
                    <div>
                        <h2 className="text-xl font-bold text-gray-800 mb-2">Browse For Job</h2>
                        <p className="text-[#B9FF66]">This is a simple card example using Tailwind CSS. Customize it as per your needs.</p>
                       <button className="bg-[#87CEEB] text-white px-4 py-2 mt-4 rounded-md hover:bg-[#6495ED] focus:outline-none focus:ring focus:border-blue-300">Post Job</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostForm;


import Image from 'next/image';
import React from 'react';

const JobM = () => {
    return (
        <div className='mx-auto'>
            <div>
                <div>
                    <Image
                        src="https://i.ibb.co/9tw8f9C/download.gif"
                        alt="Company Logo"
                        width={400}
                        height={400}
                        style={{

                            paddingTop: '50px',
                            display: 'block',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                        }}
                    />

                </div>
                <div className='text-center'>
                    <p className='text-[35px] my-[20px]'>Browse from Over <span className='text-[40px] text-[#87CEEB] font-bold'>200+</span> Jobs</p>
                    <p>Empowering careers through seamless integration, our job-focused platform connects talented individuals with dynamic <br />
                        opportunities,fostering professional growth and success. </p>
                </div>
            </div>

            <div className='flex justify-center items-center'>

                <div className="max-w-md w-full mx-auto bg-white shadow-md p-8 rounded-md " style={{ float: 'left' }}>
                    <Image
                        src="https://i.ibb.co/b2PnZHB/16-removebg-preview.png"
                        alt="Company Logo"
                        width={130}
                        height={130}

                    />
                    <h2 className="text-xl font-bold text-gray-800 mb-2">Card Title</h2>
                    <p className="text-gray-600">This is a simple card example using Tailwind CSS. Customize it as per your needs.</p>
                    <button className="bg-[#87CEEB] text-white px-4 py-2 mt-4 rounded-md hover:bg-[#6495ED] focus:outline-none focus:ring focus:border-blue-300">Read More</button>
                </div>

                <div className="max-w-md w-full mx-auto bg-white shadow-md p-8 rounded-md" style={{ float: 'left' }}>
                    <Image
                        src="https://i.ibb.co/TtCGG6b/17-removebg-preview.png"
                        alt="Company Logo"
                        width={150}
                        height={150}

                    />
                    <h2 className="text-xl font-bold text-gray-800 mb-2">Card Title</h2>
                    <p className="text-gray-600">This is a simple card example using Tailwind CSS. Customize it as per your needs.</p>
                    <button className="bg-[#87CEEB] text-white px-4 py-2 mt-4 rounded-md hover:bg-[#6495ED] focus:outline-none focus:ring focus:border-blue-300">Read More</button>
                </div>

                <div className="max-w-md w-full mx-auto bg-white shadow-md p-8 rounded-md" style={{ float: 'left' }}>
                    <Image
                        src="https://i.ibb.co/1bqM1yW/26-removebg-preview.png"
                        alt="Company Logo"
                        width={100}
                        height={100}

                    />
                    <h2 className="text-xl font-bold text-gray-800 mb-2">Card Title</h2>
                    <p className="text-gray-600">This is a simple card example using Tailwind CSS. Customize it as per your needs.</p>
                    <button className="bg-[#87CEEB] text-white px-4 py-2 mt-4 rounded-md hover:bg-[#6495ED] focus:outline-none focus:ring focus:border-blue-300">Read More</button>
                </div>
            </div>

            
        </div>
    );
};

export default JobM;
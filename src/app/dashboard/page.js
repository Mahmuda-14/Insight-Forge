/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React from 'react';
import DashboardTitle from '@/components/shared/dashboardTitle/dashboardTitle';
import useMyBlog from '../hooks/useMyBlog';
import useSingleUser from '../hooks/useSingleUser';
import Image from 'next/image';
import { FaEdit } from "react-icons/fa";

const page = () => {
    const [myBlog] = useMyBlog()
    console.log(myBlog)
    const [singleUser] = useSingleUser()
    return (
        <div className='mt-20 min-h-screen'>
            <DashboardTitle subTitle='My Profile' headerTitle='Hi, Welcome Back!'></DashboardTitle>

            {
                singleUser?.map((user) =>
                    <div key={user._id} className=" pt-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 lg:gap-5 ">
                            <div className='col-span-1 lg:col-span-2'>
                                <div className='text-center bg-gray-100 p-4 rounded-md'>
                                    {
                                        user?.uPhoto ?
                                            <img alt='user image' className='mx-auto w-[288px] h-[288px] rounded-full  p-3 bg-gray-300' src={user?.uPhoto}/> :
                                            <Image width={288} height={288} alt='user image' className='mx-auto rounded-full  p-3 bg-gray-300' src='https://i.ibb.co/jZM8vtT/profile-icon-design-free-vector.jpg'></Image>
                                    }
                                    <div className="space-y-2 ">
                                        <div className="mt-5 mb-3">
                                            {/* <h4 className="text-lg   font-semibold">Full Name</h4> */}
                                            <h2 className="text-3xl  font-semibold">{user?.uName}</h2>
                                        </div>
                                        <div className="mb-5">
                                            {/* <h4 className="text-lg   font-semibold">Email Address</h4> */}
                                            <h2 className="text-xl  font-semibold">{user?.uEmail}</h2>
                                        </div>
                                    </div>
                                </div>
                                {/* <button className='bg-gray-200 w-full py-4 mt-5 pl-10 rounded-md flex items-center text-[#263238] text-lg font-semibold gap-3'>
                                    <FaEdit /> Edit Profile
                                </button> */}
                            </div>
                            <div className='col-span-1 lg:col-span-3 pt-4 pl-10  bg-gray-100 rounded-md'>
                                <h1 className='font-bold text-xl mb-5'>Bio Graph</h1>
                                <div className='text-gray-700'>
                                    <div className=" mb-3">
                                        <h4 className="text-sm   font-semibold">Id:</h4>
                                        <h2 className="text-lg  font-semibold">{user?._id}</h2>
                                    </div>
                                    <div className=" mb-3">
                                        <h4 className="text-sm   font-semibold">Name:</h4>
                                        <h2 className="text-lg  font-semibold">{user?.uName}</h2>
                                    </div>

                                    <div className='grid lg:grid-cols-2'>
                                        <div className=''>
                                            <div className=" mb-3">
                                                <h4 className="text-sm   font-semibold">Country:</h4>
                                                <h2 className="text-lg  font-semibold">Bangladesh</h2>
                                            </div>
                                            <div className=" mb-3">
                                                <h4 className="text-sm   font-semibold">Permanent Address:</h4>
                                                <h2 className="text-lg  font-semibold">N/A</h2>
                                            </div>
                                            <div className=" mb-3">
                                                <h4 className="text-sm   font-semibold">Workplace:</h4>
                                                <h2 className="text-lg  font-semibold">N/A</h2>
                                            </div>
                                            <div className=" mb-3">
                                                <h4 className="text-sm   font-semibold">Email:</h4>
                                                <h2 className="text-sm  font-medium">{user?.uEmail}</h2>
                                            </div>
                                        </div>


                                        <div className=''>
                                            <div className=" mb-3">
                                                <h4 className="text-sm   font-semibold">Birthday:</h4>
                                                <h2 className="text-lg  font-semibold">N/A</h2>
                                            </div>
                                            <div className=" mb-3">
                                                <h4 className="text-sm   font-semibold">Present Address:</h4>
                                                <h2 className="text-lg  font-semibold">N/A</h2>
                                            </div>
                                            <div className=" mb-3">
                                                <h4 className="text-sm   font-semibold">Post:</h4>
                                                <h2 className="text-lg  font-semibold">N/A</h2>
                                            </div>

                                            <div className=" mb-3">
                                                <h4 className="text-sm   font-semibold">Phone</h4>
                                                <h2 className="text-lg  font-semibold">01*******00</h2>
                                            </div>
                                        </div>
                                    </div>




                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    );
};

export default page;
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';

const UserProfile = ({ user }) => {

    const { birthday } = user || []

    const [formattedTimestamp, setFormattedTimestamp] = useState('');

    useEffect(() => {
        const convertTimestamp = () => {

            const timestamp = new Date(birthday);

            // Use the Intl.DateTimeFormat object with timeZone option
            const formatter = new Intl.DateTimeFormat('en-US', {
                //   timeZone: targetTimezone,
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                //   second: 'numeric',
                //   timeZoneName: 'short',
            });

            const formattedResult = formatter.format(timestamp);

            setFormattedTimestamp(formattedResult);
        };

        convertTimestamp();
    }, [birthday]);

    return (
        <div className="lg:pr-5 lg:pl-8 pt-3">
            <div className="grid grid-cols-1 lg:grid-cols-5  gap-5 mx-auto lg:mx-0">
                <div className='col-span-1 lg:col-span-2 mx-auto lg:mx-0 xl:'>
                    <div className='text-center bg-gray-100 p-4 rounded-md'>
                        {
                            user?.uPhoto ?
                                <img alt='user image' className='mx-auto w-[288px] h-[288px] rounded-full  p-3 bg-gray-300' src={user?.uPhoto} /> :
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
                    <Link href={`/dashboard/updateProfile/${user?._id}`} >
                        <button className='bg-gray-100 hover:bg-gray-200 w-full py-4 mt-5 pl-10 rounded-md flex items-center text-[#263238] text-lg font-semibold gap-3'>
                            <FaEdit /> Edit Profile
                        </button>
                    </Link>
                </div>
                <div className='col-span-1 lg:col-span-3 pt-4 px-10 lg:pl-10  bg-gray-100 rounded-md mx-auto lg:mx-0 xl:'>
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
                                    <h2 className="text-lg  font-semibold">{user?.country === '' ? 'N/A' : user?.country}</h2>
                                </div>
                                <div className=" mb-3">
                                    <h4 className="text-sm   font-semibold">Permanent Address:</h4>
                                    <h2 className="text-lg  font-semibold">{user?.permanentAddress === '' ? 'N/A' : user?.permanentAddress}</h2>
                                </div>
                                <div className=" mb-3">
                                    <h4 className="text-sm   font-semibold">Workplace:</h4>
                                    <h2 className="text-lg  font-semibold">{user?.Workplace === '' ? 'N/A' : user?.Workplace}</h2>
                                </div>
                                <div className=" mb-3">
                                    <h4 className="text-sm   font-semibold">Email:</h4>
                                    <h2 className="text-sm  font-medium">{user?.uEmail === '' ? 'N/A' : user?.uEmail}</h2>
                                </div>
                            </div>


                            <div className=''>
                                <div className=" mb-3">
                                    <h4 className="text-sm   font-semibold">Birthday:</h4>
                                    <h2 className="text-lg  font-semibold">{user?.birthday === '' ? 'N/A' : formattedTimestamp}</h2>
                                </div>
                                <div className=" mb-3">
                                    <h4 className="text-sm   font-semibold">Present Address:</h4>
                                    <h2 className="text-lg  font-semibold">{user?.presentAddress === '' ? 'N/A' : user?.presentAddress}</h2>
                                </div>
                                <div className=" mb-3">
                                    <h4 className="text-sm   font-semibold">Post:</h4>
                                    <h2 className="text-lg  font-semibold">{user?.post === '' ? 'N/A' : user?.post}</h2>
                                </div>

                                <div className=" mb-3">
                                    <h4 className="text-sm   font-semibold">Phone</h4>
                                    <h2 className="text-lg  font-semibold">{user?.phone === '' ? 'N/A' : user?.phone}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
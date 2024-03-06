/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React from 'react';
import DashboardTitle from '@/components/shared/dashboardTitle/dashboardTitle';
import useMyBlog from '../hooks/useMyBlog';
import useSingleUser from '../hooks/useSingleUser';
import Image from 'next/image';
import { FaEdit } from "react-icons/fa";
import Link from 'next/link';
import UserProfile from './UserProfile';

const page = () => {
    const [myBlog] = useMyBlog()
    const [singleUser] = useSingleUser()
    return (
        <div className='mt-20 min-h-screen'>
            <DashboardTitle subTitle='My Profile' headerTitle='Hi, Welcome Back!'></DashboardTitle>

            {
                singleUser?.map((user) =>
                    <UserProfile key={user._id} user={user}></UserProfile>
                )
            }

        </div>
    );
};

export default page;
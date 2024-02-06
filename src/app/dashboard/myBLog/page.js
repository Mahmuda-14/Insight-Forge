/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React from 'react';
import DashboardTitle from '@/components/shared/dashboardTitle/dashboardTitle';
import useMyBlog from '@/app/hooks/useMyBlog';
import BlogCard from './BlogCard';

const page = () => {
    const [myBlog, refetch] = useMyBlog()
    console.log(myBlog)
    return (
        <div className='mt-20 min-h-screen'>
            <DashboardTitle subTitle='Your Posted Blogs' headerTitle='See your all blog'></DashboardTitle>
            <div>
                {
                    myBlog?.map(item => <BlogCard key={item?._id} item={item}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default page;
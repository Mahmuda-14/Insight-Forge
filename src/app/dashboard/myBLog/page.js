/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React from 'react';
import DashboardTitle from '@/components/shared/dashboardTitle/dashboardTitle';
import useMyBlog from '@/app/hooks/useMyBlog';
import BlogCard from './BlogCard';

const page = () => {
    const [myBlog, refetch] = useMyBlog()
    return (
        <div className='mt-20 min-h-screen'>
            <DashboardTitle subTitle='Your Posted Blogs' headerTitle='See your all blog'></DashboardTitle>
            <div className='md:pr-3 md:pl-20 pl-[56px]'>

            {myBlog && myBlog.length > 0 ? (
                        
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    myBlog?.map(item => <BlogCard key={item?._id} item={item}></BlogCard>)
                }
            </div>
                    ) : (
                        <p className='text-center'>No blog available.</p>
                    )}

            </div>
        </div>
    );
};

export default page;
/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import useAxiosPublic from '@/app/hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import DashboardTitle from '@/components/shared/dashboardTitle/dashboardTitle';
import Update from './Update';


const page = ({ params }) => {
    const axiosPublic = useAxiosPublic()
    const { data:blog=[], refetch } = useQuery({
        queryKey: ['blog'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/blog/${params.id}`);
            return res.data
        }
    })

    

    

    return (
        <div className='mt-20 min-h-screen min-w-full ml-10'>

			<DashboardTitle subTitle="What is the new update?" headerTitle='Update your blog'></DashboardTitle>

            <Update  blog={blog}></Update>
		</div>
    );
};

export default page;
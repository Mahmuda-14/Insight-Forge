/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import useAxiosPublic from '@/app/hooks/useAxiosPublic';
import { TextField } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import DashboardTitle from '@/components/shared/dashboardTitle/dashboardTitle';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useForm } from 'react-hook-form';
import Update from './Update';


const page = ({ params }) => {
    const axiosPublic = useAxiosPublic()
    const { data, refetch } = useQuery({
        queryKey: ['blog'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/blog/${params.id}`);
            return res.data
        }
    })
    console.log(data?.category)

    

    

    return (
        <div className='mt-20 min-h-screen min-w-full'>

			<DashboardTitle subTitle="What is the new update?" headerTitle='Update your blog'></DashboardTitle>

            <Update data={data}></Update>
		</div>
    );
};

export default page;
/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from '@/app/hooks/useAxiosPublic';

const page = ({ params }) => {
    console.log(params.id)

    const axiosPublic = useAxiosPublic()
    const { refetch, data}= useQuery({
        queryKey: ['discuss'],
        queryFn: async()=>{
            const res = await axiosPublic.get(`/discuss/${params.id}`);
            return res.data
        }
    })

    console.log(data)


    return (
        <div>
            alkdfja;lsdkjfa;ld
        </div>
    );
};

export default page;
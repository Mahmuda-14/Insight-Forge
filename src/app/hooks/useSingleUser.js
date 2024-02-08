'use client'
import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query'

const useSingleUser = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
    const { refetch, data: singleUser = []}= useQuery({
        queryKey: ['singleUser', user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/singleUser?email=${user?.email}`);
            return res.data
        }
    })

    return [singleUser, refetch]
};

export default useSingleUser;
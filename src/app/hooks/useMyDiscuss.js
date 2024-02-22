'use client'
import React from 'react';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useMyDiscuss = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
    const { refetch: reloadMyDiscuss, data: myDiscuss = []}= useQuery({
        queryKey: ['myDiscuss', user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/myDiscuss?email=${user?.email}`);
            return res.data
        }
    })

    return [myDiscuss, reloadMyDiscuss]
};

export default useMyDiscuss;
'use client'
import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useMyBlog = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
    const { refetch, data: myBlog = []}= useQuery({
        queryKey: ['myBlog', user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/myBlog?email=${user?.email}`);
            return res.data
        }
    })

    return [myBlog, refetch]
};

export default useMyBlog;
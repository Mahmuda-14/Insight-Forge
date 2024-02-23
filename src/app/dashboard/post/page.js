/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import useAxiosPublic from '@/app/hooks/useAxiosPublic';
import React, { useEffect, useState } from 'react';
import My from './My';
import useAuth from '@/app/hooks/useAuth';

const page = () => {

    const [job, setJobs] = useState([]);
    const axiosPublic = useAxiosPublic();
    const {user} = useAuth()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
       
      axiosPublic.get(`/myjob?email =${user?.email}`)
        .then(res => {
          setJobs(res.data)
        })
  
    }, [axiosPublic])

    return (
        <div className='mt-20 min-h-screen'>
        {/* <DashboardTitle subTitle='Your Posted Blogs' headerTitle='See your all blog'></DashboardTitle> */}
        <div className='md:pr-3 md:pl-20 pl-[56px]'>

        {job && job.length > 0 ? (
                    
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {
                job?.map(item => <My key={item?._id} item={item}></My>)
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
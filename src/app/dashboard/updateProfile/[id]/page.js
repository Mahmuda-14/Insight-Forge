'use client'
import useSingleUser from '@/app/hooks/useSingleUser';
import React from 'react';
import DashboardTitle from '@/components/shared/dashboardTitle/dashboardTitle';
import ProfileUpdate from './ProfileUpdate';

const UpdateProfile = ({ params }) => {
    const [singleUser] = useSingleUser()
    
    return (
        <div className='mt-20 min-h-screen w-[760px] mx-auto'>
            <DashboardTitle subTitle='What is the new update?' headerTitle='Edit Your Profile'></DashboardTitle>
            {
                singleUser?.map((user)=> <ProfileUpdate key={user?._id} user={user}></ProfileUpdate>)
            }
        </div>
    );
};

export default UpdateProfile;
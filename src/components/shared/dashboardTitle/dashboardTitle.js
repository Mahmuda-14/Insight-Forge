import { Divider } from '@mui/material';
import React from 'react';

const dashboardTitle = ({ subTitle, headerTitle }) => {
    return (
        <div className="my-10 text-center">
            <h1 className=" font-semibold text-2xl md:text-5xl text-[#4f675b]">{headerTitle}</h1>
            <div className='w-1/2 mx-auto'>
            <Divider className="font-semibold text-center text-[#4f675b]">Insight Forge</Divider>
            </div>
            <p className='font-semibold text-lg md:text-xl text-[#4f675b]'>{subTitle}</p>
        </div>
    );
};

export default dashboardTitle;
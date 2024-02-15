import { Divider } from '@mui/material';
import React from 'react';

const dashboardTitle = ({ subTitle, headerTitle }) => {
    return (
        <div className="my-10 text-center mx-auto">
            <h1 className=" font-semibold text-2xl md:text-5xl text-[#263238]">{headerTitle}</h1>
            <div className='w-1/2 mx-auto'>
            <Divider className="font-semibold text-center text-[#21292e]">Insight Forge</Divider>
            </div>
            <p className='font-semibold text-lg md:text-xl text-[#263238]'>{subTitle}</p>
        </div>
    );
};

export default dashboardTitle;
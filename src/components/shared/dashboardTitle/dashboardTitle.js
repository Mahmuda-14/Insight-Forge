import { Divider } from '@mui/material';
import React from 'react';

const dashboardTitle = ({ subTitle, headerTitle }) => {
    return (
        <div className="my-10 text-center">
            <h1 className=" font-semibold text-2xl md:text-5xl text-[#4ba8d0]">{headerTitle}</h1>
            <Divider className="  text-[#6acdf8]">Insight Forge</Divider>
            <p className=' text-lg md:text-xl text-[#4ba8d0]'>{subTitle}</p>
        </div>
    );
};

export default dashboardTitle;
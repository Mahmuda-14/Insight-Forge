import useHackathonData from '@/app/hooks/useHackathonData';
import { Box, Paper, Typography } from '@mui/material';
import React from 'react';
import SingleHackathoncard from './singleHackathoncard';

const Hackathoncards = () => {

    const [allhackathon, reload] = useHackathonData();

    // console.log(allhackathon);
    return (
        <Box  sx={{maxWidth:"xl", mx:"auto"}}>
            <Typography variant="h4" sx={{ px: '12px', py: '5px', color: 'black', fontWeight: 500, textAlign:"center", my:10 }}>Choose Your <span className='text-[#4f675b] font-bold'>Hackathon</span> From Here</Typography>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
                {
                    allhackathon.map((hackathon)=><SingleHackathoncard key={hackathon._id} hackathon={hackathon}></SingleHackathoncard>)
                }

             </div>
           
            
        </Box>
    );
};

export default Hackathoncards;
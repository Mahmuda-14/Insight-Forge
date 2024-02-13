import useHackathonData from '@/app/hooks/useHackathonData';
import { Paper, Typography } from '@mui/material';
import React from 'react';
import SingleHackathoncard from './singleHackathoncard';

const Hackathoncards = () => {

    const [allhackathon, reload] = useHackathonData();

    // console.log(allhackathon);
    return (
        <div className='w-[450px] md:w-[600px] lg:w-[1200px] mx-auto'>
             <Paper elevation={10} sx={{ maxWidth: '400px', mx: 'auto', my: 4, background: 'white', py: 2, px: 1 }}><Typography variant="h4" sx={{ px: '12px', py: '5px', color: 'black', fontWeight: 600, textAlign:"center" }}>Choose Your Hackathon From Here</Typography></Paper>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                {
                    allhackathon.map((hackathon)=><SingleHackathoncard key={hackathon._id} hackathon={hackathon}></SingleHackathoncard>)
                }

             </div>
           
            
        </div>
    );
};

export default Hackathoncards;
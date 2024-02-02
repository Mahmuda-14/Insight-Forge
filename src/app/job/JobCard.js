
"use client";
// eslint-disable-next-line react-hooks/rules-of-hooks
import React, { useEffect, useState } from 'react';
// import Image from 'next/image'; 
// import bg2 from '../../../public/job1.svg';
import Job from './Job';
import useAxiosPublic from '../hooks/useAxiosPublic';





const JobCard = () => {

 
    const [job, setJobs] = useState([]);
    const axiosPublic = useAxiosPublic();

 // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {

        axiosPublic.get('/job')
          .then(res => {
            setJobs(res.data)
          })
    
      }, [])


    return (

         <div className='grid grid-cols-4 gap-3 mx-4 my-7'>
            {
                job.map(item => <Job key={item.id} item={item}></Job>)
            }

        </div>  

    );
};

export default JobCard;


// import React from 'react';
// import { motion } from 'framer-motion';

// const JobCard = () => {
//   return (
//     <motion.div
//       className="box"
//       whileHover={{ scale: 1.5 }}
//       transition={{ duration: 0.3 }}
//     >
//       <div className="card">
//         {/* Your card content goes here */}
//         <h2>Job Title</h2>
//         <p>Description of the job...</p>
//         <button>Apply Now</button>
//       </div>
//     </motion.div>
//   );
// };

// export default JobCard;




// import React from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image'; 
// import bg2 from '../../../public/job1.svg';

// const JobCard = () => {
//   const cardVariants = {
//     initial: { opacity: 0, y: 20 },
//     animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   };

//   return (
//     <div className='grid grid-cols-4 gap-3 mx-4'>
//       <motion.div
//         className="w-[21rem] h-[20rem] bg-white border-y-2 shadow-xl p-5 my-5"
//         variants={cardVariants}
//         initial="initial"
//         animate="animate"
//       >
//         <Image src={bg2} alt='company' className='w-10 h-11' />
//         <h2 className='text-2xl mt-6 mb-4 font-semibold text-black text-left'>Design & Creatives</h2>
//         <p className='text-xl text-slate-400 text-left'>The Automated process to get a good Job</p>
//         <button className='bg-teal-600 text-white p-3 rounded-xl mt-8'>Apply Now</button>
//       </motion.div>

//       {/* Repeat the same structure for other cards */}
//     </div>
//   );
// };

// export default JobCard;

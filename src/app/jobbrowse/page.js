'use client'

import React, { useEffect, useState } from 'react';
import '../../utils/button/theme_button.css';
import useAxiosPublic from '../hooks/useAxiosPublic';
import '../../components/banner/banner.css';
import Job from '../job/Job';
import Image from 'next/image';
import DrawerAppBar from '@/components/shared/Navbar/Navbar';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Footer from '@/components/shared/footer/Footer';
import toast from 'react-hot-toast';

const Page = () => {
  const [jobs, setJobs] = useState([]);
  const axiosPublic = useAxiosPublic();
  const [search, setSearch] = useState('');
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    if (!dataLoaded) {
      axiosPublic.get('/job')
        .then(res => {
          setJobs(res.data);
          setDataLoaded(true);
        })
        .catch(error => {
          toast.error("Something was wrong");
        });
    }
  }, [axiosPublic, dataLoaded]);

  const handleSearch = () => {
    const filteredJobs = jobs.filter(item => item.jobtitle.toLowerCase().includes(search.toLowerCase()));
    setJobs(filteredJobs);
  };

  return (
    <div>
      <DrawerAppBar />
      <div>
        <div className="relative mx-auto" style={{
            backgroundImage: 'url("https://i.ibb.co/nn81SgZ/job.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '348px'
          }}>
         
          
          <div className='absolute sm:-left-0 lg:left-[460px] top-[99px]'>
            <h2 className=' text-white mb-10 sm:text-5xl lg:text-5xl  text-center font-bold'>Find your dream job.</h2>
            <div className='flex  '>
              <SearchRoundedIcon style={{ width: '1.5em ', height: '2em', position: 'relative', top: '3px', left: '41px', color: 'gray' }} />
              <input
                name="text"
                type="text"
                placeholder="Search here"
                className="input input-bordered border-2 sm:pr-0 sm:pl-[39px] lg:pr-[98px] lg:pl-[11.8rem] py-2 rounded-xl"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button type="button" onClick={handleSearch} className='blog-button mx-[10px]'>
                Search
              </button>
            </div>
          </div>
        </div>

      </div>

      <div>
        <div>
          <Image
            src="https://i.ibb.co/6tqPZ1g/download-2.gif"
            alt="Company Logo"
            width={250}
            height={250}
            style={{
              paddingTop: '50px',
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          />
        </div>
        <div className=' text-center mt-[50px] mb-[100px]'>
          <h2 className=' text-[40px] font-bold text-[#4f675b]'>Browse top jobs</h2>
          <p className='text-[18px] text-center mt-[30px] mb-[60px] mx-auto text-black'>Empowering careers through seamless integration, our job-focused platdiv connects talented <br />individuals with dynamic opportunities,fostering professional growth and success.</p>
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mx-7 my-7'>
          {jobs.length > 0 ? (
            jobs.map(item => <Job key={item.id} item={item}></Job>)
          ) : (
            <p>No data available.</p>
          )}
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Page;

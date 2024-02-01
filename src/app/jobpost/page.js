import { Divider } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
     <div>
           <div className="relative mx-auto"  style={{
            backgroundImage: 'url("https://i.ibb.co/f1C0Ch6/pexels-vojtech-okenka-392018.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height:'500px'
          }}>
          <div >
          <p  className='text-left text-white text-[80px] p-[50px]'>Post a Job</p>
          <Divider sx={{ backgroundColor: '#ffffff'}} />
        </div>
        </div>


        <div>
        <div className="container mx-auto mt-8">
      <form  className="max-w-md mx-auto">
        <div className="mb-12">
          <label htmlFor="jobtitle" className="block text-gray-700 text-[25px] mb-2">
            Job Title:
          </label>
          <input
            type="text"
            id="jobtitle"
            name="jobtitle"
            className="border rounded w-full py-2 px-3"
            placeholder="Enter Job Title"
          />
        </div>
        <div className="mb-12">
          <label htmlFor="companyname" className="block text-gray-700 text-[25px] mb-2">
            Company Name:
          </label>
          <input
            type="text"
            id="companyname"
            name="companyname"
            className="border rounded w-full py-2 px-3"
            placeholder="Enter Company Name"
          />
        </div>
        <div className="mb-12">
          <label htmlFor="location" className="block text-gray-700 text-[25px] mb-2">
          Location:
          </label>
          <input
            type="text"
            id="location"
            name="location"
            className="border rounded w-full py-2 px-3"
            placeholder="Enter location"
          />
        </div>

        <div className="mb-12">
          <label htmlFor="jobtype" className="block text-gray-700 text-[25px] mb-2">
          Job Type:
          </label>
          <select
            // value={selectedJob}
            //onChange={handleJobSelection}
            className="mt-4 p-2 border rounded-md"
          >
            <option value="" disabled>
              Select a job
            </option>
            <option value="job1">Job 1</option>
            <option value="job2">Job 2</option>
            <option value="job3">Job 3</option>
          </select>
        </div>


        <div className="mb-4">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
        </div>

     </div>
      );
    };

export default page;


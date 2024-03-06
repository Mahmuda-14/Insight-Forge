/* eslint-disable jsx-a11y/alt-text */


/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import useAuth from "@/app/hooks/useAuth";
import useAxiosPublic from "@/app/hooks/useAxiosPublic";
import Image from "next/image";
import re2 from '../../../../public/team.jpg'
import toast from 'react-hot-toast';
import '../../../utils/button/theme_button.css'
import { useForm } from "react-hook-form";


const page = () => {

  const { register, handleSubmit, reset } = useForm()
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic()
  const UserEmail = user?.email



  const onSubmit = async (data) => {
    const jobtitle = data.jobtitle;
    const companyname = data.companyname;
    const logo = data.logo;
    const location = data.location;
    const description = data.description;
    const jobtype = data.jobtype;


    const userEmail = user?.email || "unknown@example.com"; // Fallback email address if user is undefined

    const blogItem = {
      userEmail,
      jobtitle,
      logo,
      location,
      description,
      companyname,
      jobtype,
    };

    axiosPublic.post('/job', blogItem)
      .then(res => {
        if (res.status === 200) {
          toast.success("Your job has been posted");
          reset();
        }
      })
      .catch(error => {
        toast.error("Something was wrong");
      });
  };





  return (
    <div>
      <div >

        <Image style={{ width: '1500px', height: '300px' }} src={re2} alt="background"></Image>

      </div>


      <div className='lg:flex md:flex-col-1 sm:flex-col-1 justify-center items-start'>
        <div className="container p-4 mt-8">

          <form onSubmit={handleSubmit(onSubmit)} className="lg:w-[940px] border-t-4 border-t-green-900 md:w-[600px] lg:-mt-[194px]  sm:w-[500px] sm:ml-[47px] lg:ml-[22.8rem] sm:mr-0 lg:mr-11 bg-white lg:p-8 rounded shadow-md">


            <div className="flex sm:flex-none lg:flex-row gap-2  mt-[80px]">

              <div className="sm:w-full lg:w-1/2">
                <label className=" text-[#4f675b] text-[22px] mb-2">
                  Job Title
                </label>

                <input className="border rounded w-full py-2 px-3" placeholder="Enter Job Title" required {...register("jobtitle")} type="text" id='coverImg' />



              </div>
              <div className="sm:w-full lg:w-1/2">
                <label className=" text-[#4f675b] text-[22px] mb-2">
                  Company Name
                </label>


                <input className="border rounded w-full py-2 px-3" placeholder="Enter Company Name" required {...register("companyname")} type="text" />


              </div>

            </div>


            <div className="flex flex-row gap-3 mt-[46px]">
              <div className="w-1/3">
                <label className="block text-[#4f675b] text-[22px] mb-2">
                  Company Logo
                </label>

                <input type="img" className="border rounded w-full py-2 px-3" placeholder="Enter Logo" required {...register("logo")} />

              </div>

              <div className=" w-1/3">
                <label className="block text-[#4f675b] text-[22px] mb-2">
                  Location
                </label>

                <input className="border rounded w-full py-2 px-3" placeholder="Enter location" required {...register("location")} type="text" />
              </div>

              <div className=" w-1/3">
                <label className="block text-[#4f675b] text-[22px] mb-2">
                  Job Type
                </label>
                <select type="text" className='w-full border p-2 rounded-md outline-none ' defaultValue='' {...register("jobtype")} >
                  <option value="" disabled>
                    Select a job
                  </option>
                  <option value="job1">Remote</option>
                  <option value="job2">Freelance</option>
                  <option value="job3">Full-time</option>
                </select>
              </div>
            </div>

            <div className="mb-12 mt-5">
              <label className="block text-[#315e47] text-[22px] mb-2">
                Description:
              </label>
              <textarea {...register("description")}

                className="border rounded w-full py-2 px-3"
                placeholder="Enter Job Description"
                rows="4"
              />
            </div>

            <div className="mb-4">
              <button
                type="submit"
                className="blog-button items-center left-[360px]"
              >
                Post Job
              </button>
            </div>
          </form>


        </div>

      </div>

    </div>
  );
};

export default page;


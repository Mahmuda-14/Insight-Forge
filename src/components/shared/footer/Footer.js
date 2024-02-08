import React from 'react';

import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Image from 'next/image';
import Link from 'next/link';

import bg2 from "../../../assets/logo3.png"

const Footer = () => {
  return (
<div>
<div className="bg-[#4f675b] w-full lg:h-[210px] md:h-[330px] sm:h-[550px] p-10">
      <div className='lg:flex md:flex-col-1 sm:flex-col-1 justify-around items-center '>
        <div className='flex flex-col justify-center items-center  text-left'>
          <Image sx={{ flexGrow: 1 }} src={bg2} alt='company' width={80} height={80} />
          <p className="text-[18px] text-white"><span className="font-a text-black">Insight Forge</span> Companies Ltd.</p>
          <p className="text-[12px] text-white">Providing reliable tech since 2021</p>
        </div>

       <div className='lg:flex md:flex sm:flex-col-1 justify-around items-center lg:gap-[60px] md:gap-[10px] sm:gap-[10px]'>
       <div className=' lg:mt-[0px] md:mt-[20px] sm:mt-[10px]'>
          <p className='text-[18px] text-white mb-[10px] font-bold'>Location</p>
          <div className='flex justify-start items-left'>
            <Image
              src="https://i.ibb.co/dbBYfrG/k-removebg-preview-1.png"
              alt="Company Logo"
              width={25}
              height={25}
              style={{ marginBottom: '5px' }}
            />
            <p className='text-[12px] text-white'> Chittagong</p>
          </div>
          <div className='flex justify-start items-left'>
            <Image
              src="https://i.ibb.co/6gq3mGB/kk-removebg-preview-1.png"
              alt="Company Logo"
              width={25}
              height={25}
              style={{ marginBottom: '5px' }}
            />
            <p className='text-[12px] text-white'> insightforge@gmail.com</p>
          </div>
          <div className='flex justify-start items-left'>
            <Image
              src="https://i.ibb.co/pRkV9h5/kkk-removebg-preview.png"
              alt="Company Logo"
              width={25}
              height={25}
              style={{ marginBottom: '5px' }}
            />
            <p className='text-[12px] text-white'> +880 01234567890</p>
          </div>
        </div>




        <div className=' lg:mt-[0px] md:mt-[20px] sm:mt-[10px]'>
          <p className='text-[18px] text-white mb-[10px] font-bold'>Services</p>

          <div className='flex flex-col justify-start items-left gap-3'>
            <Link href="#">
              <p className='text-[12px] text-white'>
                Theme Development
              </p>
            </Link>
            <Link href="#">
              <p className='text-[12px] text-white'>
                Web Designing
              </p>
            </Link>
            <Link href="#">
              <p className='text-[12px] text-white'>
                Web Development
              </p>
            </Link>
          </div>
        </div>

        <div className="text-white  lg:mt-[0px] md:mt-[20px] sm:mt-[10px]">
          <p className="text-[18px] text-white mb-[10px] font-bold">Site Links</p>

          <div class="flex flex-col justify-start items-left space-y-2 mt-4">
            <a href="https://www.youtube.com/your-youtube-channel" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 text-white">

              <YouTubeIcon sx={{ fontSize: 20, color: 'white' }} />
              <p class="text-[12px]">Your YouTube Link</p>
            </a>

            <a href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 text-white">
              <FacebookIcon sx={{ fontSize: 20, color: 'white' }} />
              <p class="text-[12px]">Your Facebook Link</p>
            </a>

            <a href="https://www.instagram.com/your-instagram-account" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 text-white">
              <InstagramIcon sx={{ fontSize: 20, color: 'white' }} />
              <p class="text-[12px]">Your Instagram Link</p>
            </a>
          </div>
        </div>

       </div>



      </div>


</div>


      <div className="mx-auto max-w-7xl">
        <hr className="border-t border-white " />
        <div className=" text-black text-center text-[12px]">
          <p>&copy; 2024 Insight Forge. All rights reserved.</p>
        </div>
      </div>
</div>
  

  );
};



export default Footer;

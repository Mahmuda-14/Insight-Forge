'use client'
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image'


const Member = () => {

  return (
<div>
    <div className='flex justify-around items-center'>
    <Image src="https://i.ibb.co/dpNJ2jH/Untitled-design-removebg-preview.png" alt='ok' width={400} height={400}></Image>
    </div>
    <p className='text-[40px] text-black font-bold text-center mt-[-230px]'>
        INSIGHT FORGE <span className='text-[#4f675b]'>TEAM</span>
    </p>
<section className='py-12 h-[500px]  lg:w-[1000px] md:w-[700px] sm:w-[615px] flex justify-center items-center mx-auto my-[150px]' style={{ backgroundImage: "url('https://i.ibb.co/wpt44Px/o.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className='container'>
        <Swiper
          navigation
        //   pagination={{ type: 'bullets'}}
          modules={[Navigation, Pagination]}
          onSwiper={swiper => console.log(swiper)}
          className='h-96 lg:w-[1000px] md:w-[700px] sm:w-[615px] rounded-lg'
        >
      
      <SwiperSlide>
            <div className='flex justify-around items-center'>
                <div className='flex justify-center items-center lg:w-[350px] md:w-[280px] sm:w-[200px]'>
                <Image src="  https://i.ibb.co/SBySBZg/r.jpg" alt='ok' width={350} height={350} className="sm:rounded-full lg:rounded-full md:rounded-full"></Image>
                </div>
                <div>
                    <p className='text-[22px] font-bold text-black'>Riziya Akter Keya</p>
                    <p className='text-[15px]  text-black lg:mt-[25px] md:mt-[0px] sm:mt-[0px]'>I am Riziya, a passionate and creative front-end web<br/> developer. 
                       I am on a mission to craft immersive and<br/> memorable digital 
                       experiences.
                    </p>
                    <div className='flex justify-center items-center gap-[20px] mt-[20px]'>
                    <a href="https://t.me/your-telegram-channel" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 text-white">
                      <TelegramIcon sx={{ fontSize: 23, color: 'black' }} />
                    </a>

                   <a href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 text-white">
                   <FacebookIcon sx={{ fontSize: 20, color: 'black' }} />
                   </a>

                   <a href="https://www.instagram.com/your-instagram-account" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 text-white">
                   <InstagramIcon sx={{ fontSize: 20, color: 'black' }} />
                   </a>
                   <a href="https://github.com/shoptorshiria78" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white">
                    <GitHubIcon sx={{ fontSize: 20, color: 'black' }} />
                </a>
                <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white">
                    <LinkedInIcon sx={{ fontSize: 20, color: 'black' }} />
                </a>
                  </div>
                </div>
            </div>
          
        </SwiperSlide>
       
        <SwiperSlide>
            <div className='flex justify-around items-center'>
                <div className='flex justify-center items-center lg:w-[350px] md:w-[280px] sm:w-[200px]'>
                <Image src="https://i.ibb.co/kQQ6PHq/sh.jpg" alt='ok' width={350} height={350} className="sm:rounded-full lg:rounded-full md:rounded-full"></Image>
                </div>
                <div>
                    <p className='text-[22px] font-bold text-black'>Shariar Alam Emon</p>
                    <p className='text-[15px]  text-black lg:mt-[25px] md:mt-[0px] sm:mt-[0px]'>I am Shariar, a passionate and creative front-end web<br/> developer. 
                       I am on a mission to craft immersive and<br/> memorable digital 
                       experiences.
                    </p>
                    <div className='flex justify-center items-center gap-[20px] mt-[20px]'>
                    <a href="https://t.me/your-telegram-channel" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 text-white">
                      <TelegramIcon sx={{ fontSize: 23, color: 'black' }} />
                    </a>

                   <a href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 text-white">
                   <FacebookIcon sx={{ fontSize: 20, color: 'black' }} />
                   </a>

                   <a href="https://www.instagram.com/your-instagram-account" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 text-white">
                   <InstagramIcon sx={{ fontSize: 20, color: 'black' }} />
                   </a>
                   <a href="https://github.com/Shariar2006" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white">
                    <GitHubIcon sx={{ fontSize: 20, color: 'black' }} />
                </a>
                <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white">
                    <LinkedInIcon sx={{ fontSize: 20, color: 'black' }} />
                </a>
                  </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex justify-around items-center'>
                <div className='flex justify-center items-center lg:w-[350px] md:w-[280px] sm:w-[200px]'>
                <Image src="https://i.ibb.co/jRcVJCy/monir.jpg" alt='ok' width={350} height={350} className="sm:rounded-full lg:rounded-full md:rounded-full"></Image>
                </div>
                <div>
                    <p className='text-[22px] font-bold text-black'>Monir Hossain</p>
                    <p className='text-[15px]  text-black lg:mt-[25px] md:mt-[0px] sm:mt-[0px]'>I am Monir, a passionate and creative front-end web<br/> developer. 
                       I am on a mission to craft immersive and<br/> memorable digital 
                       experiences.
                    </p>
                    <div className='flex justify-center items-center gap-[20px] mt-[20px]'>
                    <a href="https://t.me/your-telegram-channel" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 text-white">
                      <TelegramIcon sx={{ fontSize: 23, color: 'black' }} />
                    </a>

                   <a href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 text-white">
                   <FacebookIcon sx={{ fontSize: 20, color: 'black' }} />
                   </a>

                   <a href="https://www.instagram.com/your-instagram-account" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 text-white">
                   <InstagramIcon sx={{ fontSize: 20, color: 'black' }} />
                   </a>
                   <a href="https://github.com/codebuildermonir" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white">
                    <GitHubIcon sx={{ fontSize: 20, color: 'black' }} />
                </a>
                <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white">
                    <LinkedInIcon sx={{ fontSize: 20, color: 'black' }} />
                </a>
                  </div>
                </div>
            </div>
        </SwiperSlide>
        
        <SwiperSlide>
        <div className='flex justify-around items-center'>
                <div className='flex justify-center items-center lg:w-[350px] md:w-[280px] sm:w-[200px]'>
                <Image src="https://i.ibb.co/ngcPkGn/mamu.jpg" alt='ok' width={350} height={350} className="sm:rounded-full lg:rounded-full md:rounded-full"></Image>
                </div>
                <div>
                    <p className='text-[22px] font-bold text-black'>Mosammat Mahmuda Sultana</p>
                    <p className='text-[15px]  text-black lg:mt-[25px] md:mt-[0px] sm:mt-[0px]'>I am Mahmuda, a passionate and creative front-end web<br/> developer. 
                       I am on a mission to craft immersive and<br/> memorable digital 
                       experiences.
                    </p>
                    <div className='flex justify-center items-center gap-[20px] mt-[20px]'>
                    <a href="https://web.telegram.org/a/#5242521625" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 text-white">
                      <TelegramIcon sx={{ fontSize: 23, color: 'black' }} />
                    </a>

                   <a href="https://www.facebook.com/Subarna.1425" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 text-white">
                   <FacebookIcon sx={{ fontSize: 20, color: 'black' }} />
                   </a>

                   <a href="https://www.instagram.com/your-instagram-account" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 text-white">
                   <InstagramIcon sx={{ fontSize: 20, color: 'black' }} />
                   </a>
                   <a href="https://github.com/Mahmuda-14" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white">
                    <GitHubIcon sx={{ fontSize: 20, color: 'black' }} />
                </a>
                <a href="https://www.linkedin.com/in/mahmuda-sultana-70202520a/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white">
                    <LinkedInIcon sx={{ fontSize: 20, color: 'black' }} />
                </a>
                  </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex justify-around items-center'>
                <div className='flex justify-center items-center lg:w-[350px] md:w-[280px] sm:w-[200px]'>
                <Image src="https://i.ibb.co/db05kNd/u.jpg" alt='ok' width={350} height={350} className="sm:rounded-full lg:rounded-full md:rounded-full"></Image>
                </div>
                <div>
                    <p className='text-[22px] font-bold text-black'>Nur Nahar Muna</p>
                    <p className='text-[15px]  text-black lg:mt-[25px] md:mt-[0px] sm:mt-[0px]'>I am Muna, a passionate and creative front-end web<br/> developer. 
                       I am on a mission to craft immersive and<br/> memorable digital 
                       experiences.
                    </p>
                    <div className='flex justify-center items-center gap-[20px] mt-[20px]'>
                    <a href="https://web.telegram.org/a/#5224811193" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 text-white">
                      <TelegramIcon sx={{ fontSize: 23, color: 'black' }} />
                    </a>

                   <a href="https://www.facebook.com/nurnahar.muna.9" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 text-white">
                   <FacebookIcon sx={{ fontSize: 20, color: 'black' }} />
                   </a>

                   <a href="https://www.instagram.com/your-instagram-account" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 text-white">
                   <InstagramIcon sx={{ fontSize: 20, color: 'black' }} />
                   </a>
                   <a href="https://github.com/muna2411" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white">
                    <GitHubIcon sx={{ fontSize: 20, color: 'black' }} />
                </a>
                <a href="https://www.linkedin.com/in/nur-nahar-muna-0084142a4/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white">
                    <LinkedInIcon sx={{ fontSize: 20, color: 'black' }} />
                </a>
                  </div>
                </div>
            </div>
        </SwiperSlide>
        
        </Swiper>
      </div>
    </section>
</div>
  )
}
export default Member;

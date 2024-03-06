/* eslint-disable jsx-a11y/alt-text */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { Box, Divider } from '@mui/material';
import re from '../../../public/Image/1.jpg'
import re1 from '../../../public/Image/6.jpg'
import re2 from '../../../public/Image/3.jpg'


const Banner = () => {
    return (
        <Box position={'relative'} zIndex={5}>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{ delay: 3000, disableOnInteraction: false }}               
                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div id="item1" className="carousel-item relative w-full">
                        <Image style={{ width: '100%', height: '500px' }} src={re}></Image>
                        <div className="  absolute flex items-center h-full top-0 left-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21,)]">
                            <div className=' text-white space-y-7 pl-[1rem] md:pl-[1.5rem] lg:pl-[16rem] mx-6 text-center'>

                                <h2 className=' text-5xl font-bold  font-serif' >Welcome to the World of Knowledge Sharing </h2>

                                <div className='flex flex-row'>
                                    <Divider orientation='horizontal' style={{ backgroundColor: '#4c5d57', paddingLeft: '7px', paddingTop: '105px', marginLeft: '9px' }}></Divider>
                                    <p className="mb-5 text-white  ml-7 mr-[182px]">
                                        <TypeAnimation
                                            sequence={[

                                                'Unlocking Wisdom, Empowering Minds: Explore a World of Knowledge with Insight Forge',
                                                1000,
                                                'Our Knowledge Share Platform.... ',
                                                1000,
                                                'Join the Conversation, Ignite Learning, and Fuel Curiosity !!!',
                                                1000,

                                            ]}
                                            wrapper="span"
                                            speed={50}
                                            style={{ fontSize: '1.5em', display: 'inline-block' }}
                                            repeat={Infinity}
                                        />
                                    </p>
                                </div>


                            </div>

                        </div>

                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div id="item2" className="carousel-item relative w-full">
                        <Image style={{ width: '100%', height: '500px' }} src={re1}></Image>
                        <div className="  absolute flex items-center h-full top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21,)]">
                            <div className=' text-white space-y-7 pl-[1rem] md:pl-[1.5rem] lg:pl-[16rem] mx-6 text-center'>

                                <h2 className=' text-5xl font-bold  font-serif' >Welcome to the World of Knowledge Sharing </h2>

                                <div className='flex flex-row'>
                                    <Divider orientation='horizontal' style={{ backgroundColor: '#4c5d57', paddingLeft: '7px', paddingTop: '105px', marginLeft: '9px' }}></Divider>
                                    <p className="mb-5 text-white  ml-7 mr-[182px]">
                                        <TypeAnimation
                                            sequence={[

                                                'Unlocking Wisdom, Empowering Minds: Explore a World of Knowledge with Insight Forge',
                                                1000,
                                                'Our Knowledge Share Platform.... ',
                                                1000,
                                                'Join the Conversation, Ignite Learning, and Fuel Curiosity !!!',
                                                1000,

                                            ]}
                                            wrapper="span"
                                            speed={50}
                                            style={{ fontSize: '1.5em', display: 'inline-block' }}
                                            repeat={Infinity}
                                        />
                                    </p>
                                </div>


                            </div>

                        </div>

                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div id="item3" className="carousel-item relative w-full">
                        <Image style={{ width: '100%', height: '500px' }} src={re2}></Image>
                        <div className="  absolute flex items-center h-full top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21,)]">
                            <div className=' text-white space-y-7 pl-[1rem] md:pl-[1.5rem] lg:pl-[16rem] mx-6 text-center'>

                                <h2 className=' text-5xl font-bold  font-serif' >Welcome to the World of Knowledge Sharing </h2>

                                <div className='flex flex-row'>
                                    <Divider orientation='horizontal' style={{ backgroundColor: '#4c5d57', paddingLeft: '7px', paddingTop: '105px', marginLeft: '9px' }}></Divider>
                                    <p className="mb-5 text-white  ml-7 mr-[182px]">
                                        <TypeAnimation
                                            sequence={[

                                                'Unlocking Wisdom, Empowering Minds: Explore a World of Knowledge with Insight Forge',
                                                1000,
                                                'Our Knowledge Share Platform.... ',
                                                1000,
                                                'Join the Conversation, Ignite Learning, and Fuel Curiosity !!!',
                                                1000,

                                            ]}
                                            wrapper="span"
                                            speed={50}
                                            style={{ fontSize: '1.5em', display: 'inline-block' }}
                                            repeat={Infinity}
                                        />
                                    </p>
                                </div>


                            </div>

                        </div>

                    </div>
                </SwiperSlide>



            </Swiper>


        </Box>
    );
};

export default Banner;



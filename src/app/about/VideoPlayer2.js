"use client";
import React from "react";
import ReactPlayer from "react-player";
import { TypeAnimation } from 'react-type-animation';
import { Inter } from 'next/font/google'
import Image from "next/image";



const VideoPlayer2 = () => {
  // const inter = Inter({ subsets: ['latin'] })
  // Video path
  let videoSrc = "/v3.mp4";

  return (
    <div className="relative ">
      {/* Video Player */}
      <ReactPlayer
        width="100%"
        height="auto"
        url={videoSrc}
        controls={true}
        light={false}
        pip={true}
        playing={true}
        muted={true}
        loop={true}
      />
  
      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center font-bold text-[#ffffff] text-[25px] mx-[50px]">
      <Image
                            src="https://i.ibb.co/LgFphFr/20-removebg-preview.png"
                            alt="Company Logo"
                            width={350}
                            height={350}
                        /> 
      <TypeAnimation 
      sequence={[
        '"The beautiful thing about learning is that no one can take it away from you." - B.B. King',
        1000, 
        '"Knowledge is power. Information is liberating. Education is the premise of progress, in every society, in every family." - Kofi Annan',
        1000,
        '"The more that you read, the more things you will know. The more that you learn, the more places you will go." - Dr. Seuss',
        1000,
        '"Share your knowledge. It is a way to achieve immortality." - Dalai Lama XIV',
        1000
      ]}
      // wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
     
      // className={inter.className}
    />
      </div>
    </div>
  );
};

export default VideoPlayer2;

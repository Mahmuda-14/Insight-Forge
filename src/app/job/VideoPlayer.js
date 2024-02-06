"use client";
import React from "react";
import ReactPlayer from "react-player";

import Image from "next/image";



const VideoPlayer = () => {
  // const inter = Inter({ subsets: ['latin'] })
  // Video path
  let videoSrc = "/v2.mp4";

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

    </div>
  );
};

export default VideoPlayer;
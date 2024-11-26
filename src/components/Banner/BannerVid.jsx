import React, { useRef } from "react";

const BannerVid = () => {
  const videoRef = useRef(null);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div className="flex items-center justify-center mt-10">
      <div
        className="relative group w-full sm:w-[90%] md:w-[80%] lg:w-[70%] aspect-video overflow-hidden bg-black rounded-lg shadow-lg"
        onMouseEnter={playVideo}
        onMouseLeave={pauseVideo}
        onClick={playVideo}
      >
        <video
          ref={videoRef}
          src="https://cdn.dribbble.com/userupload/6957640/file/large-f9919911ac0ada6f762f748c97197bb7.mp4"
          className="w-full h-full object-cover"
          muted
          loop
        />
      </div>
    </div>
  );
};

export default BannerVid;

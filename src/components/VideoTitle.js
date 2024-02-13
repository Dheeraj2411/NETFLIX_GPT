import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" z-40 aspect-video pt-[18%] md:pt-[13%] absolute  text-white md:pl-12  pl-8">
      <div className=" ">
        <h1 className="text-2xl md:text-4xl text uppercase  font-bold  text-white">
          {title}
        </h1>
        <p className="hidden md:inline-block py-4 text-zinc-200  text-transparent text-base w-2/5">
          {overview}
        </p>
      </div>
      <div className="my-1 md:my-0">
        <button className="p-1 md:p-2 text-xl md:px-7 px-2 bg-white m-1 md:m-2 text-black font-bold rounded-md">
          <span className="  text-xl       md:text-2xl text-black ">▷</span>{" "}
          Play
        </button>
        <button className="hidden md:inline-block text-xl  p-2 bg-opacity-50  md:px-8 text-white bg-gray-500 rounded-md">
          <span className="text-2xl">ⓘ</span> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

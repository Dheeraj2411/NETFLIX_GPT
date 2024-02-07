import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" z-40 aspect-video pt-[13%] absolute  text-white pl-12 overflow-hidden">
      <div className=" ">
        <h1 className="text-4xl text uppercase  font-bold w-1/3 text-red-200">
          {title}
        </h1>
        <p className="py-4 text-zinc-200  text-transparent text-base w-2/5">
          {overview}
        </p>
      </div>
      <div className="">
        <button className=" p-2 text-xl px-7 bg-white text-black font-bold rounded-md">
          <span className="text-2xl text-black ">▷</span> Play
        </button>
        <button className=" text-xl m-2 p-2 bg-opacity-50 px-8 text-white bg-gray-500 rounded-md">
          <span className="text-2xl">ⓘ</span> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

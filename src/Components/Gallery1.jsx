"use client";

import React from "react";

const videos = [
  "https://www.youtube.com/embed/cLfYmvern00?si=oOSiIpEVVUDQqXe1",
  "https://www.youtube.com/embed/N3SqzY0W5ZM?si=hnFR_nIJfdmatdwr",
  "https://www.youtube.com/embed/CskmiMz9xoQ?si=DvebLzITbsF80E6w",
  "https://www.youtube.com/embed/nlydtEOdF8c?si=MnpyJcrkDW58cLwj",
  "https://www.youtube.com/embed/zglPDLNGQRI?si=Uq_hlcGxc5384eh6",
  "https://www.youtube.com/embed/NvSfFgBRDfM?si=n25AQwY2ujoWSji_",
  "https://www.youtube.com/embed/cIz2i5r9cW0?si=tO1BabHmbtveeB-G",
  "https://www.youtube.com/embed/bAZFMYOqjFU?si=IpStYOXi0C5y7WT2",
  "https://www.youtube.com/embed/orFw828ZAKk?si=8OHFfyp_e8Tp-FCc",
  "https://www.youtube.com/embed/wRYyBCf7Q8I?si=824EX_AXpEAMYS3K",
  "https://www.youtube.com/embed/UBr75xRTWl4?si=ZO6DQ1Ujg3FJp8nM",
  "https://www.youtube.com/embed/8CB4xkd9f0o?si=nUuP1LDI913xUJda",
  "https://www.youtube.com/embed/8nJWkdS3RNw?si=tUMVfEe9FcmMdvv3",
  "https://www.youtube.com/embed/G9VPhKFWqjE?si=RZ0le5XDI72mp9ma",
  "https://www.youtube.com/embed/kotBRnFtS9g?si=5srYUIjw_W1vCgLn",
  "https://www.youtube.com/embed/csHQYaf4isY?si=j0RIYNoFd3h9dh6J",
  "https://www.youtube.com/embed/V8zE7D_K7Cs?si=jHrFNEUcYDzU4_Vb",
  "https://www.youtube.com/embed/zwV6fe5HbSk?si=p2pWIxBHUngO_rVf",
  "https://www.youtube.com/embed/d0YQruQp4HQ?si=lp4Q9-A39RdpzEup",
  "https://www.youtube.com/embed/VSp1zAm31nc?si=yH5vGidv9IeB7_9F",
  "https://www.youtube.com/embed/5XL6ogGKYRk?si=hlNgHYvdSYe17ghQ",
];

const Gallery1 = () => {
  return (
    <div className="bg-black">
      {/* Top Banner */}
      <div className="border-b">
        <img
          src="/images/testimonials--top-banners-stufdnet.jpg"
          alt="Zuri Testimonial Banner"
          className="w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-white text-center text-4xl md:text-6xl font-bold">
          Testimonials
        </h1>
        <h4 className="text-center text-yellow-400 mt-4 text-lg md:text-xl">
          THE MEDIA & ENTERTAINMENT INDUSTRY IN INDIA IS EXPECTED TO EMPLOY AROUND
          41 LAKH PROFESSIONALS BY 2022
        </h4>

        {/* Videos Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="flex justify-center"
            >
              <iframe
                className="rounded-xl shadow-lg w-[330px] h-[250px]"
                src={video}
                title={`YouTube video ${index + 1}`}
                frameBorder="0"
                loading="lazy"
                allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery1;

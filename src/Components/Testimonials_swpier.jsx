import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function Testimonials_swpier() {
  return (
    <>
    <section className="py-8 ">
  <div className="container">
    <div className="row gy-4 gy-xl-0">
    
      <div className="col-xl-12 col-12">
        <div className="my-lg-6">
          <div className="mb-5">
            <span className="fw-semibold text-light  fs-3">Testimonials</span>
            <h2 className="mt-3 mb-0 gradient_text">What Our Student Says</h2>
            <p className="mb-0 fs-4">
              Here’s what our clients have to say about their experiences with
              us:
            </p>
          </div>
          <Swiper
      loop={true}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 150,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
        <div
            className="card bg-dark border-0 h-100 shadow rounded-4"
            style={{ width: "25rem" }}
          >
            <div className="card-body">
              <img className="expert_logo " src="/quotes.png" alt="" />

              <p className="mb-0">
              Morph Academy is fantastic for hands-on learning! The instructors are not only skilled but also genuinely supportive. If you want to learn with the latest tech in design, this is the place to be!
              </p>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-2 ">
                  <div className="">
                    <img
                      className="img-fluid rounded-circle profile_review "
                      src="profile1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="mt-3  ">
                    <p className="fw-semibold"> Rahul Shetty</p>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="card border-0 h-100 bg-dark shadow rounded-4"
            style={{ width: "25rem" }}
          >
            <div className="card-body">
              <img className="expert_logo " src="/quotes.png" alt="" />

              <p className="mb-0">
              I loved my experience at Morph Academy. The curriculum is focused on real-world skills, and the staff are always ready to help you succeed. Highly recommended for anyone serious about building a career!
              </p>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-2 ">
                  <div className="">
                    <img
                      className="img-fluid rounded-circle profile_review "
                      src="profile1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="mt-3  ">
                    <p className="fw-semibold"> Neha Sharma</p>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="card border-0 h-100 bg-dark shadow rounded-4"
            style={{ width: "25rem" }}
          >
            <div className="card-body">
              <img className="expert_logo " src="/quotes.png" alt="" />

              <p className="mb-0">
              Morph Academy gave me the practical skills I needed to excel. The instructors truly care about your progress, and the tools and technology used here are top-notch. Highly recommend!
              </p>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-2 ">
                  <div className="">
                    <img
                      className="img-fluid rounded-circle profile_review "
                      src="profile1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="mt-3  ">
                    <p className="fw-semibold"> Ritu </p>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="card border-0 bg-dark shadow rounded-4"
            style={{ width: "25rem" }}
          >
            <div className="card-body">
              <img className="expert_logo " src="/quotes.png" alt="" />

              <p className="mb-0">
              Amazing experience! Morph Academy is all about hands-on training with a focus on the latest industry trends. The instructors are always there to guide you. A great choice for career-focused education!
              </p>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-2 ">
                  <div className="">
                    <img
                      className="img-fluid rounded-circle profile_review "
                      src="profile1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="mt-3  ">
                    <p className="fw-semibold "> Aniket Yadav</p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

      
      </Swiper>
        </div>
      </div>
    </div>
  </div>
</section>

     
    </>
  );
}
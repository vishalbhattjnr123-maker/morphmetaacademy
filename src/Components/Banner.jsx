import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img10 from "/images/ykphotoshop.jpg";
import img11 from "/images/momo2.png";
import img12 from "/images/momo1.png";
import img13 from "/images/metaverse-ai-banners-course-top.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <>
      <section id="main_logo" className="banner z-0 position-relative ">
        <div id="pop" className="">
          <Swiper
            loop
            spaceBetween={50}
            autoplay={true}
            navigation={true}
            pagination={{
              clickable: false,
            }}
            modules={[EffectFade, Navigation, Autoplay]}
            className="mySwiper zuri_padding"
          >
            <SwiperSlide>
              <div className="banner-slide-box  position-relative">
                <img
                  className="pop_img shadow-lg"
                  src={img12}
                  fetchpriority="low"
                  alt="Morph Meta Academy"
                />
                <div className="main d-flex align-items-center">
                  <div className="bannerr pb-5 w-50">
                    <p class="text2 py-1">
                      "Your Animation & VFX Journey Starts Here!"
                    </p>
                    <br/>
                    <h1 class="new1font lh-sm text-start pb-2">
                      3D Animation & Visual Effects Courses
                    </h1>
                    <p className="text-white down_fs pb-4">
                      Get Ready to jump in exciting career with MORPH Govt
                      Approved Degree and Diploma Course after 10th & 12th.
                    </p>
                    <div className="d-flex gap-3">
                      <div id="vik-button12">
                      <a href="/contact-us">
                        <button id="bottone1">
                          <strong className="click12">Free Demo</strong>
                        </button>
                      </a>
                    </div>
                    <div id="vik-button12">
                      <a href="/contact-us">
                        <button id="bottone1">
                          <strong className="click12">Online Courses</strong>
                        </button>
                      </a>
                    </div>
                    </div>
                    
                    {/* <p className="text-white down_fs">
                      Join Zuri Beauty Academy!
                    </p> */}
                    <div className="mt-5">
                      <a
                        className="Btn10"
                        aria-label="contact"
                        href="/contact"
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="banner-slide-box position-relative">
                <img
                  className="pop_img shadow-lg"
                  src={img10}
                  fetchpriority="low"
                  alt="Morph Meta Academy"
                />
                <div className="main d-flex align-items-center">
                  <div className="bannerr w-50">
                    <p class="text2 py-1">"Design Your Future!"</p>
                    <br />
                    <h2 class="new1font lh-sm pb-2">
                      {" "}
                      Photography and Film Making & Direction Course
                    </h2>
                    <p className="text-white pt-1 down_fs pb-4">
                      {" "}
                      Enroll in Morph Academy’s comprehensive program covering
                      Photograph & Film Direction, Filmmaking & Acting, Designed
                      for job-ready success after 10th & 12th.
                    </p>
                    <div className="d-flex gap-3">
                      <div id="vik-button12">
                      <a href="/contact-us">
                        <button id="bottone1">
                          <strong className="click12">Free Demo</strong>
                        </button>
                      </a>
                    </div>
                    <div id="vik-button12">
                      <a href="/contact-us">
                        <button id="bottone1">
                          <strong className="click12">Online Courses</strong>
                        </button>
                      </a>
                    </div>
                    </div>
                    {/* <p className="text-white pt-2 down_fs lh-1">
                      {" "}
                      Programs in Beauty & Wellness.
                    </p> */}
                    <div className="mt-5">
                      <a
                        className="Btn10"
                        aria-label="contact"
                        href="/contact"
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="banner-slide-box position-relative">
                <img
                  className="pop_img shadow-lg"
                  src={img11}
                  fetchpriority="low"
                  alt="Morph Meta Academy"
                />
                <div className="main d-flex align-items-center">
                  <div className="bannerr w-50">
                    <p class="text2 py-1 new1font1">
                      “Design the Future, today!”
                    </p>
                    <br />
                    <h2 class="new1font lh-sm pb-2">
                      {" "}
                      Game Designs, Graphic Design & Video Editing Courses
                    </h2>
                    <p className="text-white pt-1 down_fs lh-1 pb-4">
                      {" "}
                      Dive into an immersive training program covering Game
                      Design, Metaverse, AI Gen, Virtual Reality & Blockchain.
                      Your innovative career starts now.
                    </p>
                     <div className="d-flex gap-3">
                      <div id="vik-button12">
                      <a href="/contact-us">
                        <button id="bottone1">
                          <strong className="click12">Free Demo</strong>
                        </button>
                      </a>
                    </div>
                    <div id="vik-button12">
                      <a href="/contact-us">
                        <button id="bottone1">
                          <strong className="click12">Online Courses</strong>
                        </button>
                      </a>
                    </div>
                    </div>
                    {/* <p className="text-white pt-2 down_fs lh-1">
                      {" "}
                      Beauty Academy - Start Your Degree Today!"
                    </p> */}
                    <div className="mt-5">
                      <a
                        className="Btn10"
                        aria-label="contact"
                        href="/contact"
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
             <SwiperSlide>
              <div className="banner-slide-box position-relative">
                <img
                  className="pop_img shadow-lg"
                  src={img13}
                  fetchpriority="low"
                  alt="Morph Meta Academy"
                />
                <div className="main d-flex align-items-center">
                  <div className="bannerr w-50">
                    <p class="text2 py-1 new1font1">
                      “Master in 3D Skills”
                    </p>
                    <br />
                    <h2 class="new1font lh-sm pb-2">
                      {" "}
                      Metaverse and Virtual Reality Course & Certification 
                    </h2>
                    <p className="text-white pt-1 down_fs lh-1 pb-4">
                      {" "}
                      Exploring Generative AI in the Metaverse Course, VR, AR, AI And 3D Technology Are Powering The Next Industrial Revolution
                    </p>
                     <div className="d-flex gap-3">
                      <div id="vik-button12">
                      <a href="/contact-us">
                        <button id="bottone1">
                          <strong className="click12">Free Demo</strong>
                        </button>
                      </a>
                    </div>
                    <div id="vik-button12">
                      <a href="/contact-us">
                        <button id="bottone1">
                          <strong className="click12">Online Courses</strong>
                        </button>
                      </a>
                    </div>
                    </div>
                    {/* <p className="text-white pt-2 down_fs lh-1">
                      {" "}
                      Beauty Academy - Start Your Degree Today!"
                    </p> */}
                    <div className="mt-5">
                      <a
                        className="Btn10"
                        aria-label="contact"
                        href="/contact"
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* <section className="container-fluid hero-cloud_cards hidden_mobile z-3"
        data-component-title="Cards Img CTA"
        data-component-id="hv-up-next"
      >
        <div className="container mt-5">
          <div className="hv-hero-cloud-cards-slider">
            <div className="hv-hero-cloud-cards-slider-width d-flex">
              <div className="row justify-content-center">
                <div className="col-md-4 col-12 col-lg-4 col-margin-btm">
                  <div className="hv-card-play">
                    <div className="hv-card-play-mask" />
                    <div className="hv-cards-hover-img-content cd1">
                      <div className="hv-hero-cloud-cards-hover">
                        <div className="hv-cards-hover-show">
                          <img
                            src={"assets/images/h-banner2.jpg"}
                            alt="Animation Course"
                          />
                        </div>
                      </div>
                      <div className="hero-cloud_card_content">
                        <p className="hero-cloud_card-eyebrow card-hover-hide">
                          Media Degree Course
                        </p>
                        <Link
                          aria-label=" Professional Course in Animation, VFX &
                                  Multimedia"
                          to="course/ar-vr-and-metaverse-course-at-morph-academy"
                          className="ciconlink red aos-init aos-animate text-decoration-none"
                        >
                          <h2 className="text-white">
                            Professional Course in Animation, VFX & Multimedia
                          </h2>
                        </Link>

                        <p className="card-hover-show text-white">
                          Launch your animation career with Morph Academy's
                          Skill Degree in 3D Animation and Visual Effects.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-12 col-lg-4 col-margin-btm">
                  <div className="hv-card-play">
                    <div className="hv-card-play-mask" />
                    <div className="hv-cards-hover-img-content cd2">
                      <div className="hv-hero-cloud-cards-hover">
                        <div className="hv-cards-hover-show">
                          <img
                            src={"assets/images/h-banner1.jpg"}
                            alt="Job Oriented Course"
                          />
                        </div>
                      </div>
                      <div className="hero-cloud_card_content">
                        <p className="hero-cloud_card-eyebrow card-hover-hide">
                          Creative Skill Course
                        </p>
                        <Link
                          aria-label=" Job Oriented Course in Filmmaking &
                                  Photography"
                          to="course/best-filmmaking-and-direction-schools-and-courses-in-india"
                          className="ciconlink red aos-init aos-animate"
                        >
                          <h2 className="text-white">
                            Job Oriented Course in Filmmaking & Photography
                          </h2>
                        </Link>

                        <p className="card-hover-show text-white">
                          Kick-start your film career and become a world-class,
                          multi-skilled filmmaker with our expert training
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-12 col-lg-4 col-margin-btm">
                  <div className="hv-card-play">
                    <div className="hv-card-play-mask " />
                    <div className="hv-cards-hover-img-content cd3">
                      <div className="hv-hero-cloud-cards-hover">
                        <div className="hv-cards-hover-show">
                          <img
                            src={"assets/images/h-banner3.jpg"}
                            alt="Metaverse Course"
                          />
                        </div>
                      </div>
                      <div className="hero-cloud_card_content">
                        <p className="hero-cloud_card-eyebrow card-hover-hide">
                          Immersive Future Course
                        </p>
                        <Link
                          aria-label=" Immersive Futures Game Design, AR/VR &
                                  Metaverse"
                          to="course/top-game-design-and-development-course-in-india"
                          className="ciconlink red aos-init aos-animate"
                        >
                          <h2 className="text-white">
                            Immersive Futures Game Design, AR/VR & Metaverse
                          </h2>
                        </Link>

                        <p className="card-hover-show text-white">
                          Morph Academy offers top courses in Game Design,
                          AR/VR, Virtual World Metaverse, and Spatial Computing
                          mastery.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="hidedesktop">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide margin-top "
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/images/11.png"
                className="d-block w-100 position-relative"
                alt="Morph Meta Academy"
              />
              <div className=" position-absolute set-ban text-center">
                <p className="text-white fs-5 mb-1">
                  "Your Animation & VFX Journey Starts Here!"
                </p>
                <h1 className="text-white newfontv">
                  3D Animation & Visual Effects Courses
                </h1>
                <div id="vik-button">
                  <a href="/contact-us">
                    <button className="button mt-3">
                      Click Here
                      <span className="button-span"> ─ Free Demo</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/images/my2.png"
                className="d-block w-100"
                alt="Morph Meta Academy"
              />
              <div className=" position-absolute set-ban text-center">
                <p className="text-white fs-5 mb-1">"Design Your Future!"</p>
                <h1 className="text-white newfontv">
                  Photography and Film Making & Direction Course{" "}
                </h1>
                <div id="vik-button">
                  <a href="/contact-us">
                    <button className="button mt-3">
                      Click Here
                      <span className="button-span"> ─ Free Demo</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/images/my4.png"
                className="d-block w-100"
                alt="Morph Meta Academy"
              />
              <div className=" position-absolute set-ban text-center">
                <p className="text-white fs-5 mb-1">
                  "Design the Future, today!"
                </p>
                <h1 className="text-white newfontv">
                  Game Designs, Graphics Design & Video Editing
                </h1>
                <div id="vik-button">
                  <a href="/contact-us">
                    <button className="button mt-3">
                      Click Here
                      <span className="button-span"> ─ Free Demo</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
  {/* <div className="general-container">
  <input className="radio" type="radio" name="card" id="cardUno" defaultChecked />
  <label className="content" htmlFor="cardUno">
    <h1 className="title-card">
      <span className="marg-bott">EXAMPLE TITLE OF MY CARD</span>
      <span className="subtitle">EXAMPLE SOME SUBTILTE OR HEADER</span>
    </h1>
    <h3 className="card-title subsubtitle">
      <span>EXAMPLE SOME ADDITIONS</span>
    </h3>
  </label>
  <input className="radio" type="radio" name="card" id="cardDos" />
  <label className="content" htmlFor="cardDos">
    <h1 className="title-card">
      <span className="marg-bott">EXAMPLE TITLE OF MY CARD</span>
      <span className="subtitle">EXAMPLE SOME SUBTILTE OR HEADER</span>
    </h1>
    <h3 className="card-title subsubtitle">
      <span>EXAMPLE SOME ADDITIONS</span>
    </h3>
  </label>
  <input className="radio" type="radio" name="card" id="cardTres" />
  <label className="content" htmlFor="cardTres">
    <h1 className="title-card">
      <span className="marg-bott">EXAMPLE TITLE OF MY CARD</span>
      <span className="subtitle">EXAMPLE SOME SUBTILTE OR HEADER</span>
    </h1>
    <h3 className="card-title subsubtitle">
      <span>EXAMPLE SOME ADDITIONS</span>
    </h3>
  </label>
  <input className="radio" type="radio" name="card" id="cardCuatro" />
  <label className="content" htmlFor="cardCuatro">
    <h1 className="title-card">
      <span className="marg-bott">TITLE OF YOUR CARD</span>
      <span className="subtitle">SOME SUBTILTE OR HEADER</span>
    </h1>
    <h3 className="card-title subsubtitle">
      <span>EXAMPLE SOME ADDITIONS</span>
    </h3>
  </label>
  <input className="radio" type="radio" name="card" id="cardvik" />
  <label className="content" htmlFor="cardvik">
    <h1 className="title-card">
      <span className="marg-bott">TITLE OF YOUR CARD</span>
      <span className="subtitle">SOME SUBTILTE OR HEADER</span>
    </h1>
    <h3 className="card-title subsubtitle">
      <span>EXAMPLE SOME ADDITIONS</span>
    </h3>
  </label>
</div> */}


     </>
  );
}

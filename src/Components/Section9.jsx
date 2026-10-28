import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Form2 from "./Form2";
import Morph from "./Morph";

export default function Section9() {
  return (
    <>
      <div id="cardds">
        <div className="container-fluid py-4 hidedesktop">
          <div className="container top_padding">
            <div className="row align-items-center">
              <div className="col-lg-8 col-12 pe-5 mt-5 order-2">
                <div className="heading-title text-start mb-0">
                  <h3 className="gradient_text fs-2 fw-bold"> About Us</h3>
              
                </div>
                <h2 className="rainbow-text m-0">
                Job oriented skill and professional course and training in India.
                </h2>

                <p className="text-light fs-4 mt-3">Welcome to Morph Academy, one of the best animation and VFX institutes in India, proudly based in Chandigarh. With over 27 years of excellence, we specialize in high-end training in 3D Animation, VFX, Game Design, Film Making, UI/UX, Graphic Design, Photography, and more. </p>
                <p className="text-light fs-4">Our certified degree and diploma programs are affiliated with reputed universities and industry standards. Guided by 20+ experienced professionals, students receive hands-on experience through live projects and apprenticeship training. With a 100% placement record, Morph Academy helps you turn your passion into a successful career. </p>
                <p className="text-light fs-4">Join us and explore the future of creativity in AR/VR, 3D, Meta, and beyond. Begin your journey today with one of the top animation and VFX institutes in Chandigarh!</p>
               <Morph/>
              </div>
              <div className="col-lg-4 col-12 mt-lg-5 mt-0 order-1">
                 <p className="small text-white mt-2">Government-Approved Courses + Global Certification, <span className="text-warning">Now on Easy EMIs</span></p>
                  <div className="d-flex gap-5 mb-5">
                    
                      <img className="w-25" src="/images/baja-1.png"/>
                  <img className="w-25" src="/images/baja-2.png"/>
                    <img className="w-25" src="/images/baja-4.png"/>
                  </div>
                
                
                          <Form2 />
                           
                 
              </div>
            </div>
          </div>
        </div>
      </div>

    
    </>
  );
}

import { Link } from "react-router-dom";

export default function Ani(){
    
    return(
        <>
        <div id="foot">

      <footer >
  <div className="waves">
    <div className="wave" id="wave1" />
    <div className="wave" id="wave2" />
    <div className="wave" id="wave3" />
    <div className="wave" id="wave4" />
  </div>
  
  <div className="row ">
            <div className="col-lg-3  col-md-6 col-12">
              {/* about company */}
              <div className="mb-4">
             
                <div className="mt-4">
                  <img
                  className="w-50"
                    src="/images/morph-logo.png"
                    alt="Metaverse logo"
                  />
                <p className="py-2 text-white">
                    Morph Academy offers creative, professional courses in
                    animation & metaverse.
                  </p>

                  <div id="footer_btn">
                    <div className="d-flex">
                      <a href="https://www.instagram.com/morphmeta.academy?igsh=MTgxcGs5czU3MmE4ag==" aria-label="instagram" target="blank"
                      className="button">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          height={24}
                          width={24}
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          className="w-6 h-6 "
                        >
                          <path
                            clipRule="evenodd"
                            d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                            fillRule="evenodd"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                      <a href="https://www.facebook.com/share/imSZY8H2vB6JT3jN/?mibextid=LQQJ4d" aria-label="fb" className="text-decoration-none  button" target="blank">
                      <i className="fs-3  text-white fa-brands fa-facebook"></i>
                      </a>
                    
                      <a className="button" href="https://www.youtube.com/@MorphFilmStudio34" aria-label="youtube" target="blank" >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          height={24}
                          width={24}
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          className="w-6 h-6 "
                        >
                          <path
                            clipRule="evenodd"
                            d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                            fillRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" mt-4 col-lg-2 col-md-3 col-6">
              <div className="mb-4">
                <h3 className="fw-bold text-white mb-3">Courses</h3>
                <ul className="list-unstyled nav nav-footer flex-column nav-x-0">
                  <li>
                    <Link
                      to="/animation-course"
                      className="nav-link  text-white "
                    >
                      Animation
                    </Link>
                  </li>
                  <li>
                    <Link to="/film-course" className="nav-link  text-white">
                      Flim Making
                    </Link>
                  </li>
                  <li>
                    <Link to="/gaming-course" className="nav-link  text-white">
                      Gaming Course
                    </Link>
                  </li>
                  <li>
                    <Link to="/job-course" className="nav-link  text-white">
                    Job Ready Course
                    </Link>
                  </li>
                  <li>
                    <Link to="/metaverse-course" className="nav-link  text-white">
                      Metaverse
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" mt-4 col-lg-2 col-md-3 col-6">
              <div className="mb-4">
                {/* list */}
                <h3 className="fw-bold text-white mb-3">Company</h3>
                <ul className="list-unstyled nav nav-footer flex-column nav-x-0">
                  <li>
                    <Link
                      to="/morph-academy-animation-institute-in-Amritsar/"
                      className="nav-link  text-white "
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/blogs" className="nav-link  text-white">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/school-of-animation-and-visual-effects-morph-academy" className="nav-link  text-white">
                      Facility
                    </Link>
                  </li>
                 
                  <li>
                    <Link to="/contact-us" className="nav-link  text-white">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 mt-4  col-md-3 col-6">
              <div className="mb-4">
                {/* list */}
                <h3 className="fw-bold  text-white mb-3">Support</h3>
                <ul className="list-unstyled nav nav-footer flex-column nav-x-0">
                  <li>
                    <a href="/privacy-policy-2/" className="nav-link  text-white">
                    Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/terms-and-conditions/" className="nav-link  text-white">
                    Terms and Conditions
                    </a>
                  </li>
                  <li>
                    <a href="/disclaimer/" className="nav-link  text-white">
                    Disclaimer
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3  mt-4 col-md-12">
              {/* contact info */}
              <div className="mb-4">
                <h3 className="fw-bold text-white mb-3 ">Get in touch</h3>
                <p className="mb-3 fs-5  text-white">
                  SCO 64-65, 4th Floor, Sub. City Center, Sector 34A, Chandigarh
                </p>
     
               <div className="mb-3">

                  <a
                    className="text-decoration-none text-white"
                    href="mailto: info@morphacademy.com.org?subject=Mail to Meta Morph Academy"
                    >
                       Email:
                    {" "}
                    <span className=" fw-semibold text-white">
                      
                     info@morphacademy.com
                    </span>
                  </a>
                    </div>
                  <div className="">

                <a
                  className="text-white text-decoration-none"
                  href="tel:+919501489999"
                  >
                  Phone:
                  <span className="text-white fw-semibold">
                    {" "}
                    +919501489999
                  </span>
                </a>
                  </div>
              </div>
            </div>
          </div>
</footer>
        </div>


        </>
    )
}
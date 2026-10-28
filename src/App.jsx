import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const SingleCourse = lazy(() => import("./pages/SingleCourse"));
const AppLayout = lazy(() => import("./layouts/AppLayout"));
const Placement = lazy(() => import("./pages/Placement"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Affiliations = lazy(() => import("./pages/Affiliations"));
const About = lazy(() => import("./pages/About"));
const Facility = lazy(() => import("./pages/Facility"));
const Scholarships = lazy(() => import("./pages/Scholarships"));
const Online = lazy(() => import("./pages/Online"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const Creative = lazy(() => import("./pages/Creative"));
const Animation = lazy(() => import("./pages/Animation"));
const Photography = lazy(() => import("./pages/Photography"));
const LifeandMorph = lazy(() => import("./pages/LifeandMorph"));
const Creative_Web = lazy(() => import("./pages/Creative_Web"));
const Animation_course = lazy(() => import("./pages/Animation_course"));
const Film_course = lazy(() => import("./pages/Film_course"));
const Gaming_course = lazy(() => import("./pages/Gaming_course"));
const Metaverse_course = lazy(() => import("./pages/Metaverse_course"));
const Job_course = lazy(() => import("./pages/Job_course"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const ScrollToTop = lazy(() => import("./Components/ScrollTop"));
const BlogPosts = lazy(() => import("./pages/Blog"));
const SingleBlogPost = lazy(() => import("./pages/Blog/single"));
const Videos = lazy(() => import("./pages/Videos"));
const Frenchise = lazy(() => import("./pages/Frenchise"));
const After12 = lazy(() => import("./pages/After12"));
const After10 = lazy(() => import("./pages/After10"));
const PhotographyGallery = lazy(() => import("./pages/PhotographyGallery"));
const StudentWork_pic = lazy(() => import("./pages/StudentWork_pic"));

import Courses from "./data/Courses.json";
import Aos from "aos";
import { useEffect } from "react";
import { lazy } from "@loadable/component";
import { Suspense } from "react";
import Resource from "./pages/Resource";
import Professional_training from "./pages/Professional_training";
import Himachal from "./pages/himachal";
import Architecture from "./pages/Architecture";
import Kangra from "./pages/Kangra";
import Una from "./pages/Una";
import Hamirpur from "./pages/Hamirpur";
import Palampur from "./pages/Palampur";
import Bilaspur from "./pages/Bilaspur";
import Dharamshala from "./pages/Dharamshala";
import Shimla from "./pages/Shimla";
import Jalandhar from "./pages/Jalandhar";
import Ludhiana from "./pages/Ludhiana";
import Punjab from "./pages/Punjab";
import Result from "./pages/Result";
import Service from "./pages/service";
import Newcourses from "./pages/Newcourses";
import AircraftBanner from "./pages/AircraftBanner";
import Admission26 from "./pages/Admission26";
import Beautyhp from "./pages/Beautyhp";
import Degreebeauty from "./pages/Degreebeauty";
import Salary from "./pages/Salary";
import After1012 from "./pages/After1012";
import PhotographyDegree from "./pages/PhotographyDegree";
import Amritsar from "./pages/Amritsar";
import Amr from "./pages/Amr";
import Videoam from "./pages/Videoam";
import Photoam from "./pages/Photoam";
import Gameam from "./pages/Gameam";
import Webseries from "./pages/Webseries";
import Dehradun from "./pages/Dehradun";
import TeamAndManagement from "./pages/Team";
import ResultDetail from "./pages/ResultDetail";
import ARVRPage from "./pages/landing/ARVR";
import LeadingARVRPage from "./pages/landing/LeadingARVR";
import JobOriented from "./pages/landing/JobOriented";


function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
    Aos.refresh();
    return () => {
      Aos.refresh();
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <Suspense
        >
          <ScrollToTop>
            <Routes>
              <Route element={<AppLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/contact-us" element={<ContactUs />} />
                {/* Placement */}
                <Route
                  path="/best-job-placement-academy-in-Amritsar"
                  element={<Placement />}
                />
                <Route
                  path="/best-job-placement-academy-in-Amritsar/"
                  element={<Placement />}
                />
                <Route
                  path="/best-job-placement-academy-in-amritsar"
                  element={<Placement />}
                />
                <Route
                  path="/best-job-placement-academy-in-amritsar/"
                  element={<Placement />}
                />
                <Route
                  path="/best-job-placement-academy-in-chandigarh"
                  element={<Placement />}
                />
                <Route
                  path="/best-job-placement-academy-in-chandigarh/"
                  element={<Placement />}
                />

                {/* About / Who We Are */}
                <Route
                  path="/morph-academy-animation-institute-in-Amritsar/"
                  element={<About />}
                />
                <Route
                  path="/morph-academy-animation-institute-in-Amritsar"
                  element={<About />}
                />
                <Route
                  path="/morph-academy-animation-institute-in-amritsar/"
                  element={<About />}
                />
                <Route
                  path="/morph-academy-animation-institute-in-amritsar"
                  element={<About />}
                />
                <Route
                  path="/morph-academy-animation-institute-in-chandigarh/"
                  element={<About />}
                />
                <Route
                  path="/morph-academy-animation-institute-in-chandigarh"
                  element={<About />}
                />

                {/* Facility */}
                <Route
                  path="/school-of-animation-and-visual-effects-morph-academy"
                  element={<Facility />}
                />
                <Route
                  path="/school-of-animation-and-visual-effects-morph-academy/"
                  element={<Facility />}
                />

                {/* Scholarships */}
                <Route
                  path="/scholarships-on-vfx-and-animation-course-in-Amritsar"
                  element={<Scholarships />}
                />
                <Route
                  path="/scholarships-on-vfx-and-animation-course-in-Amritsar/"
                  element={<Scholarships />}
                />
                <Route
                  path="/scholarships-on-vfx-and-animation-course-in-amritsar"
                  element={<Scholarships />}
                />
                <Route
                  path="/scholarships-on-vfx-and-animation-course-in-amritsar/"
                  element={<Scholarships />}
                />
                <Route
                  path="/scholarships-on-vfx-and-animation-course-in-chandigarh"
                  element={<Scholarships />}
                />
                <Route
                  path="/scholarships-on-vfx-and-animation-course-in-chandigarh/"
                  element={<Scholarships />}
                />

                {/* Online Courses */}
                <Route
                  path="/online-animation-game-design-metaverse-course-in-Amritsar"
                  element={<Online />}
                />
                <Route
                  path="/online-animation-game-design-metaverse-course-in-Amritsar/"
                  element={<Online />}
                />
                <Route
                  path="/online-animation-game-design-metaverse-course-in-amritsar"
                  element={<Online />}
                />
                <Route
                  path="/online-animation-game-design-metaverse-course-in-amritsar/"
                  element={<Online />}
                />
                <Route
                  path="/online-animation-game-design-metaverse-course-in-chandigarh"
                  element={<Online />}
                />
                <Route
                  path="/online-animation-game-design-metaverse-course-in-chandigarh/"
                  element={<Online />}
                />

                {/* Testimonials */}
                <Route
                  path="/meta-morph-academy-reviews-Amritsar-sector-34"
                  element={<Testimonials />}
                />
                <Route
                  path="/meta-morph-academy-reviews-Amritsar-sector-34/"
                  element={<Testimonials />}
                />
                <Route
                  path="/meta-morph-academy-reviews-amritsar-sector-34"
                  element={<Testimonials />}
                />
                <Route
                  path="/meta-morph-academy-reviews-amritsar-sector-34/"
                  element={<Testimonials />}
                />
                <Route
                  path="/meta-morph-academy-reviews-chandigarh-sector-34"
                  element={<Testimonials />}
                />
                <Route
                  path="/meta-morph-academy-reviews-chandigarh-sector-34/"
                  element={<Testimonials />}
                />
                <Route
                  path="/student-graphic-portfolios-and-work"
                  element={<Creative />}
                />
                <Route
                  path="/animation-student-portfolio"
                  element={<Animation />}
                />
                <Route
                  path="/photography-school-student-portfolio-and-showcase"
                  element={<Photography />}
                />
                <Route
                  path="/animation-and-multimedia-colleges-affiliations-and-accreditations"
                  element={<Affiliations />}
                />
                <Route path="/creative-web" element={<Creative_Web />} />
                <Route
                  path="/animation-course"
                  element={<Animation_course />}
                />
                 <Route
                  path="/how-to-take-admission"
                  element={<Frenchise/>}
                />
                  <Route
                  path="/best-animation-courses-after-12th"
                  element={<After12/>}
                />
                  <Route
                  path="/best-animation-courses-for-students-after-10th"
                  element={<After10/>}
                />
                <Route path="/film-course" element={<Film_course />} />
                <Route
                  path="/student-photogrphs"
                  element={<StudentWork_pic />}
                />
                <Route path="/gaming-cousre" element={<Gaming_course />} />
                <Route path="/professional-training" element={<Professional_training />} />
                <Route path="/video-gallery" element={<Videos />} />
                <Route path="/resouce" element={<Resource />} />
                <Route path="/animation-and-vfx-admissions-open-2025-26" element={<Admission26 />} />
                <Route path="/top-beauty-and-makeup-courses-in-himachal-pradesh" element={<Beautyhp/>} />
                <Route path="/best-degree-in-beauty-and-makeup-in-himachal-pradesh" element={<Degreebeauty/>} />
                <Route path="/animation-career-in-india-jobs-placements-salary-top-recruiters" element={<Salary/>} />
                <Route path="/animation-courses-after-10th-and-12th-in-india" element={<After1012/>} />
                {/* <Route path="/best-animation-insititue-in-amritsar" element={<Amritsar/>} /> */}
                <Route path="/best-animation-academy-in-amritsar" element={<Amr/>} />
                <Route path="/best-video-editing-courses-in-amritsar" element={<Videoam/>} />
                <Route path="/best-film-making-and-photography-insititue-in-amritsar" element={<Photoam/>} />
                <Route path="/best-game-desgining-insititue-in-amritsar" element={<Gameam/>} />
                <Route path="/make-your-own-web-series-in-chandigarh" element={<Webseries/>} />
                <Route path="/govt-approved-degree-in-photography-and-filmmaking-course-in-punjab-and-chandigarh" element={<PhotographyDegree/>} />

                <Route
                  path="/metaverse-course"
                  element={<Metaverse_course />}
                />
                <Route path="/job-course" element={<Job_course />} />
                <Route
                  path="/photography-gallery"
                  element={<PhotographyGallery />}
                />
                 <Route
                  path="/course123"
                  element={<Newcourses/>}
                />
                 <Route
                  path="/air"
                  element={<AircraftBanner/>}
                />
                <Route
                  path="/animation-school-and-career-guide-for-students-at-morph-academy"
                  element={<LifeandMorph />}
                />
                <Route path="/disclaimer/" element={<Disclaimer />} />
                <Route path="/team/" element={<TeamAndManagement/>} />
                <Route path="/terms-and-conditions/" element={<Terms />} />
                <Route path="/privacy-policy-2/" element={<Privacy />} />
                <Route path="/animation-institute-franchise-opportunity-in-india/" element={<Frenchise/>} />
                <Route path="/animation-institute-franchise-opportunity-in-india" element={<Frenchise/>} />
                <Route path="/animation-institute-franchise-opportunity-in-Amritsar/" element={<Frenchise/>} />
                <Route path="/animation-institute-franchise-opportunity-in-Amritsar" element={<Frenchise/>} />
                <Route path="/animation-institute-franchise-opportunity-in-amritsar/" element={<Frenchise/>} />
                <Route path="/animation-institute-franchise-opportunity-in-amritsar" element={<Frenchise/>} />
                <Route path="/best-animation-institute-in-himachal-pradesh/" element={<Himachal/>} />
                <Route path="/ai-tools-for-generative-design-in-architecture/" element={<Architecture/>} />
                <Route path="/best-animation-institute-in-kangra/" element={<Kangra/>} />
                <Route path="/best-animation-institute-in-una/" element={<Una/>} />
                <Route path="/best-animation-institute-in-hamirpur/" element={<Hamirpur/>} />
                <Route path="/best-animation-institute-in-palampur/" element={<Palampur/>} />
                <Route path="/best-animation-institute-in-bilaspur/" element={<Bilaspur/>} />
                <Route path="/best-animation-institute-in-dharamshala/" element={<Dharamshala/>} />
                <Route path="/best-animation-institute-in-shimla/" element={<Shimla/>} />
                <Route path="/best-animation-institute-in-jalandhar/" element={<Jalandhar/>} />
                <Route path="/best-animation-institute-in-ludhiana/" element={<Ludhiana/>} />
                <Route path="/best-animation-institute-in-punjab/" element={<Punjab/>} />
                <Route path="/best-animation-institute-in-dehradun/" element={<Dehradun/>} />
                <Route path="/result" element={<Result/>} />
                 <Route path="/result-detail" element={<ResultDetail />} />
                <Route path="/service123/" element={<Service/>} />
               


                {Courses &&
                  Courses.flatMap((course, index) => {
                    const slugVariants = new Set();
                    if (course?.slug) {
                      const base = course.slug;
                      slugVariants.add(base);
                      slugVariants.add(base.endsWith("/") ? base.slice(0, -1) : base + "/");

                      const amr = base.replace(/chandigarh/gi, "Amritsar");
                      slugVariants.add(amr);
                      slugVariants.add(amr.endsWith("/") ? amr.slice(0, -1) : amr + "/");

                      const amrLower = base.replace(/chandigarh/gi, "amritsar");
                      slugVariants.add(amrLower);
                      slugVariants.add(amrLower.endsWith("/") ? amrLower.slice(0, -1) : amrLower + "/");
                    }
                    return Array.from(slugVariants).map((slugPath, pIdx) => (
                      <Route
                        path={slugPath}
                        key={`course-${index}-${pIdx}`}
                        element={<SingleCourse {...course} />}
                      />
                    ));
                  })}

                <Route
                  path="/blogs"
                  element={<BlogPosts postsPerPage={25} paginate={true} />}
                />
                <Route path="/:slug" element={<SingleBlogPost />} />

                <Route path="/tag/*" element={<Home />} />
                <Route
                  path="/course/hollywood-makeup-and¬-special-effect-makeup-course-in-chandigarh/"
                  element={<Home />}
                />
                 <Route path="*" element={<Home/>} />

              </Route>

               <Route path="/game-development-design-with-ar-vr-boxfyco-morph-indias-rising-platform-game-studio-in-india" element={<ARVRPage />} />
               <Route path="/leading-ar-vr-xr-and-ai-innovation-studio-in-india" element={<LeadingARVRPage />} />
               <Route path="/100-job-oriented-courses-in-chandigarh" element={<JobOriented/>} />
             


            </Routes>
          </ScrollToTop>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;

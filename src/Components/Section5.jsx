import Testimonials_swpier from "./Testimonials_swpier";
import StudentWork from "./StudentWork";
import Viknew from "./Viknew";
import Vikreview from "./Vikreview";

const Section5 = () => {
  return (
    <>
    <section className="bg-neutral-950 py-16">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Students Work Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Our Students' Work
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Student work refers to the assignments, projects, and products completed to demonstrate learning and creativity.
          </p>
        </div>

        {/* Student Work Cards */}
        <div className="">
          <Viknew />
        </div>

      
      </div>
    </section>
         {/* Testimonials Section */}
        <div className="">
        
          <Vikreview />
        </div>
    
    </>
  );
};

export default Section5;

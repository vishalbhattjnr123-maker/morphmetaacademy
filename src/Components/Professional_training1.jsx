import Newcourse from "./Newcourse";
import Coc from "./Coc";

const ProfessionalTraining = () => {
  return (
    <section className="bg-neutral-900 text-white py-16">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-center text-3xl md:text-4xl font-extrabold text-white mb-2">
            Learn In-demand Skills with Job-Oriented Courses
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Gain future-ready skills in Python Training, Full Stack Development, Machine Learning,
            and Blockchain Training. Hands-on projects and expert mentors ensure career-ready learning.
          </p>
        </div>

        {/* Courses / Content */}
        <div className="space-y-0">
          <Coc />
        </div>
      </div>
    </section>
  );
};

export default ProfessionalTraining;

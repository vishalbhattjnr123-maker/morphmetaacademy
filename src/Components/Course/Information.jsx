import Form2 from "../Form2";

const CourseInformation = ({ ...info }) => {
  return (
    <section className="relative py-10 md:py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 space-y-5">
            
            {info?.subtitle && (
              <h4 className="text-yellow-400 font-semibold tracking-wide">
                {info.subtitle}
              </h4>
            )}

            {info?.title && (
              <h2 className="text-2xl md:text-4xl font-extrabold text-white leading-snug">
                {info.title}
              </h2>
            )}

            {info?.description && (
              <div
                className="text-gray-300 text-base md:text-lg leading-relaxed"
                dangerouslySetInnerHTML={{ __html: info.description }}
              />
            )}

            {info?.content_heading && (
              <h3 className="text-yellow-400 text-xl font-semibold">
                {info.content_heading}
              </h3>
            )}

            {info?.descriptionTwo && (
              <blockquote className="border-l-4 border-yellow-400 pl-4 italic text-gray-300">
                {info.descriptionTwo}
              </blockquote>
            )}
          </div>

          {/* RIGHT FORM */}
          <div className="lg:col-span-5">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/10">
              <Form2 />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseInformation;

import MetaSeo from "../Components/MetaSEO";

const LifeandMorph = () => {
  const seo = {
    title: "Animation School and Career Guide for Students at Morph Academy",
    description:
      "Animation School and Career Guide for Students at Morph Academy, if you want to join animation course for job the right place for career and job at Morph Academy.",
    keyword:
      "Graphics Designing Course in chandigarh, Graphics Designing Diploma in chandigarh, Graphics Design Institutes in chandigarh, Best Graphics Design Institute in chandigarh, Graphics Designing Classes in chandigarh Nearby, Top Graphics Design Academy near me",
  };

  
  const events = [
      
    
    {
      img: "/images/WhatsApp Image 2025-09-11 at 17.49.11_a583696f.jpg",
      date: "August 30, 2025",
      title: "Insight 2025",
      desc: "Insight 2025 at Morph Academy, Chandigarh, was a showcase of creativity and innovation! Students demonstrated their skills, shared knowledge, and celebrated learning with enthusiasm and collaboration.",
    },
    
   
    
     {
      img: "/images/WhatsApp Image 2025-09-11 at 17.49.10_a9c43577.jpg",
      date: "August 19, 2025",
      title: "Photography Day",
      desc: "Morph Academy celebrated Photography Day with creativity and passion! Students captured stunning moments through their lenses, showcasing artistic vision, storytelling, and innovation in photography.",
    },
     {
      img: "/images/Screenshot 2025-09-11 182338.png",
      date: "August 1, 2025",
      title: "AR/VR Exhibition 2025",
      desc: "A vibrant AR/VR Exhibition at Morph Academy, Chandigarh! Students explored the future of technology with creativity and innovation, showcasing immersive experiences and interactive projects.",
    },
    {
      img: "/images/building-effect.00_00_16_08.Still001-2-1-scaled.jpg",
      date: "July 27, 2025",
      title: "Teej Celebrations 2025",
      desc: "Morph Academy came alive with vibrant colors and festive joy as students celebrated Teej, the festival of happiness, tradition, and togetherness.",
    },
     {
      img: "/images/Screenshot 2025-09-11 182627.png",
      date: "March 14, 2025",
      title: "Holi Celebrations 2025",
      desc: "Vibrant Holi celebrations at Morph Academy, Chandigarh! Students embraced the festival of colors with joy, showcasing cultural pride, togetherness, and festive spirit.",
    },
     {
      img: "/images/teej.jpeg",
      date: "August 17, 2024",
      title: "Teej Celebrations",
      desc: "Vibrant Teej celebrations at Morph Academy, Chandigarh! Students embraced tradition with joy, showcasing cultural pride and unity.",
    },
    {
      img: "/images/independence.jpg",
      date: "August 15, 2024",
      title: "Independence Day",
      desc: "Patriotic fervor soared as Morph Academy celebrated Independence Day with vibrant energy and unity.",
    },
    {
      img: "/images/frend_ship.jpg",
      date: "July 30, 2024",
      title: "International Friendship Day",
      desc: "International Friendship Day at Morph Academy: Friends expressed emotions through beautiful, creative posters.",
    },
  ];

  return (
    <>
      <MetaSeo meta={seo} />

      <div className="bg-gradient-to-b from-black via-gray-900 to-black pb-16">
        {/* Hero Banner */}
        <div className="w-full border-b">
          <img
            className="w-full object-cover h-[320px] md:h-[420px]"
            src="/images/Vision-And-Mission-top-banner1.jpg"
            alt="Morph Academy Vision-And-Mission Banner"
          />
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-center text-4xl md:text-5xl font-extrabold text-white mt-12 drop-shadow-lg">
            Life <span className="text-yellow-400">&</span> Morph
          </h1>
          <p className="text-center text-lg md:text-xl text-gray-300 mt-4 max-w-3xl mx-auto leading-relaxed">
            Life & Morph is a vibrant celebration of creativity, culture, and
            transformation.
          </p>

          {/* Events Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
            {events.map((event, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="relative rounded-2xl p-[3px] bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-500 animate-gradient-border"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
                  {/* Event Image with Overlay */}
                  <div className="relative">
                    <img
                      src={event.img}
                      alt={event.title}
                      className="w-full h-60 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      {event.date}
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="px-6 py-5 flex-1">
                    <h3 className="text-xl font-bold text-gray-900 hover:text-yellow-500 transition-colors duration-200">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mt-2 leading-relaxed">
                      {event.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient Border Animation */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-border {
          background-size: 300% 300%;
          animation: gradientMove 6s ease infinite;
        }
      `}</style>
    </>
  );
};

export default LifeandMorph;

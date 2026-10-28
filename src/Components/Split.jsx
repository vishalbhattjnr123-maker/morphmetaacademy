const Split = () => {
  const affiliations = [
    "/images/ling.png",
    "/images/gku.png",
    "/images/manipal.png",
    "/images/iso-white.png",
    "/images/iaomorph.png",
    "/images/zuri-white.png",
    "/images/morphlogo.png",
    "/images/boxfy-white.png",
  ];

  const placements = [
    "/images/vfxs.png",
    "/images/dneg1693289872365.webp",
    "/images/fireflyStudios1695273234837.webp",
    "/images/hopmotion.png",
    "/images/image-88-291693220655367.webp",
    "/images/image-90-29-min1693297496891.webp",
    "/images/image-97-291693309694125.png",
    "/images/yfx1693289943101.webp",
    "/images/liminalStudios1695274344862.webp",
    "/images/Rockstar.png",
    "/images/wackytoon1693289836774.webp",
    "/images/image-89-29-min1693297172860.png",
    "/images/image-92-29-min1693309537590.png",
    "/images/probabilityGaming1695274085932.webp",
    "/images/tataElxsi1695273501366.webp",
    "/images/zeetv.png",
  ];

  return (
    <div className="container max-w-7xl mx-auto top_padding pb-12 relative  ">
      {/* Affiliations Section */}
      <section className="relative bg-neutral-900 mb-20">
        {/* Glowing background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-20 rounded-3xl -z-10 blur-3xl"></div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
          Affiliations & Accreditations
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-8 text-center">
          Our institute is proudly affiliated with top industry bodies and accredited by recognized educational authorities.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6 items-center justify-items-center relative z-10">
          {affiliations.map((logo, idx) => (
            <div
              key={idx}
              className="transition-transform transform hover:scale-110 duration-300"
            >
              <img
                src={logo}
                alt="Affiliation"
                className="w-24 md:w-28 object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Placement Section */}
      {/* <section className="relative p-10 rounded-3xl  bg-neutral-800">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-yellow-400 to-orange-500 opacity-20 rounded-3xl -z-10 blur-3xl"></div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
          Placement Partners
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-10 text-center">
          Kickstart your career with our dedicated Placement Cell, connecting you to top companies and opportunities.
        </p>

        <div className="overflow-hidden relative relative z-10">
          <div className="flex animate-marquee gap-8 whitespace-nowrap">
            {placements.map((logo, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-32 md:w-40 transition-transform transform hover:scale-110 duration-300"
              >
                <img src={logo} alt="Placement" className="w-full object-contain" />
              </div>
            ))}
          </div>

          <div className="flex animate-marquee-reverse gap-8 whitespace-nowrap mt-6">
            {placements.map((logo, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-32 md:w-40 transition-transform transform hover:scale-110 duration-300"
              >
                <img src={logo} alt="Placement" className="w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marquee-reverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }
          .animate-marquee {
            display: flex;
            animation: marquee 40s linear infinite;
          }
          .animate-marquee-reverse {
            display: flex;
            animation: marquee-reverse 40s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Split;

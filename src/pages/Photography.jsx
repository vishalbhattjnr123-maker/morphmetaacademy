import { Helmet } from "react-helmet";
import MetaSeo from "../Components/MetaSEO";

const Photography = () => {
  const seo = {
    title: "Photography School Student Portfolio and Showcase",
    description:
      "Photography School Student Portfolio and Showcase, Pursue a career as a professional photographer, specializing in areas such as portrait, landscape, product, fashion, or event photography.",
    keyword:
      "Graphics Designing Course in chandigarh, Graphics Designing Diploma in chandigarh, Graphics Design Institutes in chandigarh, Best Graphics Design Institute in chandigarh, Graphics Designing Classes  in chandigarhNearby, Top Graphics Design Academy near me",
  };

  const images = [
    "/images/bridal-photograhy-student.jpg",
    "/images/fashion-modeling-show].jpg",
    "/images/bridal-photograhy.jpg",
    "/images/india-fhasion.jpg",
    "/images/photography-stu-morph-student-fashiion-work.jpg",
    "/images/photography-stu-morph-student-fashion.jpg",
    "/images/photography-stu-morph-student-fashin-black.jpg",
    "/images/photography-stu-morph-student-fashionblack.jpg",
    "/images/red-fashion-show-photography.jpg",
    "/images/products.jpg",
    "/images/photography-stu-morph-student-work.jpg",
    "/images/photography-stu-morph-student-wor1.jpg",
  ];

  return (
    <>
      <MetaSeo meta={seo} />

      <Helmet>
        <meta charSet="utf-8" />
        <title>Photography School Student Portfolio and Showcase</title>
        <meta
          name="description"
          content="Photography School Student Portfolio and Showcase, Pursue a career as a professional photographer, specializing in areas such as portrait, landscape, product, fashion, or event photography."
        />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        <link rel="canonical" href="https://www.morphacademy.com/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Photography School Student Portfolio and Showcase"
        />
        <meta
          property="og:description"
          content="Photography School Student Portfolio and Showcase, Pursue a career as a professional photographer, specializing in areas such as portrait, landscape, product, fashion, or event photography."
        />
        <meta property="og:url" content="https://www.morphacademy.com/" />
        <meta
          property="og:site_name"
          content="Meta Morph Academy Reviews Chandigarh Sector 34"
        />
        <meta property="og:updated_time" content="2024-02-23T07:14:58+00:00" />
        <meta property="og:image" content=" " />
        <meta property="og:image:secure_url" content=" " />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="800" />
        <meta property="og:image:alt" content=" " />
        <meta property="og:image:type" content="image/jpeg" />
        <meta
          property="article:published_time"
          content="2024-02-23T06:40:47+00:00"
        />
        <meta
          property="article:modified_time"
          content="2024-02-23T07:14:58+00:00"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Photography School Student Portfolio and Showcase"
        />
        <meta
          name="twitter:description"
          content="Photography School Student Portfolio and Showcase, Pursue a career as a professional photographer, specializing in areas such as portrait, landscape, product, fashion, or event photography."
        />
        <meta name="twitter:image" content=" " />
      </Helmet>

      {/* Banner */}
      <div className="bg-black">
        <img
          className="w-full object-cover"
          src="/images/Photohtsphy--Gallery-meta-morph-tp-banner.jpg"
          alt="Meta Morph Photography Banner"
        />

        {/* Heading */}
        <div className="max-w-6xl mx-auto px-4 text-center py-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Photography Gallery
          </h1>
          <p className="text-lg md:text-xl text-yellow-400 mt-4">
            Welcome to our Photography Gallery, where moments become timeless
            art. Explore stunning landscapes, intimate portraits, and dynamic
            street scenes, all captured by talented photographers. Experience
            the beauty and emotion of visual storytelling with us.
          </p>
        </div>

        {/* Gallery */}
        <div className="max-w-6xl mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((src, i) => (
              <div
                key={i}
                data-aos="zoom-out-up"
                className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <img
                  className="w-full h-72 object-cover"
                  src={src}
                  alt={`Morph Academy Photography ${i + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Photography;

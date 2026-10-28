import React from "react";


const Youtube = () => {
  const videoId = "R6VBbt90H2Y";
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&modestbranding=1&rel=0`;

  return (
    <div className="relative max-w-5xl mx-auto mb-10">
      {/* 🔥 Background Scrolling Text */}
      <div className="absolute inset-0 overflow-hidden flex items-center z-0">
        <div className="marquee-text text-[80px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400 opacity-20 whitespace-nowrap">
          {Array(30)
            .fill("MORPH")
            .join(" • ")}
        </div>
      </div>
<h3 className="text-4xl md:text-4xl font-extrabold text-white text-center drop-shadow-xl mb-10">Morph Meta Academy</h3>
      {/* 🎥 Video Box */}
      <div className="relative rounded-2xl p-[4px] animate-border bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-500 z-10">
        <div className="rounded-2xl overflow-hidden bg-black aspect-video">
          <iframe
            className="w-full h-full"
            src={embedUrl}
            title="AR/VR Workshop"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Youtube;

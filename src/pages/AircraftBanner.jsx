import React, { useEffect, useRef } from "react";


const AircraftBanner = () => {
  const bannerRef = useRef(null);

  useEffect(() => {

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = 800;
    canvas.height = 200;

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = "38px sans-serif";
    ctx.textBaseline = "middle";

    ctx.fillStyle = "#25b18e";
    
    ctx.fillStyle = "#515dd2";
    ctx.fillText(
      "Morph Meta Academy Courses",
      10 + ctx.measureText( + " years   ").width,
      50
    );

    // Convert canvas to image
    const img = new Image();
    img.src = canvas.toDataURL();

    img.onload = () => {
      const banner = bannerRef.current;
      if (banner) {
        banner.innerHTML = ""; // Clear previous segments if any

        for (let i = 0; i < 34; i++) {
          const segment = document.createElement("div");
          segment.className = "segment";
          segment.style.animationDelay = i * 0.1 + "s";
          segment.style.backgroundImage = `url(${img.src})`;
          segment.style.backgroundPositionX = `${-19 * i}px`;
          banner.appendChild(segment);
        }
      }
    };
  }, []);

  return (
    <div className="new-air">
    <div className="aircraft-banner">
      <div id="propeller"></div>
      <div id="aircraft"></div>
      <div id="banner" ref={bannerRef}></div>
    </div></div>
  );
};

export default AircraftBanner;

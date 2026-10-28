import React, { useEffect, useState } from "react";


const images = Array.from({ length: 10 }, (_, i) => `https://cornello.eu/${i + 1}.jpg`);

const GraffitiText = () => {
  useEffect(() => {
    const restartAnimation = () => {
      const textElement = document.getElementById("animatedText");
      if (textElement) {
        textElement.style.transition = "none";
        textElement.style.strokeDashoffset = "0";
        setTimeout(() => {
          textElement.style.transition = "stroke-dashoffset 3s ease";
          textElement.style.strokeDashoffset = "1000";
        }, 50);
      }
    };
    restartAnimation();
    const interval = setInterval(restartAnimation, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <svg viewBox="0 0 900 200">
      <defs>
        <pattern id="imagePattern" patternUnits="userSpaceOnUse" width="400" height="400">
          <image href="https://cornello.eu/graffiti.jpg" x="0" y="0" width="400" height="400" />
        </pattern>
        <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="8" result="blurred" />
          <feOffset in="blurred" dx="0" dy="0" result="offsetBlurred" />
          <feFlood floodColor="cyan" result="glowColor" />
          <feComposite in="glowColor" in2="offsetBlurred" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <text id="animatedText" x="50" y="150">StreetArt</text>
    </svg>
  );
};

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const totalCards = images.length;
  const angleIncrement = 360 / totalCards;
  const distance = 350;

  const moveCarousel = (direction) => {
    setIndex((prevIndex) => (prevIndex + direction + totalCards) % totalCards);
  };

  return (
    <div className="carousel-container">
      <div className="carousel" style={{ transform: `rotateY(${-index * angleIncrement}deg)` }}>
        {images.map((img, i) => (
          <div
            key={i}
            className="card"
            style={{
              backgroundImage: `url(${img})`,
              transform: `rotateY(${i * angleIncrement}deg) translateZ(${distance}px)`,
            }}
            onClick={() => openLightbox(img)}
          />
        ))}
      </div>
      <button className="prev" onClick={() => moveCarousel(-1)}>&#10094;</button>
      <button className="next" onClick={() => moveCarousel(1)}>&#10095;</button>
    </div>
  );
};

const Lightbox = ({ imageSrc, onClose }) => {
  if (!imageSrc) return null;
  return (
    <div className="lightbox" onClick={onClose}>
      <img src={imageSrc} alt="Large view" />
    </div>
  );
};

const App = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <div>
      <GraffitiText />
      <Carousel />
      <Lightbox imageSrc={lightboxImage} onClose={() => setLightboxImage(null)} />
    </div>
  );
};

export default App;

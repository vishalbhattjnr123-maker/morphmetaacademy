import React, { useState, useRef, useEffect } from "react";


const Slider1 = ({ autoSlidingDelay = 4000 }) => {
  const sliderRef = useRef(null);
  const [creditsActive, setCreditsActive] = useState(false);

  const [currentSlide, setCurrentSlide] = useState(1);
  const [sliding, setSliding] = useState(false);
  const [autoSlidingBlocked, setAutoSlidingBlocked] = useState(false);

  const numOfSlides = 4; // Number of slides in the slider
  const slidingAT = 1000; // Transition time in ms
  const slidingDelay = 500; // Delay in ms

  const handleSlideChange = (slideID) => {
    if (sliding) return;

    setSliding(true);
    setCurrentSlide(slideID);

    // Slide transition logic here
    setTimeout(() => {
      setSliding(false);
    }, slidingAT + slidingDelay);
  };

  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      if (!autoSlidingBlocked) {
        setCurrentSlide((prev) => (prev % numOfSlides) + 1);
      }
    }, autoSlidingDelay);

    return () => clearInterval(autoSlideInterval);
  }, [autoSlidingBlocked, autoSlidingDelay]);

  const toggleCredits = () => setCreditsActive(!creditsActive);
  const closeCredits = () => setCreditsActive(false);

  const toggleGlobalBlending = () => {
    if (sliderRef.current) {
      sliderRef.current.classList.toggle("m--global-blending-active");
    }
  };

  return (
    <div className="demo-cont">
      {/* Slider Start */}
      <div className="fnc-slider example-slider" ref={sliderRef}>
        <div className="fnc-slider__slides">
          {[...Array(numOfSlides)].map((_, index) => (
            <div
              key={index}
              className={`fnc-slide m--blend-${['green', 'dark', 'red', 'blue'][index]} ${
                currentSlide === index + 1 ? "m--active-slide" : ""
              }`}
            >
              <div className="fnc-slide__inner">
                <div className="fnc-slide__mask">
                  <div className="fnc-slide__mask-inner"></div>
                </div>
                <div className="fnc-slide__content">
                  <h2 className="fnc-slide__heading">
                    <div className="fnc-slide__heading-line">
                      <span>{['Black', 'Captain', 'Iron', 'Thor'][index]}</span>
                    </div>
                    <div className="fnc-slide__heading-line">
                      <span>{['Widow', 'America', 'Man', 'Just Thor'][index]}</span>
                    </div>
                  </h2>
                  <button
                    type="button"
                    className="fnc-slide__action-btn"
                    onClick={toggleCredits}
                  >
                    Credits
                    <span data-text="Credits">Credits</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <nav className="fnc-nav">
          <div className="fnc-nav__bgs">
            {['green', 'dark', 'red', 'blue'].map((bgColor, index) => (
              <div
                key={index}
                className={`fnc-nav__bg m--navbg-${bgColor} ${
                  currentSlide === index + 1 ? "m--active-nav-bg" : ""
                }`}
              ></div>
            ))}
          </div>

          <div className="fnc-nav__controls">
            {['Black Widow', 'Captain America', 'Iron Man', 'Thor'].map((label, index) => (
              <button
                key={index}
                className={`fnc-nav__control ${currentSlide === index + 1 ? "m--active-control" : ""}`}
                onClick={() => handleSlideChange(index + 1)}
              >
                {label}
                <span className="fnc-nav__control-progress"></span>
              </button>
            ))}
          </div>
        </nav>
      </div>
      {/* Slider End */}

      {/* Credits Section */}
      {creditsActive && (
        <div className="demo-cont__credits">
          <div
            className="demo-cont__credits-close"
            onClick={closeCredits}
          ></div>
          <h2 className="demo-cont__credits-heading">Made by</h2>
          <img
            src="//s3-us-west-2.amazonaws.com/s.cdpn.io/142996/profile/profile-512_5.jpg"
            alt="Nikolay Talanov"
            className="demo-cont__credits-img"
          />
          <h3 className="demo-cont__credits-name">Nikolay Talanov</h3>
          <a
            href="https://codepen.io/suez/"
            target="_blank"
            rel="noopener noreferrer"
            className="demo-cont__credits-link"
          >
            My Codepen
          </a>
          <a
            href="https://twitter.com/NikolayTalanov"
            target="_blank"
            rel="noopener noreferrer"
            className="demo-cont__credits-link"
          >
            My Twitter
          </a>
          <h2 className="demo-cont__credits-heading">Based on</h2>
          <a
            href="https://dribbble.com/shots/2375246-Fashion-Butique-slider-animation"
            target="_blank"
            rel="noopener noreferrer"
            className="demo-cont__credits-link"
          >
            Concept by Kreativa Studio
          </a>
          <h4 className="demo-cont__credits-blend">Global Blend Mode</h4>
          <div className="colorful-switch">
            <input
              type="checkbox"
              className="colorful-switch__checkbox js-activate-global-blending"
              id="colorful-switch-cb"
              onClick={toggleGlobalBlending}
            />
            <label className="colorful-switch__label" htmlFor="colorful-switch-cb">
              <span className="colorful-switch__bg"></span>
              <span className="colorful-switch__dot"></span>
              <span className="colorful-switch__on">
                <span className="colorful-switch__on__inner"></span>
              </span>
              <span className="colorful-switch__off"></span>
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default Slider1;

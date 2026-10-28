import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";


const pokemonData = [
  {
    name: "Giratina",
    type: "Ghost, Dragon",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/487.svg",
  },
  {
    name: "Rayquaza",
    type: "Dragon, Flying",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/384.svg",
  },
  {
    name: "Kyrum",
    type: "Dragon, Ice",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/646.svg",
  },
  {
    name: "Lugia",
    type: "Psychic, Flying",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/249.svg",
  },
  {
    name: "Groudon",
    type: "Ground",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/383.svg",
  },
];

const HotelSwiper = () => {
  useEffect(() => {
    new Swiper(".swiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      autoplay: {
        delay: 3000,
      },
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
      },
      spaceBetween: 50,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  return (
    <div id="gog">
    <div className="container">
      <div className="swiper">
        <div className="swiper-wrapper">
          {pokemonData.map((pokemon, index) => (
            <div className="swiper-slide" key={index}>
              <img src={pokemon.img} alt={pokemon.name} />
              <div className="info">
                <h4 className="name">{pokemon.name}</h4>
                <span className="type">{pokemon.type}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
    </div>
  );
};

export default HotelSwiper;
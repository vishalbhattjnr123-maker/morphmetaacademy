
const textElement = document.getElementById("animatedText");

function restartAnimation() {
  textElement.style.transition = "none";
  textElement.style.strokeDashoffset = "0";

  setTimeout(() => {
    textElement.style.transition = "stroke-dashoffset 3s ease";
    textElement.style.strokeDashoffset = "1000";
  }, 50);
}


restartAnimation();
setInterval(restartAnimation, 10000);



let index = 0;
const totalCards = 10;
const carousel = document.querySelector(".carousel");

const angleIncrement = 360 / totalCards; // 36 degrees per card
const distance = 350; // Verhoog de afstand tussen de kaarten

// Set each card's position in 3D space
document.querySelectorAll(".card").forEach((card, i) => {
  card.style.transform = `rotateY(${
    i * angleIncrement
  }deg) translateZ(${distance}px)`;
});

function moveCarousel(direction) {
  index += direction;

  if (index < 0) index = totalCards - 1; // Als je achteruit gaat, begin bij de laatste kaart
  if (index >= totalCards) index = 0; // Als je vooruit gaat, begin bij de eerste kaart

  updateCarousel();
}

function updateCarousel() {
  const angle = -index * angleIncrement; // Draai de carousel op basis van de huidige index
  carousel.style.transform = `rotateY(${angle}deg)`;
}

// Lightbox functionaliteit
function openLightbox(imageSrc) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-img");

  lightboxImage.src = imageSrc;
  lightbox.style.display = "flex"; // Toon de lightbox
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.style.display = "none"; // Verberg de lightbox
}

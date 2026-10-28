const splitLeft = document.querySelector('.split--left');
const splitRight = document.querySelector('.split--right');
const container = document.querySelector('.container');

splitLeft.addEventListener('mouseenter' ,function(){
  container.classList.add('active--left');
});
splitLeft.addEventListener('mouseleave' ,function(){
  container.classList.remove('active--left');
});


splitRight.addEventListener('mouseenter' ,function(){
  container.classList.add('active--right');
});

splitRight.addEventListener('mouseleave' ,function(){
  container.classList.remove('active--right');
});

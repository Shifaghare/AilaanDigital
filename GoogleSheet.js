


const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
const container = document.querySelector('.customers-container');

leftBtn.addEventListener('click', () => {
  container.scrollBy({
    left: -300, // Adjust the scroll distance
    behavior: 'smooth'
  });
});

rightBtn.addEventListener('click', () => {
  container.scrollBy({
    left: 300, // Adjust the scroll distance
    behavior: 'smooth'
  });
});


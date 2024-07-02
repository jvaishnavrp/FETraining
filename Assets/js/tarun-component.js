document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const overlay = document.querySelector('.overlay');
    const closeBtn = document.querySelector(".close_btn");
  
    menuToggle.addEventListener('click', function() {
      overlay.classList.toggle('active');
      console.log("hfhjdbfhj")
    });
  
    closeBtn.addEventListener('click', function() {
      overlay.classList.remove('active');
    });
  });


  //Carousel
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const slides = document.querySelector('.carousel__slides');
  const slideItems = document.querySelectorAll('.carousel__slides__slide');
  const totalSlides = slideItems.length;
  let currentIndex = 0;
  let slideWidth = slideItems[0].getBoundingClientRect().width; // Get the width of the first slide

  function goToSlide(index) {
    currentIndex = index;
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  prevButton.addEventListener('click', () => {
   currentIndex > 0 ? currentIndex-- : (currentIndex = totalSlides - 1);
   goToSlide(currentIndex);
  });

  nextButton.addEventListener('click', () => {
    (currentIndex < totalSlides - 1) ? currentIndex++ : (currentIndex = 0);
    goToSlide(currentIndex)
  });

  window.addEventListener('resize', () => {
    slideWidth = slideItems[0].getBoundingClientRect().width;
    goToSlide(currentIndex);
  });
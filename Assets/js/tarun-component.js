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
  
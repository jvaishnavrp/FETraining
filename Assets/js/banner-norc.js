// script.js
const video = document.getElementById("myVideo");
const btn = document.getElementById("playPauseBtn");

btn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    btn.textContent = "Pause";
  } else {
    video.pause();
    btn.textContent = "Play";
  }
});

export default bannernorc;
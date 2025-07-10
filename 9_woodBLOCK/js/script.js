const videos = document.querySelectorAll(".insta-video video");

videos.forEach(video => {
  video.addEventListener("mouseenter", () => {
    video.play(); 
  });

  video.addEventListener("mouseleave", () => {
    video.pause(); 
    video.currentTime = 0;
  });
});
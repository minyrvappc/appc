document.addEventListener("DOMContentLoaded", () => {
  const wish = document.getElementById("wish");
  const video = document.querySelector("#wish video");

  video.addEventListener("ended", () => {
    wish.remove();
  });
});

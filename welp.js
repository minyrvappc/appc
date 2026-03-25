
const video = document.getElementById("bgVideo");
const wish = document.getElementById("wish");

video.addEventListener("ended", () => {
  wish.remove();
});

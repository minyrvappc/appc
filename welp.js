document.querySelector(".left").addEventListener("mouseenter", () => {
  document.querySelectorAll(".left, .right, .middle, #page2, #msg, #white")
    .forEach(el => el.classList.add("animated"));
});

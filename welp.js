document.querySelector(".left").addEventListener("mouseenter", () => {
  document.querySelectorAll(".left, .right, .middle, #page2, #msg, #white")
    .forEach(el => el.classList.add("animated"));
});

document.querySelector(".scroll".addEventListener("mouseenter", () => {
  confetti({
  particleCount: 300,
  spread: 90,
  origin: { x: 1, y: .9 }
});
  
  confetti({
  particleCount: 300,
  spread: 90,
  origin: { x: 0, y: .9 }
});
}))


const progressBarFiller = document.querySelector(".progress-bar-filler");
const hidden = document.querySelector(".hidden");
const logo = document.querySelector(".logo");
const load = document.querySelector(".load");
const button = document.querySelector(".button");
const land = document.querySelector(".land");
const meow = document.querySelector(".meow");
const triangle = document.querySelector(".triangle");
const contact = document.querySelector(".contact");

let progress = 0;

setInterval(() => {
  progressBarFiller.style.width = `${progress}%`;

  if (progress <= 100) {
    progress += 5;
  } else if (progress > 100) {
    setTimeout(() => {
      document.querySelector(".preloader").style.display = "none";
      document.querySelector(".hidden").style.opacity = "1";
      document.querySelector(".logo").style.margin = "0 0 40px";
    }, 1000);
    logo.addEventListener("mouseover", (e) => {
      document.querySelector(".meow").style.opacity = "1";
      document.querySelector(".triangle").style.opacity = "1";
    });

    logo.addEventListener("mouseout", (e) => {
      document.querySelector(".triangle").style.opacity = "0";
      document.querySelector(".meow").style.opacity = "0";
    });
  }
}, 50);

button.addEventListener("click", (e) => {
  document.querySelector(".load").style.display = "none";
  document.querySelector(".land").style.display = "grid";
  setTimeout(() => {
    document.querySelector(".land").style.opacity = "1";
  }, 100);
});

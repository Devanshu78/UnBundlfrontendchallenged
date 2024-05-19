/* List */

const options = document.querySelector(".treatmentclick");
const helpoptions = document.querySelector(".helpclick");
const treat = document.querySelector("#treatmentOptions");
const help = document.querySelector("#helplist");
options.addEventListener("click", () => {
  if (treat.style.display === "none" || treat.style.display === "") {
    treat.style.display = "block";
    treat.classList.toggle("animate");
  } else {
    treat.style.display = "none";
  }
});

helpoptions.addEventListener("click", (e) => {
  if (help.style.display === "none" || help.style.display === "") {
    help.style.display = "block";
    help.classList.toggle("animate");
  } else {
    help.style.display = "none";
  }
});

/* CAROUSEL */

document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const images = Array.from(track.children);
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  let currentIndex = 1; // Start with the second image

  const setTrackPosition = (index) => {
    const imageWidth = track.getBoundingClientRect().width / 3;
    track.style.transform = `translateX(${
      -(imageWidth * index) + imageWidth / 2
    }px)`;
  };

  prevBtn.addEventListener("click", () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    setTrackPosition(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    setTrackPosition(currentIndex);
  });

  setTrackPosition(currentIndex); // Ensure the second image is centered on load
});

/* BLOG SECTION */

const listItems = document.querySelectorAll("#bloglist li");
const details = document.querySelectorAll(".detail");

listItems.forEach((item) => {
  item.addEventListener("click", () => {
    listItems.forEach((li) => li.classList.remove("active"));
    item.classList.add("active");
    details.forEach((detail) => detail.classList.remove("active"));
    const target = item.getAttribute("data-target");
    document.getElementById(target).classList.add("active");
  });
});

/* FAQ SECTION */

document.addEventListener("DOMContentLoaded", () => {
  const toggleIcons = document.querySelectorAll("#toggle-icon");

  toggleIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      const answer = icon.parentElement.nextElementSibling;
      if (answer.style.display === "none" || answer.style.display === "") {
        answer.style.display = "block";
      } else {
        answer.style.display = "none";
      }
    });
  });
});

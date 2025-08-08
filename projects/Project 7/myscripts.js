// Gallery 
const imgPath = "Images/";
const imgArray = [
  "HuntingDogsLg.jpg",
  "GermanShephard2Lg.jpg",
  "CatandDogLg.jpg",
  "Pig1Lg.jpg"
];

const titleArray = [
  "Golden Retrievers Out for a Walk",
  "German Shepherd Ready for Pickup",
  "Cat and Dog Lounging at Home",
  "Smiling Mini Pig on Lawn"
];

// Preload helper
function preloadImages() {
  const cache = [];
  function preload(src) {
    const i = new Image();
    i.src = src;
    cache.push(i);
  }

  // Rollover assets
  logoDefault.src = "Images/logo1.png";
  logoHover.src = "Images/logo2.png";
  preload(logoDefault.src);
  preload(logoHover.src);

  // Gallery assets
  for (let i = 0; i < imgArray.length; i++) {
    preload(imgPath + imgArray[i]);
  }
}

// Image swap
function swapMe(imgName, newImg) {
  
  try {
    if (document.images && window[newImg]) {
      document[imgName].src = window[newImg].src;
    }
  } catch (e) {
  
  }
}

// Hover to swap main image & caption
function swapImage(index) {
  const imgEl = document.getElementById("theImage");
  const txtEl = document.getElementById("bottomText");
  if (!imgEl || !txtEl) return;
  imgEl.src = imgPath + imgArray[index];
  txtEl.textContent = titleArray[index] || "";
}

// Auto-rotate slideshow
let currentSlide = 0;
function rotateSlide() {
  currentSlide = (currentSlide + 1) % imgArray.length;
  swapImage(currentSlide);
}

// Start rotation
window.addEventListener("DOMContentLoaded", function () {
  setInterval(rotateSlide, 3000);
});

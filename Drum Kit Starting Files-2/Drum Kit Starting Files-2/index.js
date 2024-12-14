
const buttonW = document.querySelector(".w");
const buttonA = document.querySelector(".a");
const buttonS = document.querySelector(".s");
const buttonD = document.querySelector(".d");
const buttonJ = document.querySelector(".j");
const buttonK = document.querySelector(".k");
const buttonL = document.querySelector(".l");

buttonW.addEventListener("click", function () {
  playSound("w");
  animateButton("w");
});

buttonA.addEventListener("click", function () {
  playSound("a");
  animateButton("a");
});

buttonS.addEventListener("click", function () {
  playSound("s");
  animateButton("s");
});

buttonD.addEventListener("click", function () {
  playSound("d");
  animateButton("d");
});

buttonJ.addEventListener("click", function () {
  playSound("j");
  animateButton("j");
});

buttonK.addEventListener("click", function () {
  playSound("k");
  animateButton("k");
});

buttonL.addEventListener("click", function () {
  playSound("l");
  animateButton("l");
});


document.addEventListener("keydown", function (event) {
  const key = event.key.toLowerCase();
  if (key === "w") {
    playSound("w");
    animateButton("w");
  } else if (key === "a") {
    playSound("a");
    animateButton("a");
  } else if (key === "s") {
    playSound("s");
    animateButton("s");
  } else if (key === "d") {
    playSound("d");
    animateButton("d");
  } else if (key === "j") {
    playSound("j");
    animateButton("j");
  } else if (key === "k") {
    playSound("k");
    animateButton("k");
  } else if (key === "l") {
    playSound("l");
    animateButton("l");
  }
});


function playSound(key) {
  let sound;
  switch (key) {
    case "w":
      sound = new Audio("sounds/crash.mp3");
      break;
    case "a":
      sound = new Audio("sounds/kick-bass.mp3");
      break;
    case "s":
      sound = new Audio("sounds/snare.mp3");
      break;
    case "d":
      sound = new Audio("sounds/tom-1.mp3");
      break;
    case "j":
      sound = new Audio("sounds/tom-2.mp3");
      break;
    case "k":
      sound = new Audio("sounds/tom-3.mp3");
      break;
    case "l":
      sound = new Audio("sounds/tom-4.mp3");
      break;
    default:
      console.error("Invalid key: " + key);
      return;
  }
  sound.play();
}


function animateButton(key) {
  const button = document.querySelector(`.${key}`);
  if (button) {
    button.classList.add("pressed");
    setTimeout(() => button.classList.remove("pressed"), 100); 
  }
}

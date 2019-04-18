let randX;
let randY;
let count = 20;
let scores = 0;
let fishes = [];
const fishType = ["fish1", "fish2", "fish3"];

window.onload = () => {
  let aquarium = document.getElementById("aquarium");
  for (let i = 0; i < count; i++) {
    generateFish();
  }
  setInterval(() => {
    fishes = document.getElementsByClassName("fish");
    moveFish();
  }, 2000);
};

function generateFish() {
  let type = Math.floor(Math.random() * fishType.length);
  let randX = getRandom(10, document.documentElement.clientWidth - 100);
  let randY = getRandom(10, document.documentElement.clientHeight - 100);
  let fish = document.createElement("img");
  fish.setAttribute("src", "../img/" + fishType[type] + ".png");
  fish.setAttribute("width", "80");
  fish.classList.add("fish");
  aquarium.appendChild(fish);
  fish.style.top = randY + "px";
  fish.style.left = randX + "px";
  addScoreHandle(fish);
}

function moveFish() {
  for (let i = 0; i < fishes.length; i++) {
    let move = Math.random() * (4000 - 1000) + 1000;
    setTimeout(() => {
      randX = getRandom(10, document.documentElement.clientWidth - 100);
      randY = getRandom(10, document.documentElement.clientHeight - 100);
      if (parseInt(fishes[i].style.left.replace("px", ""), 10) > randX) {
      } else {
      }
      fishes[i].style.transitionDuration = "3s";
      fishes[i].style.top = randY + "px";
      fishes[i].style.left = randX + "px";
    }, move);
  }
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log();
function addScoreHandle(fish) {
  let counterDisplay = document.getElementById("counter");
  fish.addEventListener("click", () => {
    scores++;
    counterDisplay.innerHTML = scores;
    removeFish()
  });
}

function removeFish() {
  for(let i = 0; i < fishes.length; i++) {
    fishes.splice(i, 1);
  }
}

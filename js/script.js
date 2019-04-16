let randX;
let randY;
let count = 20;
let fishes = [];
const fishType = ["fish1", "fish2", "fish3"];

window.onload = () => {
  let aquarium = document.getElementById("aquarium");
  let counterDisplay = document.getElementById("counter");
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
  let fish = document.createElement("img");
  fish.setAttribute("src", "../img/" + fishType[type] + ".png");
  fish.setAttribute("width", "80");
  fish.classList.add("fish");
  aquarium.appendChild(fish);
}

function moveFish() {
  for (let i = 0; i < fishes.length; i++) {
    let move = Math.random() * (3000 - 500) + 500;
    setTimeout(() => {
      randX = Math.random() * aquarium.offsetWidth;
      randY = Math.random() * (aquarium.offsetHeight - 200);
      if (parseInt(fishes[i].style.left.replace('px', ''), 10) > randX) {
        fishes[i].style.transform = "scale(-1, 1)";
      } else {
        fishes[i].style.transform = "scale(1, 1)";
      }
      fishes[i].style.top = randY + "px";
      fishes[i].style.left = randX + "px";
    }, move);
  }
}

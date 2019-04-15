let randX;
let randY;
let counter = 0;
let fishes = [];
const fishType = ["fish1", "fish2"];
window.onload = () => {
  let aquarium = document.getElementById("aquarium");
  let counterDisplay = document.getElementById("counter");
  for (let i = 0; i < 10; i++) {
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
    let move = Math.random() * (2000 - 500) + 500
    setTimeout(() => {
      randX = Math.random() * (aquarium.offsetWidth )
      randY = Math.random() * (aquarium.offsetHeight - 200) 
      if (fishes[i].style.left > randX + 'px') {
        fishes[i].style.transitionTime = "0s"
        fishes[i].style.transform = 'scale(-1, 1)';
      } else {
        fishes[i].style.transitionTime = "0s"
        fishes[i].style.transform = 'scale(1, 1)';
      }
      fishes[i].style.transitionTime = "3s"
      fishes[i].style.top = randY + "px";
      fishes[i].style.left = randX + "px";
    }, move);
  }
}

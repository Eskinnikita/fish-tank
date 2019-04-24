let randX;
let randY;
let count = 20;
let scores = 0;
let fishArr = [];
let time = 18;
const fishType = ["fish1", "fish2", "fish3"];
let moveInterval;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("play-button").addEventListener("click", startGame);
});

function startGame() {
  closePreview();
  let aquarium = document.getElementById("aquarium");
  for (let i = 0; i < count; i++) {
    generateFish();
  }
  fishArr = document.getElementsByClassName("fish");
  moveInterval = setInterval(() => {
    moveFish();
  }, 2000);
  startTimer();
}

function closePreview() {
  document.getElementById("preview").style.display = "none";
  document.getElementById("gameInfo").style.display = "flex";
}

function startTimer() {
  let timeDis = document.getElementById("time");
  let timeInterval = setInterval(() => {
    time--;
    if (time <= 15) {
      timeDis.innerHTML = "Time left: " + time;
    }
    if (time <= 0) {
      clearInterval(timeInterval);
      clearInterval(moveInterval);
      showResults();
      while (aquarium.firstChild) {
        aquarium.remove(aquarium.firstChild);
      }
    }
  }, 1000);
}

function showResults() {
  console.log(scores);
  document.getElementById("gameInfo").style.display = "none";
  document.getElementById("scores").innerHTML = "You got " + scores + " scores";
  document.getElementById("results").style.display = "block";
  document.getElementById("restart").addEventListener("click", () => {
    location.reload();
  });
}

function generateFish() {
  let type = Math.floor(Math.random() * fishType.length);
  let randX = getRandom(10, document.documentElement.clientWidth - 100);
  let randY = getRandom(10, document.documentElement.clientHeight - 100);
  let fish = document.createElement("img");
  fish.setAttribute("src", "../img/" + fishType[type] + ".webp");
  fish.setAttribute("width", "80");
  fish.classList.add("fish");
  aquarium.appendChild(fish);
  // fish.style.transform = "translate(" + randX + "px," + randY +"px)"
  fish.style.top = randY + "px";
  fish.style.left = randX + "px";
  addScoreHandle(fish);
}

function moveFish() {
  for (let i = 0; i < count; i++) {
    let move = Math.random() * (4000 - 1000) + 1000;
    setTimeout(() => {
      randX = getRandom(10, document.documentElement.clientWidth - 100);
      randY = getRandom(10, document.documentElement.clientHeight - 100);
      if (parseInt(fishArr[i].style.left.replace("px", ""), 10) > randX) {
        fishArr[i].style.transform = "scaleX(-1)";
      } else {
        fishArr[i].style.transform = "scaleX(1)";
      }
      fishArr[i].style.top = randY + "px";
      fishArr[i].style.left = randX + "px";
    }, move);
  }
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function addScoreHandle(fish) {
  let counterDisplay = document.getElementById("counter");
  fish.addEventListener("click", () => {
    scores++;
    counterDisplay.innerHTML = "Scores: " + scores;
    fish.setAttribute("src", "../img/bubbles.gif");
    setTimeout(() => {
      aquarium.removeChild(fish);
    }, 400);
    generateFish();
  });
}

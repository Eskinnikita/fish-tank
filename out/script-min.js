let randX,
  randY,
  count = 20,
  scores = 0,
  fishes = [],
  time = 200;
const fishType = ["fish1", "fish2", "fish3"];
let moveInterval;
function closePreview() {
  (document.getElementById("preview").style.display = "none"),
    (document.getElementById("gameInfo").style.display = "flex");
}
function startGameSession() {
  let e = document.getElementById("time"),
    t = setInterval(() => {
      if ((time--, (e.innerHTML = "Time left: " + time), time <= 0))
        for (
          clearInterval(t), clearInterval(moveInterval);
          aquarium.firstChild;

        )
          aquarium.remove(aquarium.firstChild);
    }, 1e3);
}
function generateFish() {
  let e = Math.floor(Math.random() * fishType.length),
    t = getRandom(10, document.documentElement.clientWidth - 100),
    n = getRandom(10, document.documentElement.clientHeight - 100),
    s = document.createElement("img");
  s.setAttribute("src", "../img/" + fishType[e] + ".webp"),
    s.setAttribute("width", "80"),
    s.classList.add("fish"),
    aquarium.appendChild(s),
    (s.style.top = n + "px"),
    (s.style.left = t + "px"),
    addScoreHandle(s);
}
function moveFish() {
  for (let e = 0; e < count; e++) {
    let t = 3e3 * Math.random() + 1e3;
    setTimeout(() => {
      (randX = getRandom(10, document.documentElement.clientWidth - 100)),
        (randY = getRandom(10, document.documentElement.clientHeight - 100)),
        parseInt(fishes[e].style.left.replace("px", ""), 10) > randX
          ? (fishes[e].style.transform = "scaleX(-1)")
          : (fishes[e].style.transform = "scaleX(1)"),
        (fishes[e].style.transitionDuration = "5s"),
        (fishes[e].style.top = randY + "px"),
        (fishes[e].style.left = randX + "px");
    }, t);
  }
}
function getRandom(e, t) {
  return Math.floor(Math.random() * (t - e + 1) + e);
}
function addScoreHandle(e) {
  let t = document.getElementById("counter");
  e.addEventListener("click", () => {
    scores++,
      (t.innerHTML = "Scores: " + scores),
      e.setAttribute("src", "../img/bubbles.gif"),
      setTimeout(() => {
        aquarium.removeChild(e);
      }, 400),
      generateFish();
  });
}
document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("play-button")
    .addEventListener("click", closePreview);
  document.getElementById("aquarium");
  for (let e = 0; e < count; e++) generateFish();
  moveInterval = setInterval(() => {
    (fishes = document.getElementsByClassName("fish")), moveFish();
  }, 2e3);
});

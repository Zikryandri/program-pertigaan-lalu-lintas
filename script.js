// ROAD 1
let road1 = document.getElementById("road1");
let r1Green = document.getElementById("r1Green");
let r1Red = document.getElementById("r1Red");

// ROAD 2
let road2 = document.getElementById("road2");
let r2Green = document.getElementById("r2Green");
let r2Red = document.getElementById("r2Red");

// ROAD 3
let road3 = document.getElementById("road3");
let r3Green = document.getElementById("r3Green");
let r3Red = document.getElementById("r3Red");

let roads = [
  { green: r1Green, red: r1Red },
  { green: r2Green, red: r2Red },
  { green: r3Green, red: r3Red },
];

function activateGreenRoad(roadIndex) {
  roads.forEach(function (road, index) {
    if (index === roadIndex) {
      road.green.classList.remove("notActive");
      road.red.classList.add("notActive");
    } else {
      road.green.classList.add("notActive");
      road.red.classList.remove("notActive");
    }
  });
}

function startTimer(roadIndex) {
  setTimeout(function () {
    activateGreenRoad(roadIndex);
    roadIndex = (roadIndex + 1) % 3;
    startTimer(roadIndex);
  }, 2000);
}

startTimer(0);

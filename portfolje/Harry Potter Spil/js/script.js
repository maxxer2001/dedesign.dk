window.addEventListener("load", start);

let lives;
let points;
let seconds = 30;
let rndNum;

const dumbledore_container = document.querySelector("#dumbledore_container");
const dumbledore_svg = document.querySelector("#dumbledore_svg");
const dumbledore2_container = document.querySelector("#dumbledore2_container");
const dumbledore2_svg = document.querySelector("#dumbledore2_svg");
const snape_container = document.querySelector("#snape_container");
const snape_svg = document.querySelector("#snape_svg");

console.log(dumbledore2_container);
console.log(dumbledore2_svg);
const snake_container = document.querySelector("#snake_container");
const snake_svg = document.querySelector("#snake_svg");

function start() {
  console.log("1");
  hideAllScreens();
  document.querySelector("#start_screen").classList.remove("hidden");
  document.querySelector("#start_button").addEventListener("click", startGame);
}

function startGame() {
  console.log("2");
  hideAllScreens();
   lives = 3;
  points = 0;
  document.querySelector("#points").innerText = points;
  document.querySelector("#lives").innerText = lives;
  document.querySelector("#heart1").classList.remove("hidden");
  document.querySelector("#heart2").classList.remove("hidden");
  document.querySelector("#heart3").classList.remove("hidden");

  timer();
 
  rndNum = getRandomIntInclusive(1, 5);
  let rndPos = "droppos" + rndNum;
  console.log(rndPos);
  dumbledore_container.classList.add(rndPos);
  
  rndNum = getRandomIntInclusive(1, 5);
  rndPos = "droppos" + rndNum;
  console.log(rndPos);
  dumbledore2_container.classList.add(rndPos);
  
  rndNum = getRandomIntInclusive(1, 5);
  rndPos = "droppos" + rndNum;
  console.log(rndPos);
  snape_container.classList.add(rndPos);
  
  rndNum = getRandomIntInclusive(1, 3);
  let rndDelay = "delay" + rndNum;
  console.log(rndDelay);
  dumbledore_container.classList.add(rndDelay);
  
  rndNum = getRandomIntInclusive(1, 3);
  rndDelay = "delay" + rndNum;
  console.log(rndDelay);
  dumbledore_container.classList.add(rndDelay);
  
  rndNum = getRandomIntInclusive(1, 3);
  rndDelay = "delay" + rndNum;
  console.log(rndDelay);
  dumbledore2_container.classList.add(rndDelay);
  
  rndNum = getRandomIntInclusive(1, 2);
  let rndSpeed = "speed" + rndNum;
  console.log(rndSpeed);
  dumbledore_container.classList.add(rndSpeed);
  
  rndNum = getRandomIntInclusive(1, 2);
  rndSpeed = "speed" + rndNum;
  console.log(rndSpeed);
  dumbledore_container.classList.add(rndSpeed);
  
  rndNum = getRandomIntInclusive(1, 4);
  rndSpeed = "speed" + rndNum;
  console.log(rndSpeed);
  dumbledore2_container.classList.add(rndSpeed);

  snape_container.classList.add("drop");
  dumbledore_container.classList.add("drop");
  dumbledore2_container.classList.add("drop");
  snake_container.classList.add("drop");

  dumbledore_container.addEventListener("mousedown", clickPositive);
  dumbledore2_container.addEventListener("mousedown", clickPositive);
  snape_container.addEventListener("mousedown", clickPositive);
  //lyt efter om der bliver klikket på snakeen - gå til functionen clickNegative når der bliver klikket
  snake_container.addEventListener("mousedown", clickNegative);

  //lyt efter om der animationen på dumbledore har kørt en gang (iteration) - gå til resetPositive() når det sker
  snape_container.addEventListener("animationiteration", resetPositive);
  dumbledore_container.addEventListener("animationiteration", resetPositive);
  dumbledore2_container.addEventListener("animationiteration", resetPositive);
  //lyt efter om der animationen på snake har kørt en gang (iteration) - gå til resetNegative() når det sker
  snake_container.addEventListener("animationiteration", resetNegative);
}

function clickPositive() {
  console.log("3");
  console.log("clickPositive");

  //fjern eventlistneren så man ikke længere kan klikke
  this.removeEventListener("mousedown", clickPositive);

  //tæller op på point
  points = points + 1;
  //opdaterer point i spillet
  document.querySelector("#points").innerText = points;

  //put klassen stop på dumbledore container
  this.classList.add("stop");
  //put klassen disappear på dumbledore svg
  this.firstElementChild.classList.add("disappear");

  //lytter efter animationen på dumbledore, når den er færdig så kaldes funktionen resetPositive
  this.addEventListener("animationend", resetPositive);
}

function hidestartScreen() {
  console.log("4");
  const startScreen = document.getElementById("start_screen");
  startScreen.style.display = "none";
}

function hideGameOver() {
  console.log("5");
  const gameover = document.getElementById("gameover");
  gameover.style.display = "none";
}

function hideAllScreens() {
  console.log("6");
  document.querySelector("#gameover").classList.add("hidden");
  // document.querySelector("#gameover").classList.add("fake");
  // document.querySelector("#level_complete").classList.add("hidden");
  document.querySelector("#start_screen").classList.add("hidden");
  // document.querySelector("#start_screen").classList.add("fake");
}

// startGame();

function timer() {
  console.log("7");
  seconds--;
  document.getElementById("timer").innerText = seconds;
  if (seconds > 0) {
    setTimeout(timer, 1000);
  } else {
    gameOver();
  }
}

function getRandomIntInclusive(min, max) {
  // console.log("8");
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

function clickNegative() {
  console.log("9");
  console.log("clickNegative");

  //fjern eventlistneren så man ikke længere kan klikke
  snake_container.removeEventListener("mousedown", clickNegative);

  //put klassen stop på snake container
  snake_container.classList.add("stop");
  //put klassen disappear på snake svg
  snake_svg.classList.add("disappear");

  // hvis du har 3 hjerter:
  // fjern det hjerte som svarer til værdien af antal liv:
  let hearts = "#heart" + lives;
  document.querySelector(hearts).classList.add("hidden");

  //tæller ned på liv
  lives = lives - 1;

  // hvis du viser liv som et tal:
  // opdaterer liv i spillet
  document.querySelector("#lives").innerText = lives;

  // console.log(lives);

  if (lives === 0) {
    endGame();
  } else {
    // hvis der er liv tilbage, så lytter vi efter animationen på snakeen,
    // når animationen er færdig, så kaldes funktionen resetNegative
    snake_container.addEventListener("animationend", resetNegative);
  }
}

function resetPositive() {
  console.log("10");
  console.log("positiveReset");

  // fjern alle klasserne (fald, frys og pos) fra carljohans container
  this.classList = "";
  // fjern alle klasserne fra carljohans sprite
  this.firstElementChild.classList = "";

  // ny random position
  rndNum = getRandomIntInclusive(1, 5);
  let rndPos = "droppos" + rndNum;
  console.log("dumb" + rndPos);
  // giv positionen til carljohan
  this.classList.add(rndPos);

  // ny random speed
  rndNum = getRandomIntInclusive(1, 2);
  let rndSpeed = "speed" + rndNum;
  this.classList.add(rndSpeed);

  // force reflow på carljohan og sæt faldeanimation på igen
  this.offsetHeight;
  this.classList.add("drop");

  // lyt igen efter klik på carljohan, gå til funktionen clickCarlJohan hvis der klikkes
  this.addEventListener("mousedown", clickPositive);
}

function resetNegative() {
  console.log("11");
  console.log("NegativeReset");

  // rydder Negative_container's classList (hop, frys og pos)
  snake_container.classList = "";
  // rydder Negative_sprite's classList
  snake_svg.classList = "";

  // ny random position
  rndNum = getRandomIntInclusive(1, 5);
  let rndPos = "pos" + rndNum;
  console.log("snake" + rndPos);
  // giv positionen til Negative
  snake_container.classList.add(rndPos);

  // force reflow på Negative og sæt hoppeanimation på igen
  snake_container.offsetHeight;
  snake_container.classList.add("drop");

  // lyt efter klik på Negative, gå til funktionen clickNegative når der klikkes
  snake_container.addEventListener("mousedown", clickNegative);
}

function endGame() {
  console.log("12");
  console.log("endGame");
  // fjern alle animationer
  dumbledore_container.classList = "";
  snake_container.classList = "";

  // Nulstil timer
  // timeglas.classList = "";
  // timeglas.removeEventListener("animationend", endGame);

  // Tjek om spillet er vundet
  if (points < 4 || lives === 0) {
    gameOver();
  } else {
    win();
  }
}

function gameOver() {
  console.log("13");
  console.log("gameOver");
  // vis game over skærm
  hideAllScreens();
  document.querySelector("#gameover").classList.remove("hidden");
  // lyt efter om der bliver klikket på spil-igen-knappen
  document.querySelector("#start_button").addEventListener("click", startGame);
}

function win() {
  console.log("14");
  alert("Yay, you won!");
}


function reStartGame(){
  startGame()
}
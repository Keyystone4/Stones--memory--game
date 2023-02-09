// 1) Define required constants//
const IMAGES = [
   {src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Pittsburgh_Steelers_logo.svg/392px-Pittsburgh_Steelers_logo.svg.png", name: "steelers"},
   {src: "https://i.pinimg.com/originals/e1/69/08/e169088e82bacaa742db4b2a9b35691b.png", name: 'eagles'},
   {src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVMxkvPOl0fzuvhOFtBLbnJME8f1iy1PzWCCcn49qs&s", name: "chiefs"},
   {src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Cincinnati_Bengals_logo.svg/2560px-Cincinnati_Bengals_logo.svg.png", name: "bengals"},
   {src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Green_Bay_Packers_logo.svg/2560px-Green_Bay_Packers_logo.svg.png", name: "packers"},
   {src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/New_Orleans_Saints_logo.svg/630px-New_Orleans_Saints_logo.svg.png", name: "saints"},

  {src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Pittsburgh_Steelers_logo.svg/392px-Pittsburgh_Steelers_logo.svg.png", name: "steelers"},
  {src: "https://i.pinimg.com/originals/e1/69/08/e169088e82bacaa742db4b2a9b35691b.png", name: "eagles"},
  {src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVMxkvPOl0fzuvhOFtBLbnJME8f1iy1PzWCCcn49qs&s", name: 'chiefs'},
  {src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Cincinnati_Bengals_logo.svg/2560px-Cincinnati_Bengals_logo.svg.png", name: "bengals"},
  {src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Green_Bay_Packers_logo.svg/2560px-Green_Bay_Packers_logo.svg.png", name: "packers"},
  {src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/New_Orleans_Saints_logo.svg/630px-New_Orleans_Saints_logo.svg.png", name: "saints"}
];



// 2) ---- State variables ----
let winner; // player has selected all matching images
let timer = 60;
let stopTimer = null;
let firstCell = null;
let secondCell = null;
let counter = 0;
let cardBack = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/AmFBfield.svg/1200px-AmFBfield.svg.png"
let matchesFound = 0;

// 3) ---- Cached elements ---
const messageEl = document.querySelector("h1");
const timerEl = document.getElementById("timer");
const boardEl = document.getElementById("board");
const restartBtn = document.querySelector("#restart");
const teams = document.querySelectorAll('.front');

// 4) ---- Event listeners ---
timerEl.addEventListener("click", handleCountdown);
restartBtn.addEventListener("click", initialize);
boardEl.addEventListener('click', handleClick);

// 5) ---- functions ----
initialize();

function initialize() {
  timer = 60;
  if(timer) clearInterval(stopTimer);
  
  shuffle();
    teams.forEach((team, i) => {
    team.setAttribute('name', IMAGES[i].name);
    team.firstElementChild.setAttribute('src', cardBack);
    team.firstChild.nextSibling.setAttribute('name', IMAGES[i].name);
})
    
  winner = '';
  render();
}

function handleCountdown() {
    timer--;
    timerEl.innerHTML = String (timer);
    if (timer > 0) {
      stopTimer = setTimeout(handleCountdown, 1000);
    } else {
      messageEl.innerHTML = " Time's Up , GAME OVER !"
    }
};

function shuffle() {
  let currentIndex = IMAGES.length, temporaryValue, randomIndex;
  while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = IMAGES[currentIndex];
      IMAGES[currentIndex] = IMAGES[randomIndex];
      IMAGES[randomIndex] = temporaryValue;
  }
  return IMAGES;
}


   function handleClick(evt) {
    if(!stopTimer) handleCountdown();
  if (evt.target.getAttribute('src') === cardBack) {let foundObjectByName = IMAGES.find((IMAGE) => 
  IMAGE.name === evt.target.name);
  evt.target.src = foundObjectByName.src;
  if (counter === 0) {
    firstCell = evt.target;
    counter++;
  } else { 
    counter = 0;
    getMatches(firstCell, evt.target);
  }
  }
};


function getMatches(firstClicked, secondClicked) {
  
  if (firstClicked.getAttribute('name') === secondClicked.getAttribute('name')) {
    matchesFound++;
    
    if (matchesFound === 6) {
      clearInterval(stopTimer);
      messageEl.innerHTML = "Congratulations, You Win!!";
   } 
} else { 
    setTimeout((function () {firstClicked.setAttribute('src', cardBack);
    secondClicked.setAttribute('src', cardBack)}), 1500)
  }
};


// 6) ----- Visualize all state in the DOM ----
function render() {
  renderTimer();
  renderMessage();
  //hide/show restart button
  renderControls();

  function renderTimer() {
    timerEl.style.visibility = "visible";
  }

function renderMessage() {
    if (winner) {
      messageEl.innerHTML = "Try Again !";
    } else {
      //game is in play
      messageEl.innerHTML = "Find the matches 👀";
    }
  }

  function renderControls() {
    restartBtn.style.visibility = "visible";
  }
}
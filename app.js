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
let firstCell = null;
let secondCell = null;
let counter = 0;
let cardBack = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/AmFBfield.svg/1200px-AmFBfield.svg.png"

// 3) ---- Cached elements ---
const messageEl = document.querySelector("h1");
const timerEl = document.getElementById("timer");
const boardEl = document.getElementById("board");
const restartBtn = document.querySelector("button");
const teams = document.querySelectorAll('.front');

// 4) ---- Event listeners ---
timerEl.addEventListener("click", handleCountdown);
restartBtn.addEventListener("click", initialize);
boardEl.addEventListener('click', handleClick);

// 5) ---- functions ----
initialize();

function initialize() {
    
    teams.forEach((team, i) => {
    team.setAttribute('name', IMAGES[i].name);
    team.firstChild.nextSibling.setAttribute('name', IMAGES[i].name);
})
    
  winner = '';
  render();
}

function handleCountdown() {
    timer--;
    timerEl.innerHTML = String (timer);
    if (timer > 0) {
        setTimeout(handleCountdown, 1000);
    }
};


// const randomize = () => {
//     IMAGES.sort((a, b) => 0.5 - Math.random());
//      return; IMAGES
// };


   function handleClick(evt) {
  if (evt.target.getAttribute('src') === cardBack) {let foundObjectByName = IMAGES.find((IMAGE) => 
  IMAGE.name === evt.target.name);
  evt.target.src = foundObjectByName.src;
  counter++;
    if (counter === 1) {
      firstCell = evt.target;
  } else if ( counter > 1 && firstCell !== evt.target ) 
   counter = 0;
    getMatches(firstCell, evt.target);
  
  }
};


function getMatches(firstClicked, secondClicked) {
  if (firstClicked.getAttribute('name') === secondClicked.getAttribute('name')) {
    console.log('match');
  } else { 
    
    console.log('no match');
    setTimeout((function () {firstClicked.setAttribute('src', cardBack);
    secondClicked.setAttribute('src', cardBack)}), 1500)
  }
};


function getWinner() {

};

// 6) ----- Visualize all state in the DOM ----
function render() {
  renderTimer();
  renderBoard();
  renderMessage();
  //hide/show restart button
  renderControls();

  function renderTimer() {
    timerEl.style.visibility = "visible";
  }

  function renderBoard() {}


  function renderMessage() {
    if (winner === null) {
      messageEl.innerHTML = "Try Again !";
    } else if (winner) {
      messageEl.innerHTML = "Congratulations, You Win!!!";
    } else {
      //game is in play
      messageEl.innerHTML = "Find the matches 👀";
    }
  }

  function renderControls() {
    restartBtn.style.visibility = winner ? "visible" : "hidden";
  }
}

// winner = if all cards are matched .
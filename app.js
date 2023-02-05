// 1) Define required constants//
const IMAGES = [
    "https://i.imgur.com/AP5BYMO.png", //steelers
    "https://i.imgur.com/m9pEfn3.png", //eagles
    "https://i.imgur.com/TqDcQki.png", //chiefs
    "https://i.imgur.com/ryP7Cst.png", //bengals
    "https://i.imgur.com/QGCQxgJ.png", //packers
    "https://i.imgur.com/wkXTDjI.png", //saints

    "https://i.imgur.com/AP5BYMO.png", //steelers
    "https://i.imgur.com/m9pEfn3.png", //eagles
    "https://i.imgur.com/TqDcQki.png", //chiefs
    "https://i.imgur.com/ryP7Cst.png", //bengals
    "https://i.imgur.com/QGCQxgJ.png", //packers
    "https://i.imgur.com/wkXTDjI.png" //saints
];

// 2) ---- State variables ----
let board; // array of 4 column arrays
let winner; // player chooses all matching images under 1min 


// 3) ---- Cached elements ---
const messageEl = document.querySelector('h1');
const restartBtn = document.querySelector('button');
const timerEl = document.querySelector('timer');
const squareEl = document.querySelectorAll('div');

// 4) ---- Event listeners ---
document.getElementById('board').addEventListener('click', handleMove);
document.getElementById('div').addEventListener('click', handleToggle);
timerEl.document.addEventListener('click', handleCountdown);
restartBtn = document.addEventListener('click', initialize, handleShuffle);

// 5) ---- functions ----
initialize();
    
function initialize() {  
    board = [
        null, null, null, null,
        null, null, null, null,
        null, null, null, null
    ];
    winner = null;
    render();
};

function handleMove() {

};

function handleToggle() {

};

function handleShuffle() {

};

function handleCountdown() {

};

// 6) ----- Visualize all state in the DOM ----
function render() {
    renderTimer();
    renderBoard();
    renderMessage();
    renderResults();
    //hide/show restart button
    renderControls();

function renderTimer() {
    
    timerEl.style.visibility = 'visible';
    
};

function renderBoard() {

};

function renderMessage() {
if(winner !==  ) {
    messageEl.innerText = 'Wrong, Try Again !';
} else if(winner) {
    messageEl.innerText = 'Congratulations, You Win!!!';
}
};

function renderResults() {

};

function renderControls() {
    restartBtn.style.visibility = winner ? 'visible' : 'hidden';
};

};

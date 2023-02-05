// 1) Define required constants//
const IMAGES = {
   s1: {img: "https://i.imgur.com/AP5BYMO.png"}, //steelers
   e1: {img: "https://i.imgur.com/m9pEfn3.png"}, //eagles
   c1: {img: "https://i.imgur.com/TqDcQki.png"}, //chiefs
   b1: {img: "https://i.imgur.com/ryP7Cst.png"}, //bengals
   p1: {img: "https://i.imgur.com/QGCQxgJ.png"}, //packers
   l1: {img: "https://i.imgur.com/wkXTDjI.png"}, //saints

    s2: {img: "https://i.imgur.com/AP5BYMO.pn"}, //steelers
    e2: {img: "https://i.imgur.com/m9pEfn3.pn"}, //eagles 
    c2: {img: "https://i.imgur.com/TqDcQki.pn"}, //chiefs 
    b2: {img: "https://i.imgur.com/ryP7Cst.pn"}, //bengals 
    p2: {img: "https://i.imgur.com/QGCQxgJ.pn"}, //packers 
    l2: {img: "https://i.imgur.com/wkXTDjI.pn"} //saints 
};

// 2) ---- State variables ----
let board; // array of 4 column arrays
let matches; // 
let winner; // player has selected all matching images



// 3) ---- Cached elements ---
const messageEl = document.getElementById('h1');
const timerEl = document.getElementById('timer');
const squareEl = document.getElementById('board');
const squareFront = document.getElementById('div#front')
const restartBtn = document.getElementById('button');

// 4) ---- Event listeners ---
squareEl.addEventListener('click', handleFlip);
timerEl.document.addEventListener('click', handleCountdown);
restartBtn = document.addEventListener('click', initialize, handleShuffle);

// 5) ---- functions ----
initialize();
    
function initialize() {  
    board = [];
    matches = {
        s1: 's2',
        e1: 's2',
        c1: 'c2',
        b1: 'b2',
        p1: 'p2',
        l1: 'l2'
    };
    winner = '';
    render();
};

function handleFlip() {
   
};

function handleCountdown() {

};

function handleShuffle() {

};

// 6) ----- Visualize all state in the DOM ----
function render() {
    renderTimer();
    renderBoard();
    renderMatches();
    renderMessage();
    //hide/show restart button
    renderControls();

function renderTimer() {
    
    timerEl.style.visibility = 'visible';
    
};

function renderBoard() {

};

function renderMatches() {

};

function renderMessage() {
if(winner === winner) {
    messageEl.innerHTML = 'Wrong, Try Again !';
} else if(winner) {
    messageEl.innerHTML = 'Congratulations, You Win!!!';
}
};


function renderControls() {
    restartBtn.style.visibility = winner ? 'visible' : 'hidden';
};

};

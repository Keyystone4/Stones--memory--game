// 1) Define required constants//
const IMAGES = {
  s1: {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Pittsburgh_Steelers_logo.svg/392px-Pittsburgh_Steelers_logo.svg.png",
  }, //steelers
  e1: {
    img: "https://i.pinimg.com/originals/e1/69/08/e169088e82bacaa742db4b2a9b35691b.png",
  }, //eagles
  c1: {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVMxkvPOl0fzuvhOFtBLbnJME8f1iy1PzWCCcn49qs&s",
  }, //chiefs
  b1: {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Cincinnati_Bengals_logo.svg/2560px-Cincinnati_Bengals_logo.svg.png",
  }, //bengals
  p1: {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Green_Bay_Packers_logo.svg/2560px-Green_Bay_Packers_logo.svg.png",
  }, //packers
  l1: {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/New_Orleans_Saints_logo.svg/630px-New_Orleans_Saints_logo.svg.png",
  }, //saints

  s2: {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Pittsburgh_Steelers_logo.svg/392px-Pittsburgh_Steelers_logo.svg.png",
  }, //steelers
  e2: {
    img: "https://i.pinimg.com/originals/e1/69/08/e169088e82bacaa742db4b2a9b35691b.png",
  }, //eagles
  c2: {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVMxkvPOl0fzuvhOFtBLbnJME8f1iy1PzWCCcn49qs&s",
  }, //chiefs
  b2: {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Cincinnati_Bengals_logo.svg/2560px-Cincinnati_Bengals_logo.svg.png",
  }, //bengals
  p2: {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Green_Bay_Packers_logo.svg/2560px-Green_Bay_Packers_logo.svg.png",
  }, //packers
  l2: {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/New_Orleans_Saints_logo.svg/630px-New_Orleans_Saints_logo.svg.png",
  }, //saints
};

// 2) ---- State variables ----
let board; // array of 4 column arrays
let matches; // s1 = s2 , s1 != e2
let winner; // player has selected all matching images
let clickedCell;

// 3) ---- Cached elements ---
const messageEl = document.querySelector("h1");
const timerEl = document.getElementById("timer");
const squareEl = document.getElementById("board");
const squareFront = document.getElementById("div .front");
const restartBtn = document.querySelector("button");
const steelers1 = document.getElementById("steelers1");
const steelers2 = document.getElementById("steelers2");
const eagles1 = document.getElementById("eagles1");
const eagles2 = document.getElementById("eagles2");
const chiefs1 = document.getElementById("chiefs1");
const chiefs2 = document.getElementById("chiefs2");
const bengals1 = document.getElementById("bengals1");
const bengals2 = document.getElementById("bengals2");
const packers1 = document.getElementById("packers1");
const packers2 = document.getElementById("packers2");
const saints1 = document.getElementById("saints1");
const saints2 = document.getElementById("saints2");
//console.log(steelers1);

// 4) ---- Event listeners ---
timerEl.addEventListener("click", handleCountdown);
restartBtn.addEventListener("click", handleShuffle);
messageEl.addEventListener("click", handleMessage);
steelers1.addEventListener("click", handleClickS1);
steelers2.addEventListener("click", handleClickS2);
eagles1.addEventListener("click", handleClickE1);
eagles2.addEventListener("click", handleClickE2);
chiefs1.addEventListener("click", handleClickC1);
chiefs2.addEventListener("click", handleClickC2);
bengals1.addEventListener("click", handleClickB1);
bengals2.addEventListener("click", handleClickB2);
packers1.addEventListener("click", handleClickP1);
packers2.addEventListener("click", handleClickP2);
saints1.addEventListener("click", handleClickL1);
saints2.addEventListener("click", handleClickL2);

// 5) ---- functions ----
initialize();

function initialize() {
  board = [];
  matches = {
    s1: "s2",
    e1: "e2",
    c1: "c2",
    b1: "b2",
    p1: "p2",
    l1: "l2",
  };
  winner = "";
  render();
}

function handleCountdown() {}

function handleShuffle() {}

function handleMessage() {}

function handleClickS1(evt) {
  evt.target.src = IMAGES.s1.img;
  clickedCell = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Pittsburgh_Steelers_logo.svg/392px-Pittsburgh_Steelers_logo.svg.png";
  console.log(clickedCell);
  if (evt.target.src === clickedCell) {
      console.log("true");
    } else if (evt.target.src !== clickedCell) {
        console.log('false');
    };
    
    //console.log(steelers1.src);
}

function handleClickS2(evt) {
    evt.target.src = IMAGES.s2.img;
    clickedCell = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Pittsburgh_Steelers_logo.svg/392px-Pittsburgh_Steelers_logo.svg.png";
    console.log(clickedCell);
    if(evt.target.src === clickedCell) {
        console.log("true");
    } else if (evt.target.src !== clickedCell) {
        console.log('false');
    };
}

function handleClickE1(evt) {
  evt.target.src = IMAGES.e1.img;
  clickedCell = "https://i.pinimg.com/originals/e1/69/08/e169088e82bacaa742db4b2a9b35691b.png";
  console.log(clickedCell);
    if (evt.target.src === clickedCell) {
      console.log('true');
    } else if (evt.target.src !== clickedCell) {
        console.log('false');
    }
}

function handleClickE2(evt) {
    evt.target.src = IMAGES.e2.img;
    clickedCell = "https://i.pinimg.com/originals/e1/69/08/e169088e82bacaa742db4b2a9b35691b.png";
    console.log(clickedCell);
    if (evt.target.src === clickedCell) {
        console.log('true');
      } else if (evt.target.src !== clickedCell) {
          console.log('false');
      }

}

function handleClickC1(evt) {
  evt.target.src = IMAGES.c1.img;
  clickedCell = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVMxkvPOl0fzuvhOFtBLbnJME8f1iy1PzWCCcn49qs&s";
  console.log(clickedCell);
  if (evt.target.src === clickedCell) {
    console.log('true');
  } else if (evt.target.src !== clickedCell) {
      console.log('false');
  }
}

function handleClickC2(evt) {
    evt.target.src = IMAGES.c2.img;
    clickedCell = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVMxkvPOl0fzuvhOFtBLbnJME8f1iy1PzWCCcn49qs&s";
    console.log(clickedCell);
    if (evt.target.src === clickedCell) {
        console.log('true');
      } else if (evt.target.src !== clickedCell) {
          console.log('false');
      }
}

function handleClickB1(evt) {
  evt.target.src = IMAGES.b1.img;
    clickedCell = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Cincinnati_Bengals_logo.svg/2560px-Cincinnati_Bengals_logo.svg.png",
    console.log(clickedCell);
    if (evt.target.src === clickedCell) {
        console.log('true');
      } else if (evt.target.src !== clickedCell) {
          console.log('false');
      }
}

function handleClickB2(evt) {
    evt.target.src = IMAGES.b2.img;
    clickedCell = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Cincinnati_Bengals_logo.svg/2560px-Cincinnati_Bengals_logo.svg.png";
    console.log(clickedCell);
    if (evt.target.src === clickedCell) {
        console.log('true');
      } else if (evt.target.src !== clickedCell) {
          console.log('false');
      }
}

function handleClickP1(evt) {
  evt.target.src = IMAGES.p1.img;
    clickedCell = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Green_Bay_Packers_logo.svg/2560px-Green_Bay_Packers_logo.svg.png";
    console.log(clickedCell);
    if (evt.target.src === clickedCell) {
        console.log('true');
      } else if (evt.target.src !== clickedCell) {
          console.log('false');
      }
}

function handleClickP2(evt) {
    evt.target.src = IMAGES.p2.img;
    clickedCell = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Green_Bay_Packers_logo.svg/2560px-Green_Bay_Packers_logo.svg.png";
    console.log(clickedCell);
    if (evt.target.src === clickedCell) {
        console.log('true');
      } else if (evt.target.src !== clickedCell) {
          console.log('false');
      }
}

function handleClickL1(evt) {
  evt.target.src = IMAGES.l1.img;
  clickedCell = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/New_Orleans_Saints_logo.svg/630px-New_Orleans_Saints_logo.svg.png";
  console.log(clickedCell);
  if (evt.target.src === clickedCell) {
    console.log('true');
  } else if (evt.target.src !== clickedCell) {
      console.log('false');
  }
}

function handleClickL2(evt) {
    evt.target.src = IMAGES.l2.img;
    clickedCell = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/New_Orleans_Saints_logo.svg/630px-New_Orleans_Saints_logo.svg.png";
    console.log(clickedCell);
    if (evt.target.src === clickedCell) {
        console.log('true');
      } else if (evt.target.src !== clickedCell) {
          console.log('false');
      }
}

// 6) ----- Visualize all state in the DOM ----
function render() {
  renderTimer();
  renderBoard();
  renderMatches();
  renderMessage();
  //hide/show restart button
  renderControls();

  function renderTimer() {
    timerEl.style.visibility = "visible";
  }

  function renderBoard() {}

  function renderMatches() {}

  function renderMessage() {
    if (winner === winner) {
      messageEl.innerHTML = "Wrong, Try Again !";
    } else if (winner) {
      messageEl.innerHTML = "Congratulations, You Win!!!";
    }
  }

  function renderControls() {
    restartBtn.style.visibility = winner ? "visible" : "hidden";
  }
}

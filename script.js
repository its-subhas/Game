let computerchoice;
let randomnumber;
let result;
let score;
let sdata;

sdata = localStorage.getItem("score");
if (sdata === undefined || sdata === null) {
  score = {
    won: 0,
    draw: 0,
    lost: 0,
  };
} else {
  score = JSON.parse(localStorage.getItem("score"));
}
score.s = function () {
  localStorage.setItem("score", JSON.stringify(score));
  return `Score - [  Won : ${score.won} ,  Draw : ${score.draw} ,  Lost : ${score.lost}  ]`;
};

function computerPlay() {
  randomnumber = Math.random() * 3;
  if (randomnumber > 0 && randomnumber <= 1) {
    computerchoice = "BAT";
    console.log("Computer choice is - BAT");
  } else if (randomnumber > 1 && randomnumber <= 2) {
    computerchoice = "BALL";
    console.log("Computer choice is - BALL");
  } else {
    computerchoice = "WICKET";
    console.log("Computer choice is - WICKET");
  }
  localStorage.setItem("computerchoice", JSON.stringify(computerchoice));
}

function bat() {
  console.log("You have selected - BAT");
  computerPlay();
  if (computerchoice === "BAT") {
    result = "Match Draw !";
    score.draw++;
    console.log("Match Draw !");
  } else if (computerchoice === "BALL") {
    result = "You Win !";
    score.won++;
    console.log("You Win !");
  } else {
    result = "You Lose !";
    score.lost++;
    console.log("You Lose !");
  }
  localStorage.setItem("user", JSON.stringify("You have selected - BAT"));
  localStorage.setItem("result", JSON.stringify(result));
  document.querySelector("#user").innerHTML = `You have selected - BAT`;
  document.querySelector(
    "#computer"
  ).innerHTML = `Computer has selected - ${computerchoice}`;
  document.querySelector("#result").innerHTML = `RESULT - ${result}`;
  document.querySelector("#score").innerHTML = score.s();
}

function ball() {
  console.log("You have selected - BALL");
  computerPlay();
  if (computerchoice === "BALL") {
    result = "Match Draw !";
    score.draw++;
    console.log("Match Draw !");
  } else if (computerchoice === "BAT") {
    result = "You Lose !";
    score.lost++;
    console.log("You Lose !");
  } else {
    result = "You Win !";
    score.won++;
    console.log("You Win !");
  }
  localStorage.setItem("user", JSON.stringify("You have selected - BALL"));
  localStorage.setItem("result", JSON.stringify(result));
  document.querySelector("#user").innerHTML = `You have selected - BALL`;
  document.querySelector(
    "#computer"
  ).innerHTML = `Computer has selected - ${computerchoice}`;
  document.querySelector("#result").innerHTML = `RESULT - ${result}`;
  document.querySelector("#score").innerHTML = score.s();
}

function wicket() {
  console.log("You have selected - WICKET");
  computerPlay();
  if (computerchoice === "WICKET") {
    result = "Match Draw !";
    score.draw++;
    console.log("Match Draw !");
  } else if (computerchoice === "BAT") {
    result = "You Win !";
    score.won++;
    console.log("You Win !");
  } else {
    result = "You Lose !";
    score.lost++;
    console.log("You Lose !");
  }
  localStorage.setItem("user", JSON.stringify("You have selected - WICKET"));
  localStorage.setItem("result", JSON.stringify(result));
  document.querySelector("#user").innerHTML = `You have selected - WICKET`;
  document.querySelector(
    "#computer"
  ).innerHTML = `Computer has selected - ${computerchoice}`;
  document.querySelector("#result").innerHTML = `RESULT - ${result}`;
  document.querySelector("#score").innerHTML = score.s();
}

function reset() {
  score.won = 0;
  score.draw = 0;
  score.lost = 0;
  localStorage.clear();
  document.querySelector("#score").innerHTML = score.s();
  document.querySelector("#user").innerHTML = "You have selected - Nothing !";
  document.querySelector("#computer").innerHTML =
    "Computer has selected - Nothing !";
  document.querySelector("#result").innerHTML = "RESULT - Not Declared !";
}

let record = {
  userd: "",
  computerd: "",
  resultd: "",
};
record.userd = JSON.parse(localStorage.getItem("user"));
record.computerd = JSON.parse(localStorage.getItem("computerchoice"));
record.resultd = JSON.parse(localStorage.getItem("result"));

if (
  record.userd === undefined ||
  record.computerd === undefined ||
  record.resultd === undefined
) {
  document.querySelector("#user").innerHTML = "You have selected - Nothing !";
  document.querySelector("#computer").innerHTML =
    "Computer has selected - Nothing !";
  document.querySelector("#result").innerHTML = "RESULT - Not Declared !";
  document.querySelector("#score").innerHTML = score.s();
} else if (
  record.userd === null ||
  record.computerd === null ||
  record.resultd === null
) {
  document.querySelector("#user").innerHTML = "You have selected - Nothing !";
  document.querySelector("#computer").innerHTML =
    "Computer has selected - Nothing !";
  document.querySelector("#result").innerHTML = "RESULT - Not Declared !";
  document.querySelector("#score").innerHTML = score.s();
} else {
  document.querySelector("#user").innerHTML = record.userd;
  document.querySelector(
    "#computer"
  ).innerHTML = `Computer has selected - ${record.computerd}`;
  document.querySelector("#result").innerHTML = `RESULT - ${record.resultd}`;
  document.querySelector("#score").innerHTML = score.s();
}

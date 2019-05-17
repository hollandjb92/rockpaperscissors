// jshint esversion: 6

let opponentOptions = ["Rock", "Paper", "Scissors"];

let wins = 0;
let losses = 0;
let ties = 0;

document.addEventListener("keydown", function (event) {

  let playerChoice = event.key;
  let opponentChoice = opponentOptions[Math.floor(Math.random() * 3)];

  switch (playerChoice) {
    case "r":
      document.querySelector("img.img1").setAttribute("src", "images/rock.png");
      document.querySelector("img.img2").setAttribute("src", "images/" + opponentChoice + ".png");
      break;
    case "p":
      document.querySelector("img.img1").setAttribute("src", "images/paper.png");
      document.querySelector("img.img2").setAttribute("src", "images/" + opponentChoice + ".png");
      break;
    case "s":
      document.querySelector("img.img1").setAttribute("src", "images/scissors.png");
      document.querySelector("img.img2").setAttribute("src", "images/" + opponentChoice + ".png");
      break;
    default:
      console.log(playerChoice);
  }

  if ((playerChoice === "r" && opponentChoice === "Scissors") || (playerChoice === "p" && opponentChoice === "Rock") || (playerChoice === "s" && opponentChoice === "Paper")) {
    document.querySelector("h1").innerHTML = "Player Wins!";
    wins++;
    document.getElementById("wins").innerHTML = "Wins: " + wins;
  } else if (playerChoice === opponentChoice.toLowerCase().charAt(0)) {
    document.querySelector("h1").innerHTML = "It's a Tie!";
    ties++;
    document.getElementById("ties").innerHTML = "Ties: " + ties;
  } else {
    document.querySelector("h1").innerHTML = "Computer Wins!";
    losses++;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
  }

})
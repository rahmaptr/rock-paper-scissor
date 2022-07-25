function getComputerChoice() {
  console.log("computer..");
  let choice = Math.floor(Math.random() * 3) + 1;

  switch (choice) {
    case 1:
      return "rock";
      break;

    case 2:
      return "paper";
      break;

    case 3:
      return "scissors";
      break;
  }
}

function playRound(playerChoice, computerChoice) {
  //tie condition
  if (playerChoice == computerChoice) {
    return "TIE";
  } //player choose rock
  else if (playerChoice == "rock") {
    switch (computerChoice) {
      case "paper":
        return "You LOSE";
        break;
      case "scissors":
        return "You WIN";
        break;
    } //player choose paper
  } else if (playerChoice == "paper") {
    switch (computerChoice) {
      case "scissors":
        return "You LOSE";
        break;
      case "rock":
        return "You WIN";
        break;
    } //player choose scissors
  } else {
    switch (computerChoice) {
      case "paper":
        return "You WIN";
        break;
      case "rock":
        return "You LOSE";
        break;
    }
  }
}

function game() {
  console.log("Welcome, player!");
  let score = 0;

  for (let index = 0; index < 5; index++) {
    let computerChoice = getComputerChoice();
    let playerChoice = window.prompt("Rock, Paper, Scissors?").toLowerCase();

    console.log('Computer:', computerChoice, 'Player:' ,playerChoice);
    let result = playRound(playerChoice, computerChoice);

    if (result == "You WIN") {
      score++;
    }

    console.log(result);
  }

  console.log("Your score:", score);
}

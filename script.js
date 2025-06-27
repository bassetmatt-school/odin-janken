function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let n = getRandomInt(3);
    if (n === 0) {
        return "rock";
    } else if (n === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function parseBack(s) {
    s = s.toLowerCase();
    if (s == "rock") {
        return 0;
    } else if (s == "paper") {
        return 1;
    } else if (s == "scissors") {
        return 2;
    } else {
        throw new Error(`Unrecognized move ${s}`);
    }
}

function getHumanChoice() {
    let human = prompt("Rock, paper or scissors?");
    return human;
}



function playRound(humanChoice, computerChoice) {
    let human = parseBack(humanChoice)
    let computer = parseBack(computerChoice)

    if (human == computer) {
        return `Draw! You both played  ${computerChoice}.`;
    }
    // else

    if (human + computer == 2) { // One is zero, the other is two. Both being one is handled above
        // Rock becomes 3 to be over 2 to beat scissors
        if (human == 0) {
            human += 3;
        } else { // computer == 0
            computer += 3;
        }
    }

    if (human < computer) {
        return `Loss! ${computerChoice} beats ${humanChoice}.`
    } else { // human > computer
        return `Win! ${humanChoice} beats ${computerChoice}.`
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let s = playRound(getHumanChoice(), getComputerChoice());
        console.log(`Round ${i + 1}: ${s}`);
        if (s.startsWith("Win")) {
            humanScore += 1;
        } else if (s.startsWith("Loss")) {
            computerScore += 1;
        }
    }
    console.log(`Game finished. Scores:\nUser: ${humanScore}\nComputer: ${computerScore}`)
}

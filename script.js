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

function roundLogic(player_choice, computer_choice) {
    let player = parseBack(player_choice);
    let computer = parseBack(computer_choice);

    if (player == computer) {
        return [0, `Draw! You both played  ${computer_choice}.`];
    }
    // else

    if (player + computer == 2) { // One is zero, the other is two. Both being one is handled above
        // Rock becomes 3 to be over 2 to beat scissors
        if (player == 0) {
            player += 3;
        } else { // computer == 0
            computer += 3;
        }
    }

    if (player < computer) {
        return [-1, `Loss! ${computer_choice} beats ${player_choice}.`];
    } else { // human > computer
        return [1, `Win! ${player_choice} beats ${computer_choice}.`];
    }
}

let player_score = 0;
let computer_score = 0;


function playRound(player_choice) {
    let result = roundLogic(player_choice, getComputerChoice())

    if (result[0] === 1) {
        player_score += 1
        document.querySelector("#player-score")
            .textContent = player_score
    } else if (result[0] === -1) {
        computer_score += 1
        document.querySelector("#cpu-score")
            .textContent = computer_score
    }
    addLog(result)
}

// DOM things

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        console.log(`Click! ${button.id}`)
        playRound(button.id)
    })
})


function logScore(win) {
    let log_score = document.createElement("div");
    log_score.classList.add("result", "log-score");
    if (win) {
        log_score.textContent = "+1"
    }
    return log_score
}

function addLog(res) {
    const logs = document.querySelector("#results-block");

    let new_log = document.createElement("div");
    new_log.classList.add("result", "flex-h", "log");

    let cpu_score = logScore(res[0] === -1)
    let human_score = logScore(res[0] === 1)

    let log_text = document.createElement("div")
    log_text.classList.add("result", "log-text")
    log_text.textContent = res[1]

    new_log.appendChild(cpu_score);
    new_log.appendChild(log_text);
    new_log.appendChild(human_score);

    logs.insertBefore(new_log, document.querySelector(".log"))
}

function reset() {
    document.querySelectorAll()
}

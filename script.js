console.log("Hello, World!");

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

function getHumanChoice() {
    let x = prompt("Rock, paper or scissors?");
    return x
}


for (let i = 0; i < 50; i++) {
    let s = getComputerChoice()
    console.log(s)
}

let s = getHumanChoice()
console.log("User choice: " + s)

function computerPlay() {
    let moves = [
        "rock",
        "paper",
        "scissors"
    ]

    return moves[Math.floor(Math.random()*moves.length)];
}

// let playerPoints = 0;
// let computerPoints = 0;

function playRound(playerSelection, computerSelection) {
  
    if (playerSelection == computerSelection) {
        console.log("This round is a draw.")
        return "This round is a draw.";
    }

    else {
        let outcome = {
            "rock": {
                "paper": "Lose! Rock loses against paper.",
                "scissors": "Win! Rock wins against scissors."
            },
            "paper": {
                "rock": "Win! Paper wins against rock.",
                "scissors": "Lose! Paper loses against scissors"
            },
            "scissors": {
                "rock": "Lose! Scissors loses against rock.",
                "paper": "Win! Scissors wins against paper."
            }
        };
        console.log(outcome[playerSelection][computerSelection]);

        return outcome[playerSelection][computerSelection];
    }

           
}

let playerSelection = prompt("Enter your move for rock paper scissors").toLowerCase();
let computerSelection = computerPlay();

function game() {
    for (i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection)
    }

    return "Game is done!";
}
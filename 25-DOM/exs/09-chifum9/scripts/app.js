let computerScore = 0;
let playerScore = 0;

function isWinner(figureplayer, figureComputer) {
    if (figureplayer == figureComputer) {
        return null;
    }
    
    winTable = ["paper", "rock", "scissors"];
    loseTable = ["rock", "scissors", "paper"];

    indexPlayer = winTable.indexOf(figureplayer);
    indexComputed = loseTable.indexOf(figureComputer);
    if (indexPlayer == indexComputed) {
        playerScore++;
        return "player";
    } else {
        computerScore++;
        return "computed";
    }
}

function computerPlay() {
    random = Math.round(Math.random() * 2) + 1;
    figure = "none";

    switch(random) {
        case 1:
            figure = "paper";
            break;
        case 2:
            figure = "rock";
            break;
        case 3:
            figure = "scissors";
            break;
    }
    // debugger;
    return figure;
        
}

function play(figure) {
    const playerOne = document.getElementById('player-one');
    const playerTwo = document.getElementById('player-two');

    const playerOneScore = document.getElementById('player-one-score');
    const playerTwoScore = document.getElementById('player-two-score');
    

    const traceElt = document.getElementById("trace");

    const computerFigure = computerPlay();
    const winner = isWinner(figure, computerFigure); 

    console.warn("Computer Figure: ", computerFigure);
    console.warn("player Figure ", figure);

    let msg = '';
    // if (winner == null) {
    if (!winner) {
        msg = '<p class="p-trace null">Match Nul</p><hr/>';
    }
    else {
        if (winner == "player") {
            msg = `<p class="p-trace"><span class="player-name">${playerOne.textContent}</span> Gagne cette manche</p>`;
        }
        else {
            msg = `<p class="p-trace"><span class="computer-name">${playerTwo.textContent}</span> Gagne cette manche</p>`;
        }    
        playerOneScore.textContent = playerScore;
        playerTwoScore.textContent = computerScore;
    }
    traceElt.innerHTML += msg;
    // Dans la div trace, permet d'etre toujours a la fin
    traceElt.scrollTop = traceElt.scrollHeight;
}
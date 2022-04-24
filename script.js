let score = 0;
let cpuScore = 0;
let tieScore = 0;

let computerPlay = () =>
{
    let arr = ["Rock", "Paper", "Scissors"];
    let randomInt = Math.floor(Math.random() * 3);
    return arr[randomInt];
}

let playRound = (playerSelection, computerSelection) =>
{
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock")
    {
        if (computerSelection === "Scissors")
        {
            score++; 
            return "You win! Rock beats scissors";
        }
        if (computerSelection === "Paper") 
        {
            cpuScore++;
            return  "You lose! Paper beats rock";
        }
        if (computerSelection === "Rock") 
        {
            tieScore++;
            return "Tie!";
        }
    }
    else if (playerSelection === "paper")
    {
        if (computerSelection === "Scissors")
        {
            cpuScore++;
            return "You lose! Scissors beats rock"; 
        }
        if (computerSelection === "Paper")
        {
            tieScore++;
            return  "Tie!";
        }
        if (computerSelection === "Rock")
        {
            score++;
            return "You win! Paper beats rock";
        }
    }
    else if (playerSelection === "scissors")
    {
        if (computerSelection === "Scissors")
        {
            tieScore++;
            return "Tie!";
        }
        if (computerSelection === "Paper")
        {
            score++;
            return  "You win! Scissors beats paper";
        }
        if (computerSelection === "Rock")
        {
            cpuScore++;
            return "You lose! Rock beats scissors";
        }
    }
    else
    {
        console.log("error: plz check entry for typos");
        return 0;
    }
}

for (let i = 0; i < 5; i++)
{
    let computerEntry = computerPlay();
    let playerEntry = window.prompt("Please enter RPS", "rock");

    let result = playRound(playerEntry, computerEntry);
    if (result == 0) break;
    console.log("computer entry: " + computerEntry);
    console.log("player entry: " + playerEntry);
    console.log(result);
    console.log("Player Score: " + score + " CPU Score: " + cpuScore + " Ties: " + tieScore + " Rounds: " + (i + 1));
}
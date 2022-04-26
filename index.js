/*let score = 0;
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
}*/

const playButton = document.querySelector(".button");
const container = document.querySelector(".container");
const wrapper = document.querySelector(".wrapper");
const start = document.querySelector("#start");
const select = document.querySelector("#select");

const player_wrapper = document.querySelector(".player-wrapper");
const buttons = document.querySelectorAll(".player-choice");
const player_title = document.querySelector(".player-title");

let player = "Gon";

start.classList.add('fadeIn');

playButton.addEventListener('mouseenter', () =>
{
    playButton.classList.add('buttonHover');
    playButton.classList.remove('button');
})

playButton.addEventListener('mouseleave', () =>
{
	playButton.classList.remove('buttonHover');
	playButton.classList.add('button')
})

playButton.addEventListener('click', () =>
{
	start.classList.remove('fadeIn');
    start.classList.add('fadeOut');
    
    setTimeout(() =>
    {
        start.parentNode.removeChild(start);
    }, 2000);
    
    setTimeout(() =>
    {
        start.style.display = 'none';
        select.style.display = 'block';
    }, 500);

    setTimeout(() => 
    {
        select.classList.add("fadeIn");
    }, 1000)
});



player_wrapper.addEventListener('mouseenter', () =>
{
	player_wrapper.classList.add('player-wrapper-hover');
});

player_wrapper.addEventListener('mouseleave', () =>
{
    player_wrapper.classList.add('player-wrapper');
    player_wrapper.classList.remove('player-wrapper-hover');
});

buttons.forEach((button) => {
    button.addEventListener('mouseenter', () => 
    {
        button.classList.add('player-choice-hover');
    })

    button.addEventListener('mouseleave', () =>
    {
        button.classList.add('player-choice');
        button.classList.remove('player-choice-hover');
    })

    button.addEventListener('click', () => 
    {
        player = button.lastElementChild.textContent;

        select.classList.remove('fadeIn');
        select.classList.add('fadeOut');
        
        setTimeout(() =>
        {
            select.parentNode.removeChild(select);
        }, 1000);
        
        /*setTimeout(() =>
        {
            start.style.display = 'none';
            select.style.display = 'block';
        }, 500);

        setTimeout(() => 
        {
            select.classList.add("fadeIn");
        }, 1000)
        })*/
    });
});

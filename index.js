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

const versus = document.querySelector("#versus")
const versus_container = document.querySelector("#versus-container");
const villain_container = document.querySelector(".villain-container");
const villain_list = document.querySelector(".villain-list");

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
        versus_container.firstElementChild.textContent = `${player} vs.`;

        select.classList.remove('fadeIn');
        select.classList.add('fadeOut');
        
        setTimeout(() =>
        {
            select.parentNode.removeChild(select);
        }, 1000);
        
        setTimeout(() =>
        {
            versus.style.display = 'block';
        }, 500);

        setTimeout(() =>
        {
            versus.classList.add('fadeIn');
        }, 1000)
        
        setTimeout(() => {
            randomMove();
        }, 2000);
    });
});

let villains = ['Chrollo', 'Hisoka', 'Meruem'];
let j = 0;

let randomMax = Math.floor(Math.random() * (17 - 15 + 1) + 15);

let randomMove = () => 
{
    for (let i = 0; i < randomMax; i++)
    {
        villains.push(villains[j]);
        let li_item = document.createElement('li');
        let header_item = document.createElement('h1');
        let header_content = document.createTextNode(villains[i]);
        header_item.appendChild(header_content);
        li_item.appendChild(header_item);
        villain_list.appendChild(li_item);

        if (j == 3 - 1)
        {
            j = 0;
        }
        else
        {
            j++;
        }
    }

    let id = null;
    let topPos = -1.5;
    let maxTopPos = -58.35;

    if (randomMax === 15)
    {
        maxTopPos = -58.35;
    }
    else
    if (randomMax === 16)
    {
        maxTopPos = -61.85;
    }
    else
    {
        maxTopPos = -65.25;
    }

    let frame = () =>
    {
        if (topPos <= maxTopPos)
        {
            clearInterval();
        }
        else
        {
            if (Math.abs(maxTopPos-topPos) < 10)
            {
                let velocity = 1;
                velocity *= 0.3;
                topPos -= 0.15 * velocity;
            }   
            else{
                topPos -= 0.15
            }
            villain_list.style.top = topPos + 'em';
        }
    }

    setInterval(frame, 1);
}

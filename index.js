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

const battle = document.querySelector("#battle");
const battle_container = document.querySelector("#battle-container");
const player_container = document.querySelector('#player');
const player_icon = document.querySelector('#player-icon');
const player_name = document.querySelector('#player-name');
const player_health = document.querySelector('#player-health');
const villain_player_container = document.querySelector('#villain');
const villain_icon = document.querySelector('#villain-icon');
const villain_name = document.querySelector('#villain-name');
const villain_health = document.querySelector('#enemy-health');
const icon_container = document.querySelector('#icon_container');
const choices_container = document.querySelector('.choices-container');
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const message = document.querySelector("#result");

let player = "Gon";
let villain =  "Hisoka";

start.classList.add('fadeIn');

playButton.addEventListener('mouseenter', () =>
{
    playButton.classList.add('buttonHover');
    playButton.classList.remove('button');
});

playButton.addEventListener('mouseleave', () =>
{
	playButton.classList.remove('buttonHover');
	playButton.classList.add('button')
});

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
        player = button.lastElementChild.textContent.replace(/\s/g, '');
        versus_container.firstElementChild.textContent = `${player} vs.`;

        if (player === 'Killua')
        {
            document.body.classList.add('killua-body');
        }
        else
        {
            document.body.classList.add('gon-body');
        }

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

        setTimeout(() =>
        {
            versus.classList.remove('fadeIn');
            versus.classList.add('fadeOut');
        }, 5000);

        setTimeout(() =>
        {
            battle.style.display = "block";
            battle.classList.add("fadeIn");
            setupGame();
        }, 7500)
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

    villain = villains[villains.length - 1];

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
            else
            {
                topPos -= 0.15
            }
            villain_list.style.top = topPos + 'em';
        }
    }

    setInterval(frame, 1);
}

let playerHealth = 100, villainHealth = 100;
let score = 0, villainScore = 0;

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
            villainScore++;
            return  "You lose! Paper beats rock";
        }
        if (computerSelection === "Rock") 
        {
            return "Tie!";
        }
    }
    else if (playerSelection === "paper")
    {
        if (computerSelection === "Scissors")
        {
            villainScore++;
            return "You lose! Scissors beats paper"; 
        }
        if (computerSelection === "Paper")
        {
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
            return "Tie!";
        }
        if (computerSelection === "Paper")
        {
            score++;
            return  "You win! Scissors beats paper";
        }
        if (computerSelection === "Rock")
        {
            villainScore++;
            return "You lose! Rock beats scissors";
        }
    }
    else
    {
        console.log("error: Lol get gud");
        return 0;
    }
}

let updateHealth = () =>
{
    villainHealth = 100 - (25 * score);
    playerHealth = 100 - (25 * villainScore);

    villain_health.style.width = `${villainHealth}%`;
    player_health.style.width = `${playerHealth}%`;
}

let setupGame = () =>
{
    player_name.textContent = player;
    villain_name.textContent = villain;

    player_icon.style.backgroundImage = `url("images/avatars/${player.toLowerCase()}.jpg")`;
    villain_icon.style.backgroundImage = `url("images/avatars/${villain.toLowerCase()}.jpg")`;

    console.log(playerHealth);
    console.log(villainHealth);

    updateHealth();

    let output = (result, playerEntry, computerEntry) =>
    {
        updateHealth();
        if (villainHealth <= 0)
        {
            const outputSpan = document.createElement('span');
            message.parentElement.appendChild(outputSpan);
            outputSpan.textContent = `${villain} has been defeated! Reload to play again :)`;
            outputSpan.classList.add('message');
        }
        else
        if (playerHealth <= 0)
        {
            const outputSpan = document.createElement('span');
            message.parentElement.appendChild(outputSpan);
            outputSpan.textContent = `You have been defeated! Reload to try again :(`;
            outputSpan.classList.add('message');
        }
        message.textContent = result;
        console.log("computer entry: " + computerEntry);
        console.log("player entry: " + playerEntry);
        console.log(result);
        console.log("Player Score: " + score + " CPU Score: " + villainScore + " HP: " + playerHealth + " Rounds: " + (0 + 1));
    }

    let playerEntry, result;

    rock.addEventListener('click', () =>
    {
        if (villainHealth > 0 && playerHealth > 0)
        {
            playerEntry = "rock";
            let computerEntry = computerPlay();
            result = playRound(playerEntry, computerEntry);
            output(result, playerEntry, computerEntry);
        }
    });

    paper.addEventListener('click', () => 
    {
        if (villainHealth > 0 && playerHealth > 0)
        {
            playerEntry = "paper";
            let computerEntry = computerPlay();
            result = playRound(playerEntry, computerEntry);
            output(result, playerEntry, computerEntry);
        }
    });

    scissors.addEventListener('click', () =>
    {
        if (villainHealth > 0 && playerHealth > 0)
        {
            playerEntry = "scissors";
            let computerEntry = computerPlay();
            result = playRound(playerEntry, computerEntry);
            output(result, playerEntry, computerEntry);
        }
    });
}
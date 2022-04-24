let computerPlay = () =>
{
    let arr = ["Rock", "Paper", "Scissors"];
    let randomInt = Math.floor(Math.random() * 3);
    return arr[randomInt];
}

console.log(computerPlay());
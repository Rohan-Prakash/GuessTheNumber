'use strict';

// setTimeout(() => {
//     setMessage("Is it working ? ");
// }, 3000);

const MaxCounter = 20;
let secretNumber = 0;
let counter = 20;

// just a function to do console.log, XD
function print(message)
{
    console.log(message);
}
// sets the message - main->right div, this the the text messages that changes in the game
function SetMessage(message)
{
    document.querySelector('.message').textContent = message;
};
// funciton to set live / curr possible score
function SetLiveScore(num)
{
    document.querySelector('.score').textContent = num;
}
// returns the user input, what guess the player has made
function GetInputNumber()
{
    return document.querySelector('.guess').value;
}
// returns the secreat number, the final answer
function GetSecreatNumber()
{
    return secretNumber;
}
// resets the guess value to blank, like a fresh game, that you see on first load
function ResetInputNumber()
{
    document.querySelector('.guess').value = "";
}
// IMP : this function resets the game
function ResetGame()
{
    counter = MaxCounter;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    SetLiveScore(counter);
    SetMessage("Start guessing the number 🧐");
    ResetInputNumber();    
}
// updates the highscore
function UpdateHighScore(newScore)
{
    let currHighscore = Number(document.querySelector('.highscore').textContent);
    let newHighScore = Math.max(currHighscore , Number(newScore));
    document.querySelector('.highscore').textContent = newHighScore;
}
// performs decrement, sanity check, updates score etc;
function DrecementCounter()
{
    if(--counter <= 0)
        {
            SetMessage("you lost");
            setTimeout(()=>{
                ResetGame();
            } , 2000 );
        }
    counter = Math.max(counter , 0);
    SetLiveScore(counter);
}
// performs check, number is greater, or lesser or equal to searet number
function GuessCheck()
{
    let num = Number(GetInputNumber());
    if(num == secretNumber)
    {
        SetMessage("WOW you guessed it !!");
        UpdateHighScore(counter);
        setTimeout(()=>{
            ResetGame();    
        } , 2000 );
    }
    else if(num < secretNumber)
        SetMessage("Too Low");
    else
        SetMessage("Too High")
}


// ON CLICK EVENT
function checkFunction()
{
    GuessCheck();   
    DrecementCounter();
}

/////////////// START ///////////////

ResetGame();
SetMessage("Start guessing the number 🧐");
document.querySelector('.check').addEventListener('click' , checkFunction);
document.querySelector('.again').addEventListener('click' , ResetGame);


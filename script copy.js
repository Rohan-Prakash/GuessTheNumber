'use strict';

// setTimeout(() => {
//     setMessage("Is it working ? ");
// }, 3000);

// document.querySelector('.number').textContent = 13;

const MaxCounter = 4;
let secretNumber = 7;
let counter = 20;

function print(message)
{
    console.log(message);
}
function SetMessage(message)
{
    document.querySelector('.message').textContent = message;
};
function SetLiveScore(num)
{
    document.querySelector('.score').textContent = num;
}
function GetInputNumber()
{
    return document.querySelector('.guess').value;
}
function GetSecreatNumber()
{
    return secretNumber;
}
function ResetInputNumber()
{
    document.querySelector('.guess').value = "";
}
function ResetGame()
{
    counter = MaxCounter;
    secretNumber = GetSecreatNumber();
    SetLiveScore(counter);
    SetMessage("Start guessing the number 🧐");
    ResetInputNumber();    
}
function UpdateHighScore(newScore)
{
    let currHighscore = Number(document.querySelector('.highscore').textContent);
    let newHighScore = Math.max(currHighscore , Number(newScore));
    document.querySelector('.highscore').textContent = newHighScore;
}
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


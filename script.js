let computerGuesses;
let userGuess = [];
let userGuessUpdate = document.getElementById("textOutput");
let userNumberUpdate = document.getElementById("inputBox");
let audio = new Audio("audio.mp3")

const init = () => {
    computerGuesses = Math.floor(Math.random() * 100);
    console.log(computerGuesses);
    document.getElementById("gameArea").style.display = "none";
};

const startGame = () => {
    document.getElementById("newgameButton").style.display = "none";
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
};

const newGameBegin = () => {
    audio.play();
    window.location.reload();
}

const startNewGame = () => {
    document.getElementById("newgameButton").style.display = "inline";
    userNumberUpdate.setAttribute("disabled", true);
}

const compareGuess = () => {
    const userNumber = Number(document.getElementById("inputBox").value);
    userGuess = [...userGuess, userNumber];
    document.getElementById("guesses").innerHTML = userGuess;
    audio.play();

    // check the value low or high 
    if (userGuess.length < maxGuess) {
        if (userNumber > computerGuesses) {
            userGuessUpdate.innerHTML = "Your Guess is High 😮";
            userNumberUpdate.value = "";
        }
        else if (userNumber < computerGuesses) {
            userGuessUpdate.innerHTML = "Your Guess is Low 🤔";
            userNumberUpdate.value = "";
        }
        else {
            userGuessUpdate.innerHTML = "It's Correct 🤩";
            userNumberUpdate.value = "";
            startNewGame();
        }
    }
    else {
        if (userNumber > computerGuesses) {
            userGuessUpdate.innerHTML = `You Loose!! correct number was ${computerGuesses}.`;
            userNumberUpdate.value = "";
            startNewGame();
        }
        else if (userNumber < computerGuesses) {
            userGuessUpdate.innerHTML = `You Loose!! correct number was ${computerGuesses}.`;
            userNumberUpdate.value = "";
            startNewGame();
        }
        else {
            userGuessUpdate.innerHTML = "It's Correct 🤩";
            userNumberUpdate.value = "";
            startNewGame();
        }
    }

    document.getElementById("attempts").innerHTML = userGuess.length;
};

const easyMode = () => {
    audio.play();
    maxGuess = 10;
    startGame();
};

const hardMode = () => {
    audio.play();
    maxGuess = 5;
    startGame();
};
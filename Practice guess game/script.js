let computerGuess;
let UserGuess = [];
let userGuessUpdate = document.getElementById("GuessTitle");
let userNumberUpdate = document.getElementById("GuessInput");

const init = () => {
    computerGuess = Math.floor(Math.random() * 100);
    console.log(computerGuess);
    document.getElementById("secound-section").style.display = "none";
}


const startGame = () => {
    document.getElementById("first-section").style.display = "none";
    document.getElementById("secound-section").style.display = "block";
    document.getElementById("newGameBtn").style.display = "none";
}

const startNewGame = () => {
    document.getElementById("newGameBtn").style.display = "inline";
    userNumberUpdate.setAttribute("disabled", true);
}

const compareGuess = () => {
    const UserNumber = Number(document.getElementById("GuessInput").value);
    UserGuess = [...UserGuess, UserNumber];
    document.getElementById("guess").innerHTML = UserGuess;

    if (UserGuess.length < maxGuess) {
        if (computerGuess > UserNumber) {
            userGuessUpdate.innerHTML = "Guess is Low 🤦‍♂️";
            userNumberUpdate.value = "";
        }

        else if (computerGuess < UserNumber) {
            userGuessUpdate.innerHTML = "Guess is High 🤔";
            userNumberUpdate.value = "";
        }

        else {
            userGuessUpdate.innerHTML = "Your Guess is Correct 😎";
            userNumberUpdate.value = "";
            startNewGame();
        }
    }

    else {
        if (computerGuess > UserNumber) {
            userGuessUpdate.innerHTML = `You Loss Guess is ${computerGuess}.`;
            userNumberUpdate.value = "";
            startNewGame();
        }

        else if (computerGuess < UserNumber) {
            userGuessUpdate.innerHTML = `You Loss Guess is ${computerGuess}.`;
            userNumberUpdate.value = "";
            startNewGame();
        }

        else {
            userGuessUpdate.innerHTML = "Your Guess is Correct 😎";
            userNumberUpdate.value = "";
            startNewGame();
        }
    }

    document.getElementById("attempt").innerHTML = UserGuess.length;

}

const easyMode = () => {
    maxGuess = 10;
    startGame();
}

const hardMode = () => {
    maxGuess = 5;
    startGame();
}


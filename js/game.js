const insChoice = document.getElementById('.insChoice');
const choices = ["rock", "paper", "scissors"];
const npcChoice = choices;

function getChoice() {
    let choiceField = document.getElementById("choiceField").value;
    document.getElementById("myChoice").innerHTML = choiceField.toLowerCase();
}

function generateChoice() {


    const random = Math.floor(Math.random() * npcChoice.length);
    document.getElementById("npcChoice").innerHTML = npcChoice[random].toLowerCase();


}

function checkChoice() {

    if ((myChoice == "paper" && npcChoice == "paper") || (myChoice == "rock" && npcChoice == "rock") || (myChoice == "scissors" && npcChoice == "scissors")) {
        document.getElementById('winOrLose').innerHTML.value = "Draw";
    }
    else if((myChoice == "paper" && npcChoice == "scissors") || (myChoice == "rock" && npcChoice == "paper") ||( myChoice == "scissors" && npcChoice == "rock")) {
        document.getElementById('winOrLose').innerHTML.value = "Computer wins";
    }
    else if((myChoice == "paper" && npcChoice == "rock") ||( myChoice == "rock" && npcChoice == "scissors" )|| (myChoice == "scissors" && npcChoice == "paper")) {
        document.getElementById('winOrLose').innerHTML.value = "You win";
    } else {
        document.getElementById('winOrLose').innerHTML = 'Invalid Choice';
    }


}
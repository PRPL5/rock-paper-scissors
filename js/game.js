let playerScore = 0;
let npcScore = 0;

let npcSelection = npcChoice();
let playerSelection = myChoice();

function npcChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * choices.length);
    return choices[random];

}

console.log("Computer " + npcSelection);

function myChoice(){

    let game = prompt("Choose your hand !");
    const gameInput = game.toLowerCase();
    return gameInput;


}
console.log("Player " + playerSelection);

function gameStart(playerSelection , npcSelection){
    if(playerSelection === npcSelection){
        console.log ("Draw");
    }
    if (playerSelection === "rock"){
        if (npcSelection === 'paper'){
            npcScore++;
            console.log ("Computer wins with paper !");
        }else if (npcSelection === 'scissors'){
            playerScore++;
            console.log("You win!")
        }
    }

    if (playerSelection === "paper"){
        if(npcSelection === 'scissors'){
            npcScore++;
            console.log ("Computer wins with scissors !");
        }else if (npcSelection === 'rock'){
            playerScore++;
            console.log ("You win!");

        }
    }
    if (playerSelection === "scissors"){
        if(npcSelection === 'rock'){
            npcScore++;
            console.log ("Computer wins with rock !");
        }else if (npcSelection === 'paper'){
            playerScore++;
            console.log("You win!");

        }
    }




}
gameStart(playerSelection , npcSelection);




function game() {

    for(let i = 1; i <= 5; i++) {
      
       
       gameStart(playerSelection , npcSelection);
       playerSelection = myChoice();
       npcSelection = npcChoice();

       console.log("Computer " + npcSelection);
       console.log("Player " + playerSelection);
   

      
    }
    console.log("FINAL SCORE: ")
    console.log("Player: " + playerScore);
    console.log("Computer: " + npcScore);
    console.log("THANK YOU FOR PLAYING !!!! ");
    
}

game();

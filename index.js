const rockEl=document.getElementById("rock");
const paperEl=document.getElementById("paper");
const scissorEl=document.getElementById("scissors");
const resultEl=document.getElementById("result");
const playerScoreEl=document.getElementById("user-score");
const computerScoreEl=document.getElementById("computer-score");

let playerScore=0;
let computerScore=0;

  rockEl.addEventListener("click",() => {
  const result=playRound(rockEl.id,computerPlay());
resultEl.textContent=result;
});

    paperEl.addEventListener('click',() => {
      const result=playRound(paperEl.id,computerPlay());   
resultEl.textContent=result;
    });


    scissorEl.addEventListener('click',() => {
      const result=playRound(scissorEl.id,computerPlay());
      resultEl.textContent=result;
    });


    function computerPlay () {
      const choices =["rock","paper", "scissors"];
      const randomChoice=Math.floor(Math.random()*choices.length); 
    return choices[randomChoice];
    }


function playRound(playerSelection,computerSelection) {
if (playerSelection === computerSelection) {
  return "Its a tie";
} else if (
    (playerSelection === "rock" && computerSelection === "paper")||
  (playerSelection === "scissors" && computerSelection === "rock")||
  (playerSelection === "paper" && computerSelection === "scissors")
  
) {

playerScore++;
playerScoreEl.textContent=playerScore;
return "You WIN!! " + playerSelection + " beats " + computerSelection;

} else { 
  computerScore++;
  computerScoreEl.textContent=computerScore;
  return "You LOSE " + computerSelection + " beats " + playerSelection;

}
    
}




// Autour :  Amirhossein Azimyzadeh
// Spring 2019 based on freeCodeCamp.org free tutorial on youtube (C)
console.log("test of javascript running!")
let userScore=0;
let computerScore=0;
// DOM varieables
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.getElementById("score-board");
const result_div =  document.getElementById("result-layout");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
//add listeners to div -->
// main -->
function main(){
    rock_div.addEventListener("click" , function(){
        game("rock");
    });
    paper_div.addEventListener("click" , function(){
        game("paper");

    });
    scissors_div.addEventListener("click",function(){
        game("scissors");
    });
}
// game controller function 
function game(userAction){
    var win =0;
    const computerAction = randomChoice();
    console.log("USER ACTION :::    "+userAction);
    console.log("COPUTER ACTION :::    "+computerAction);
    if(computerAction==userAction){ //draw
        win = -1;
    }else if((userAction=="paper"&&computerAction=="rock")||
                (userAction=="rock"&&computerAction=="scissors")||
                (userAction=="scissors"&&computerAction=="paper")){
                //user win
                userScore++;
                win =1;
    }else{ 
    //lose
        computerScore++;
        win=0;
    }
    updateUI(win,computerAction,userAction);
}
function randomChoice(){
    const random = Math.random() * 3;
    if(random<3 && random >= 2){ // return scissors
        console.log("scissors");
        return "scissors";
    } else if(random<2 && random>=1){ //return paper
        console.log("paper");
        return "paper";
    } else{ //return rock
        console.log("rock");
        return "rock";
    }
}
function updateUI(winState,computerAction,userAction){
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    var result = "computer choose "+computerAction;
    if(winState==1){
        result = result+" , you win !";
    }else if(winState == 0){
        result =result +" , you lose";
    }else{
        result ="!! DRAW !!";
    }
    result_div.innerHTML=result;
}
main();
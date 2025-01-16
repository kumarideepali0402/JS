let rock=document.querySelector(".rock");
let paper=document.querySelector(".paper");
let scissor=document.querySelector(".scissor");
let userScore=document.querySelector(".user-score");
let computerScore=document.querySelector(".computer-score")
let options=document.querySelector(".choice img");
let message=document.querySelector(".message");

function genComputerChoice(){
    opArr=["rock","paper","scissor"]
    message.style.backgroundColor="yellow";
    return opArr[Math.floor(Math.random()*3)];
}
const draw=()=>{
    message.innerText="It's a Draw."
}
function verdict(userWin,userChoice,computerChoice){
    if(userWin){
        message.style.backgroundColor="green";
        message.innerText=`You won!Your${userChoice} beats ${computerChoice}`;
    }
    else{
        message.style.backgroundColor="red";
        message.innerText=`You lose!Computer's${computerChoice} beats ${userChoice}`;

    }
}



options.forEach((option)=>{
    option.addEventListener("click",()=>{
        let userChoice=option.getAttribute();
        let computerChoice=genComputerChoice();
        playGame(userChoice,computerChoice);
    });
});


const playGame=(userChoice,computerChoice)=>{
    let userWin;
    if(userChoice===computerChoice){
        draw();
    }
    else{
        if(computerChoice==="rock"){
            if(userChoice==="scissor") {
                userWin=false;
    
            }
            else if(userChoice==="paper"){
                userWin=true;

            }
            
        }
        else if(computerChoice==="paper"){
            if(userChoice==="scissor") {
                userWin=true;
    
            }
            else if(userChoice==="rock"){
                userWin=true;

            }
           
        }
        else {
            if(userChoice==="paper") {
                userWin=false;
    
            }
            else if(userChoice==="rock"){
                userWin=true;

            }

        }

    }
    verdict(userWin,userChoice,computerChoice);
}

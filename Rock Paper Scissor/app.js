
let userScore=document.querySelector(".user-score");
let computerScore=document.querySelector(".computer-score")
let options=document.querySelectorAll(".choice ");
let message=document.querySelector(".message");
let uScore=0;
let cScore=0;
const opArr=["rock","paper","scissor"];


function genComputerChoice(){
    message.style.backgroundColor="yellow";
    return opArr[Math.floor(Math.random()*3)];
}
const draw=()=>{
    console.log("its a draw DRAW");

    message.innerText="It's a Draw."
}
function verdict(userWin,userChoice,computerChoice){
    if(userWin){
        uScore++;
        userScore.innerText=uScore;
        message.style.backgroundColor="green";
        message.innerText=`You won! Your ${userChoice} beats ${computerChoice}`;
    }
    else{
        cScore++;
        computerScore.innerText=cScore;
        message.style.backgroundColor="red";
        message.innerText=`You lose! Computer's ${computerChoice} beats ${userChoice}`;
    }
}



options.forEach((option)=>{
    option.addEventListener("click",()=>{
        console.log("button was clicked");
        let userChoice=option.getAttribute("id");
        let computerChoice=genComputerChoice();
        playGame(userChoice,computerChoice);
    });
});


const playGame=(userChoice,computerChoice)=>{
    let userWin;
    if(userChoice==computerChoice){
        console.log("its a draw play game");
        draw();
    }
    else{
        if(computerChoice=="rock"){
            console.log("computerChoice=='rock'");

            if(userChoice=="scissor") {
                userWin=false;
                console.log("userChoice=='scissor'");

    
            }
            else if(userChoice=="paper"){
                userWin=true;
                console.log("userChoice=='paper'");
            }
            
        }
        else if(computerChoice=="paper"){
            if(userChoice==="scissor") {
                userWin=true;
                console.log("userChoice=='paper'");
            }
            else if(userChoice=="rock"){
                userWin=false;
                console.log("userChoice=='rock'");
            }
           
        }
        else {
            if(userChoice=="paper") {
                userWin=false;
                console.log("userChoice=='paper'");
            }
            else if(userChoice=="rock"){
                userWin=true;
                console.log("userChoice=='rock'");
            }

        }

    }
    verdict(userWin,userChoice,computerChoice);
}

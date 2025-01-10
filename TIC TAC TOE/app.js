let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newGameBtn=document.querySelector('#new-game-btn');
let msgContainer=document.querySelector('.msg-container');
let msg=document.querySelector('.msg');

let turn0=true;

const winPatterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

const showWinner = (winner) => {
    msg.innerText=`Congrats! ${winner} won.`;
    msgContainer.classList.remove("hide");
    
    disabledBoxes();
};

const resetGame=()=>{
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");


};

const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;

    }
    
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        box.classList.remove("x","o");

    }
    
}

const checkWinner=()=>{
    for(let pattern of winPatterns){
        pos1=boxes[pattern[0]].innerText;
        pos2=boxes[pattern[1]].innerText;
        pos3=boxes[pattern[2]].innerText;
        if(pos1!='' && pos2!='' && pos3!=''){
            if(pos1===pos2 && pos3===pos1){
                console.log("Winner");
                showWinner(pos1);
                return true;
            }

        }
        return false;
       

    }

};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerHTML='O';
            box.classList.add('o');
            turn0=false;
    
        }
        else{
            box.innerHTML='X';
            box.classList.add('x');
            turn0=true;
    
        }
        box.disabled=true;
        checkWinner();

    });
    
    
});
newGameBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);


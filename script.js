let boxes=document.querySelectorAll(".box");
let msgcontainer= document.querySelector(".msg-container");
let resetbtn= document.querySelector("#reset");
let newbtn= document.querySelector(".new-game");
let msgm= document.querySelector("#msg");
let count=0;
turnO=true;

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8],
];

const resetGame= ()=>{
    for( let box of boxes){
        turnO=true;
        msgcontainer.classList.add("hide");
        box.innerText="";
        enableBoxes();
    }
}
const disableBoxes= () =>{
    for (let box of boxes){
        box.disable=true;
    }
};

const enableBoxes = () =>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner= (winner)=>{
    msgcontainer.classList.remove("hide");
    msgm.innerText=`Congratulation, winner is ${winner}`;
    disableBoxes();
};
const gameDraw= ()=>{
    msgm.innerText= `Game is Draw`;
    disableBoxes();
    msgcontainer.classList.remove("hide");
}
const checkWinner= () =>{
    for (let pattern of winPatterns){
    pos1val=boxes[pattern[0]].innerText;
    pos2val=boxes[pattern[1]].innerText;
    pos3val=boxes[pattern[2]].innerText;
    if(pos1val !="" && pos2val !="" && pos3val !=""){
        if(pos1val==pos2val && pos2val==pos3val){
            showWinner(pos1val);
            return true;
        }
    }
}
};
boxes.forEach((box)=>{
   box.addEventListener("click",()=>{
    if(turnO){
        box.innerText="O";
        turnO=false;
    }
    else{
        box.innerText="X";
        turnO=true;
    }
    box.disabled=true;
    count++;
    let isWinner=checkWinner();
    if(count === 9 && !isWinner){
        gameDraw();
    }
   });
});
resetbtn.addEventListener("click",resetGame);
newbtn.addEventListener("click",resetGame);

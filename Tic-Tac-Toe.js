let boxs = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let count = 0;
let turnO = true;
let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]


const resetGame = () => {
    turnO = true;
    enableBtns();
    msgContainer.classList.add("hide");
    count = 0;
}




boxs.forEach((box) => {
    box.addEventListener("click",() =>{
        if(turnO){
            box.innerText = "O"
            turnO = false;

        }else{
            box.innerText = "X"
            turnO = true;
        }
        count++;
    box.disabled = true;
    checkWinner();
    });
});


const enableBtns = () => {
    for(let box of boxs){
        box.disabled = false;
        box.innerText = "";
    }
}

const disableBtns = () => {
    for(let box of boxs){
        box.disabled = true;
    
    }
}


const showWinner = (winner ) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBtns();
}
const game_Tie = (pla1, pla2 ) => {
    msg.innerText = `Match is Tie Between ${pla1} and ${pla2}`;
    msgContainer.classList.remove("hide");
    disableBtns();
}

const checkWinner = () => {
    for(let patterns of winPatterns) {
        let pos1Val = boxs[patterns[0]].innerText;
        let pos2Val = boxs[patterns[1]].innerText;
        let pos3Val = boxs[patterns[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
          
                showWinner(pos1Val);
                winner = false;
            }else if (count == 9){
                game_Tie(pos1Val,pos2Val);
            }

        }
    }
}

newGameBtn.addEventListener("click", resetGame);

resetBtn.addEventListener("click", resetGame);

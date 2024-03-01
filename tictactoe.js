let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let msg=document.querySelector("#msg");
let newGame=document.querySelector("#newBtn");
let msgContainer=document.querySelector(".msg-container");

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    
};



let turnO=true;
const winningpattern=[[0,1,2],
                    [0,3,6],
                    [0,4,8],
                    [1,4,7],
                    [2,5,8],
                    [2,4,6],
                    [3,4,5],
                    [6,7,8],
];


let cnt=0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        cnt++;
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
        draw(cnt);
    })
})


const disableBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
};


const enableBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
   
   
};

const draw=(cnt)=>{
    if(cnt===9){
        msg.innerText=`GAME DRAW`;
        msgContainer.classList.remove("hide");
        disableBoxes();
    }

};



const showWinner=(winner)=>{
    //console.log(`Winner Player ${pos1}`);
    msg.innerText=`WINNER :  Player ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};




const checkWinner=()=>{
    for(let pattern of winningpattern){
        //console.log(pattern[0],pattern[1],pattern[2]);
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        //console.log(,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        if(pos1 != "" && pos2 != "" && pos3!= "")
        {
            if(pos1 === pos2  &&  pos2 === pos3)
            {
                showWinner(pos1);
                winningpattern.disabled=true;
            }
        }
        
    }
};

resetbtn.addEventListener("click",resetGame);
newGame.addEventListener("click",resetGame);





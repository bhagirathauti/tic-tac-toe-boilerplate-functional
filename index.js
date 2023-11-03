// Iteration 1 - Declare all the variables
const boxElements = document.querySelectorAll(".box")
let winningCombination = 
[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
const Result  = document.getElementById('result')
const message = document.getElementById('message')
const PlayAgain = document.getElementById('button')

var click = 0;
let xAttempts = [];
let oAttempts = [];
let wonTheGame = 0;

//Iteration 2 : OnClick function
boxElements.forEach((el,i,arr)=>{
    el.onclick = ()=>{ 
        handleClick(event)
    };
})

function handleClick(e){
    let i = e.target.id;
    let p = document.createElement("p")
    p.setAttribute("id","text");
    boxElements[i-1].append(p);
    if(click % 2 == 0){
        p.innerHTML="X"
        p.style.color = "green";
        xAttempts.push(parseInt(i-1))
        result(winningCombination,xAttempts,"X")
    }
    else{
        p.innerHTML="O"
        p.style.color = "pink"
        oAttempts.push(parseInt(i-1))
        result(winningCombination,oAttempts,"O")
    }
    click++
    if(click == 9 && wonTheGame == 0){
        Result.style.visibility = "visible";
        message.innerHTML = "It's a Tie"
    }
}

//Iteration 3 : The Result function
function result(winningCombination,attempts,player){
    let count = 0;
    let checker = [];

    for(let i = 0; i<winningCombination.length;i++){
        if(Array.isArray(winningCombination[i])){
            result(winningCombination[i],attempts,player)
        }
        else{
            if(attempts.includes(winningCombination[i])){
                checker.push(true)
                count++
            }
            else{
                checker.push(false)
            }
        }
    }
    if(checker.every(el => el=== true)&& count>2){
        Result.style.visibility="visible"
        message.innerHTML = "The Winner is"+player+"!";
        wonTheGame = 1
    }
}
//Iteration 4 
PlayAgain.onclick=()=>{
    window.location.href="./index.html";
}

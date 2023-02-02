let turn = "X";
let ting = new Audio("ting.mp3");
let music = new Audio("music.mp3");
let gameOverMusic = new Audio("gameover.mp3");
let reset = document.getElementById("reset");




//game winning combinations  
let winCombos = [
    [0 , 1 , 2] ,
    [0 , 3 , 6] ,
    [0 , 4 , 8] ,
    [2 , 5 , 8] ,
    [2 , 4 , 6] ,
    [3 , 4 , 5] ,
    [6 , 7 , 8] ,
    [1,  4 , 7]
];


//changes turn of the player
const changeTurn = ()=>{
    return turn === 'X'? 'O' : 'X' ;
}
//function to check Win
const checkWin = ()=>{

}
//game logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            ting.play();
            checkWin();
            document.getElementById("info").innerText  = "Turn for " + turn;
        }
    })
})
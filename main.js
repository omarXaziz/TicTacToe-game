let turn = "X";
let ting = new Audio("ting.mp3");
let music = new Audio("music.mp3");
let gameOverMusic = new Audio("gameover.mp3");
let reset = document.getElementById("reset");
let box = document.getElementsByClassName("box");



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

Array.from(box).forEach(element => {
    let boxText = document.querySelector(".boxtext");
    element.addEventListener('click', () => {
        if (boxText.innerText === '') {
            boxText.innerText = turn;
            turn = changeTurn();
            ting.play();
            checkWin();
            document.getElementById("info").innerHTML = "Turn for " + turn ;
        }
    })
})


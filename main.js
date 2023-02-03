let turn = "X";
let ting = new Audio("ting.mp3");
let music = new Audio("music.mp3");
let gameOverMusic = new Audio("gameover.mp3");
let reset = document.getElementById("reset");
let box = document.getElementsByClassName("box");
let gameOver = false ; 



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
//gameWon function decides what to do after a player wins
const gameWon = (e)=>{
    document.getElementById("info").innerText = e +"  WON!!";
    document.getElementById("info").style.color = "purple";
    music.play();
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "300px";
    gameOver = true;
}
//function to check Win
const checkWin = ()=>{
    let boxText = document.getElementsByClassName("boxtext");
    winCombos.forEach (e =>{
        if (boxText[e[0]].innerText === boxText[e[1]].innerText && boxText[e[1]].innerText === 
            boxText[e[2]].innerText && boxText[e[0]].innerText !=="")
            {
                gameWon(boxText[e[0]].innerText);
            }
    })
}

//game logic
const gameLogic = ()=>{
    Array.from(box).forEach(element =>{
        let boxText = element.querySelector('.boxtext');
        element.addEventListener('click', ()=>{
            
                if(!gameOver){
                    if(boxText.innerText === ''){
                        boxText.innerText = turn;
                        turn = changeTurn();
                        ting.play();
                        checkWin();
                        if (!gameOver)(document.getElementById("info").innerText  = "Turn for " + turn);
                } 
            }
        })
    })
}


//starting the game
startGame();
function startGame(){
    if (!gameOver){
        gameLogic();
    }
}

//function of 'Reset' button
reset.addEventListener('click' , ()=>{
    Array.from(box).forEach(element =>{
        let boxText = element.querySelector('.boxtext');
        boxText.innerText = '';
        turn = changeTurn();
        document.getElementById("info").innerText = "Turn for X";
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
        document.getElementById("info").style.color = "black";
        gameOver = false;
        music.pause();
        })
})
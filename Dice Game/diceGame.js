
//Generating a Random Number 

var lowest = 1;
var highest = 6;

var randomDiceNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceNumber2 = Math.floor(Math.random() * 6) + 1;

//Player 1 Dice

var player1ImgSRC = "Images/dice" + randomDiceNumber1 + ".png";

var randomPlayer1Img = document.getElementsByClassName("diceImg1")[0];

randomPlayer1Img.setAttribute("src", player1ImgSRC);

//Player 2 Dice

var player2ImgSRC = "Images/dice" + randomDiceNumber2 + ".png";

var randomPlayer2Img = document.getElementsByClassName("diceImg2")[0];

randomPlayer2Img.setAttribute("src", player2ImgSRC);

//Determining the Winner

if(randomDiceNumber1 > randomDiceNumber2){
    var player1Win = document.getElementsByClassName("gameTitleChange")[0].innerHTML = "▶ Player A" + " Won!!!";
}

if(randomDiceNumber1 < randomDiceNumber2){
    var player2Win = document.getElementsByClassName("gameTitleChange")[0].innerHTML = "▶ Player B" + " Won!!!";
}

if(randomDiceNumber1 === randomDiceNumber2){
    var player3Win = document.getElementsByClassName("gameTitleChange")[0].innerHTML = "▶ Its a TIE!!!";
}
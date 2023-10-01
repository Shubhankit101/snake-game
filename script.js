const gameBoard = document.getElementById('gameBoard');
const context = gameBoard.getContext('2d');
const scoreText = document.getElementById('score');
const resetButton = document.getElementById('resetButton');
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground ='white';
const snakeColor = 'blue';
const snakeBorder = 'black';
const foodColor = 'red';
const unitSize = 25;
let running = false;
let xSpeed = unitSize;
let ySpeed = 0;
let foodX;
let foodY;
let totalScore = 0;
//adding snake body which is an object
let snake = [
    {x:unitSize * 4, y:0},
    {x:unitSize * 3, y:0},
    {x:unitSize * 2, y:0},
    {x:unitSize, y:0},
    {x:0, y:0}
];
window.addEventListener('keydown', changeDirection);
resetButton.addEventListener('click', resetGame)

gameStart();

function gameStart(){
    running=true;
    scoreText.textContent = totalScore;
    createFood();
    drawFood();
    nextTrick();
};
function nextTrick() {
    if(running){
        setTimeout(()=>{
            clearBoard();
            drawFood();
            moveSnake();
            drawSnake();
            checkGameOver();
            nextTrick();
        }, 80);
    }
    else
        displayGameOver();
};
function clearBoard() {
    context.fillStyle = boardBackground;
    context.fillRect(0, 0 ,gameWidth, gameHeight); 
};
function createFood(){
    function randomFood(min, max){
        //Every number created is divisible by 25
        const randNum = Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize;
        return randNum;
    }
    foodX = randomFood(0, gameWidth - unitSize);
    foodY = randomFood(0, gameWidth - unitSize);
};
function drawFood(){
    context.fillStyle = foodColor;
    context.fillRect(foodX, foodY, unitSize, unitSize);
};
function moveSnake(){};
function drawSnake(){
    context.fillStyle = snakeColor;
    context.strokeStyle = snakeBorder;
    snake.forEach(snakePart =>{
        context.fillRect(snakePart.x, snakePart.y, unitSize, unitSize);
        context.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize);
    })
};
function changeDirection(){};
function checkGameOver(){};
function displayGameOver(){};
function resetGame(){};

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

function gameStart(){};
function nextTrick() {};
function clearBoard() {};
function createBoard(){};
function drawFood(){};
function moceSnake(){};
function drawSnake(){};
function changeDirection(){};
function checkGameOver(){};
function displayGameOver(){};
function resetGame(){};
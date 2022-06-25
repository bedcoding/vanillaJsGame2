import { detectSnake, expandSnake } from "./snake.js";

let foodPosition = { x: 5, y: 5 }

export function update() {
    const result = detectSnake(foodPosition);
    
    // 먹이를 먹은 경우
    if(result) {
        foodPosition.x = Math.floor(Math.random() * 19 + 1);
        foodPosition.y = Math.floor(Math.random() * 19 + 1);
        expandSnake();
    }
}

export function draw(gameBoard) {
    const snakeElement = document.createElement('div'); // div태그를 만든다
    snakeElement.style.gridColumnStart = foodPosition.x;
    snakeElement.style.gridRowStart = foodPosition.y; // div태그의 x, y 를 설정한다.
    snakeElement.classList.add('food'); // div태그의 클래스 이름을 snake로 설정한다.
    gameBoard.appendChild(snakeElement); // 최종적으로 gameBoard에 div태그를 추가
}
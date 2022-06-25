import { 
    SNAKE_SPEED,
    update as updateSnake, 
    draw as drawSnake, 
    snakeIntersection, // 뱀 사망 체크1
    checkOutside, // 뱀 사망 체크2
} from './snake.js';

import {
    draw as foodDraw,
    update as updateFood,
} from './food.js';

let lastRenderTime = 0; // 마지막으로 랜더링한 시간
const gameBoard = document.getElementById('game-board'); // id이름이 'game-board'인 게임판을 가져온다.

function main(currentTime) { // main은 계속 loop
  if(snakeIntersection() || checkOutside()) {
    alert("사망");
    return;
  }

  window.requestAnimationFrame(main); // render되기 전에 main함수를 호출하고 랜더링 함
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000; // 마지막 랜더링으로부터 지난 시간 계산
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return; // 너무 빠른 간격으로 랜더링 된 프레임은 return하여 속도를 유지한다.
 
  lastRenderTime = currentTime; // lastRenderTime을 갱신한다.
  draw();
  update();
}

function update() { // 모든 업데이트 함수를 호출해준다.
    updateSnake();
    updateFood();
}

function draw() { // 모든 그리는 함수를 호출해준다.
    drawSnake(gameBoard);
    foodDraw(gameBoard);
}

window.requestAnimationFrame(main);
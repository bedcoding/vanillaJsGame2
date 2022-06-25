import { getDirection } from "./input.js";

// 뱀의 속도
export const SNAKE_SPEED = 5;
let newBody = [];

// 뱀 몸의 좌표를 저장하는 리스트
const snakeBody = [
  { x: 10, y: 11 },
  { x: 11, y: 11 },
  { x: 12, y: 11 },
]

export function update() {
    const nowDirection = getDirection();
    snakeBody.pop();
    
    snakeBody.unshift({
        x: snakeBody[0].x + nowDirection.x,
        y: snakeBody[0].y + nowDirection.y
    })

    addBody();
}

export function draw(gameBoard) {
    gameBoard.innerHTML = '';
    snakeBody.forEach(position => { // 뱀 몸통들을 그리기 위한 forEach문
      const snakeElement = document.createElement('div'); // div태그를 만든다
      snakeElement.style.gridRowStart = position.y; // div태그의 x, y 를 설정한다.
      snakeElement.style.gridColumnStart = position.x;
      snakeElement.classList.add('snake'); // div태그의 클래스 이름을 snake로 설정한다.
      gameBoard.appendChild(snakeElement); // 최종적으로 gameBoard에 div태그를 추가
    })

    // if(snakeIntersection() || checkOutside()) {
    //   alert("사-망");
    //   return;
    // }
  }

// 머리가 자신의 몸에 닿았나?
export function snakeIntersection() {
  for (let index = 1; index < snakeBody.length; index++) {
    if(snakeBody[index].x === snakeBody[0].x && snakeBody[index].y === snakeBody[0].y) {
      return true;
    }
  }

  return false;
}

export function checkOutside() {
  if(snakeBody[0].x < 0 || snakeBody[0].x > 20 || snakeBody[0].y < 0 || snakeBody[0].y > 20) {
    return true;
  }

  return false;
}

export function expandSnake(amount) { // 뱀의 길이를 늘이는 함수
  const tail = snakeBody[snakeBody.length - 1];  // update() 함수의 이동방식이 꼬리꺼 떼서 머리에 붙이므로 꼬리쪽은 비어있다 -> 같은 좌표로 붙이면 됨
  newBody.push(tail);
}

export function detectSnake(foodPosition) { // 뱀이 특정 좌표와 겹치는지 확인하는 함수 ( ignoreHead옵션이 없다면 false로 설정.)
  if (snakeBody[0].x === foodPosition.x && snakeBody[0].y === foodPosition.y) {
    console.log("냠냠");
    return true;
  }

  return false;
}

function addBody() {
  newBody.forEach(element => {
    snakeBody.push(element);
  });

  newBody = [];
}
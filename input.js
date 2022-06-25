let inputDirection = { x: -1, y: 0 }; // 현재 입력받는 방향의 변화량
let prevInputDirection = { x: -1, y: 0 }; // 이전 입력 방향의 변화량

window.addEventListener('keydown', event => {
  switch (event.key) {
    case "ArrowUp":
      // 뱀이 현재 왼쪽으로 가고 있는 경우
      if(prevInputDirection.y === -1 || prevInputDirection.y === 1) return;  // 위로 가고 있거나 밑으로 가고 있는 경우 작동x
      inputDirection.x = 0;
      inputDirection.y = -1;
      break;
  
    case "ArrowDown":
      if(prevInputDirection.y === -1 || prevInputDirection.y === 1) return;  // 위로 가고 있거나 밑으로 가고 있는 경우 작동x
      inputDirection.x = 0;
      inputDirection.y = 1;
      break;

    case "ArrowLeft":
      if(prevInputDirection.x === -1 || prevInputDirection.x === 1) return;  // 왼쪽으로 가고 있거나 오른쪽으로 가고 있는 경우 작동x
      inputDirection.x = -1;
      inputDirection.y = 0;
      break;
    
    case "ArrowRight":
      if(prevInputDirection.x === -1 || prevInputDirection.x === 1) return;  // 왼쪽으로 가고 있거나 오른쪽으로 가고 있는 경우 작동x
      inputDirection.x = 1;
      inputDirection.y = 0;
      break;

    case "Enter":
      alert("일시정지");
      break;

    default:
      break;
  }
})

export function getDirection() {
  prevInputDirection = inputDirection;
  return inputDirection;
}
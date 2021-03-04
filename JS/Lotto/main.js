// 비동기 코드 : 실제로 코딩한 순서와 다르게 동작
// ex) EventListener

const candidate = [];         //  1 ~ 45번 까지의 공 생성
for (let n = 0; n < 45; n++) {
  candidate.push(n + 1);
}

const shuffle = [];           // 1 ~ 45번 까지의 공 섞기. 
while (candidate.length > 0) {          // 무한 반복이 필요하기에 for보다는 while이 유리
  const random = Math.floor(Math.random() * candidate.length); // 무작위 인덱스 뽑기
  const spliceArray = candidate.splice(random, 1); // 뽑은 값은 배열에 들어 있음
  const value = spliceArray[0]; // 배열에 들어 있는 값을 꺼내어
  shuffle.push(value); // shuffle 배열에 넣기
}                   // 해당 알고리즘을 'Fisher-Yates shuffle algorithm'이라 한다.
console.log(shuffle);

// for (let i = candidate.length; i > 0; i--) {
//   const random = Math.floor(Math.random() * i); // 무작위 인덱스 뽑기
//   const spliceArray = candidate.splice(random, 1); // 뽑은 값은 배열에 들어 있음
//   const value = spliceArray[0]; // 배열에 들어 있는 값을 꺼내어
//   shuffle.push(value); // shuffle 배열에 넣기
// }
// console.log(shuffle);

const winBalls = shuffle.slice(0, 6).sort((a, b) => a - b);     // 공 정렬하기
const bonus = shuffle[6];
console.log(winBalls, bonus);

const $result = document.querySelector('#result');    // 일정 시간 후에 출력(실행)하기
for (let i = 0; i < winBalls.length; i++) {
  setTimeout(() => {
    const $ball = document.createElement('div');
    $ball.className = 'ball';
    $ball.textContent = winBalls[i];
    $result.appendChild($ball);
  }, 1000 * (i + 1));
}


const $bonus = document.querySelector('#bonus');
setTimeout(() => {
  const $ball = document.createElement('div');
  $ball.className = 'ball';
  $ball.textContent = bonus;
  $result.appendChild($ball);    
}, 7000);


const $result = document.querySelector('#result');    // 일정 시간 후에 출력(실행)하기
function drawBall(number, $parent) {
  const $ball = document.createElement('div');
  $ball.className = 'ball';
  $ball.textContent = number;
  $parent.appendChild($ball);
}
for (let i = 0; i < winBalls.length; i++) {
  setTimeout(() => {
    drawBall(winBalls[i], $result);
  }, 1000 * (i + 1));
}

const $bonus = document.querySelector('#bonus');
setTimeout(() => {
  drawBall(bonus, $bonus);
}, 7000);
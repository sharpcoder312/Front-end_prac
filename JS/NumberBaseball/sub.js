

const numbers = [];
for (let n = 0; n < 9; n += 1) {
  numbers.push(n+1);
}                        // 1 ~ 9까지의 숫자를 먼저 모아둔다.
// const numbers = [0,1,2,3,4,5,6,7,8,9]; 를 쓰지않는 이유는 지금은 수의 범위가 적어서 괜찮겠지만 극단적으로 수가 많은 경우를 생각하자.

// 배열의 반복을 for문이 아닌 아래의 배열 메서드를 활용할 수도 있다.
const numbers = Array(9).fill().map((num, idx) => {
  return idx+1
});

const number = [];
Array(9).fill().forEach((num, idx) => {
    number.push(idx+1);
});

const numbers = Array(9).fill().map((v, i) => i + 1);
// 배열의 메서드는 강력하기에 위 코드처럼 for문을 아예 사용하지 않고, 모든 값을 배열로 만들어서 처리할 수도 있다.
// fill() - 배열의 요소로 undefined를 채워넣는 메서드
// map() - 요소들을 일대일로 짝지어 다른 값으로 변환하는 메서드


let strike = 0;
let ball = 0;



for (let i = 0; i < answer.length; i++) {
  const index = value.indexOf(answer[i]);
  if (index > -1) { // 일치하는 숫자 발견
    if (index === 1) {  // 자릿수도 같음
      strike += 1;
    } else {
      // 숫자만 같음
      ball += 1;
    }
  }
}

answer.forEach((number, aIndex) => {
  const index = value.indexOf(String(number));
  if (index > -1) {
    if (index === aIndex) {   //  자릿수도 같음
      strike += 1;
    } else {    //  숫자만 같음
      ball += 1;
    }
  }
})
// answer 배열에 있는 요소들을 forEach 메스드로 순회한다.
// forEach는 인수로 함수를 받고, 배열의 요소 하나 하나에 인수로 받음 함수를 각각 적용한다.
// 이때, 요소 순서대로 함수를 적용하므로 반복문의 역할을 하게되는 것이다.
const $input = document.querySelector('#input');
const $form = document.querySelector('#form'); // form을 쓰는 경우에는 보통 input이 아닌 form에 eventlistener를 달아준다. form내의 다른 태그들을 가리키고 싶을 땐 event객체를 사용하자. ex) event.target[0] = input // event.target[1] = submit
const $logs = document.querySelector('#logs');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const answer = [];
// for (let n = 0; n < 4; n++) {     // 4번 반복
//   const index = Math.floor(Math.random() * 9);      // 0 ~ 8 정수
//   answer.push(numbers[index]);     // 0 ~ 8의 정수가 오는 이유는 [] index가 0부터 시작한다는 특징과 배열 안의 든 숫자들의 차이를 생각하면 알 수 있다.
//   numbers.splice(index, 1);
// }
// console.log(answer);
// 이 코드의 문제는 (Math.random() * 9)를 사용하게 됐을 때, 간혹 숫자 대신 undefined가 뽑혀 나올 때가 있다는 것이다.
// 함수가 한번 돌고나면 요소가 하나 줄어들 것인데, 하필 다음 함수가 돌때 남은 요소 개수보다 큰 index값이 무작위에서 뽑혀나온다면 undefined가 나오는 원리이다.
// 이렇게 예외를 발견하는 방법은 극단적인 수나 맨 처음 값, 맨 끝 값을 생각해보면 쉽게 생각할 수 있다.


const answer = []; // 숫자 4개를 뽑는다.
for (let n = 0; n < 4; n++) { // 4번 반복
  const index = Math.floor(Math.random() * numbers.length); // numbers 길이에 따라
  answer.push(numbers[index]); // 여기서 numbers[index]가 아닌 index를 넣게된다면 numbers의 1~9사이의 수를 넣는 것이 아니라 엉뚱하게 0~8을 넣어버린다. 그러면 answer배열 내에 중복되는 수가 발생할 수 있다.
  numbers.splice(index, 1);
}
console.log(answer);


const tries = [];

function checkInput(input) {
  if (input.length !== 4) { // 길이는 4가 아닌가
    return alert('4자리 숫자를 입력하시오.')
  }
  if (new Set(input).size !== 4) { // 중복된 숫자가 있는가
    return alert('중복되지 않게 입력하시오.')
  }
  if (tries.includes(input)) { // 이미 시도한 값인가
    return alert('이미 시도한 값입니다.');
  }
  return true; // 검사 통과 - true return // 검사 실패 - false return
} // alert 함수는 기본적으로 undefined를 return한다. if문에서는 undefined를 false 처리하므로 결과는 같다.
// 사실 위의 코드는 HTML5의 검증 기능으로도 대체 가능하다. ex) required, minlength, maxlength, pattern ...
// 하지만 error 메세지의 디자인 변경이 어려우며 최근 잘 쓰지않는 추세이다.

let out = 0;

function defeated() {
  const message = document.createTextNode(`패배! 정답은 ${answer.join('')}`);
  $logs.appendChild(message);
}


$form.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = $input.value;
  $input.value = ''; // === event.target[0].value = '';
  if (!checkInput(value)) {
    return;
  }
  if (answer.join('') === value) {
    $logs.textContent = '홈런!';
    return;
  }
  if (tries.length > 8) { // 시도 횟수
    const message = document.createTextNode(`패배! 정답은 ${answer.join('')}`)
    $logs.appendChild(message); // createTextNode와 appendChild를 쓴 이유는 textContent를 쓰면 기존 내용이 사라지기 때문이다. 그래서 홈런시에는 textContent를 썼다.
    return;
  }


  // 몇 스트라이크 몇 볼인지 검사
  let strike = 0;
  let ball = 0;
  for (let i = 0; i < answer.length; i++) {
    const index = value.indexOf(answer[i]);
    if (index > -1) { // 일치하는 숫자 발견
      if (index === i) { // 자릿수도 같음
        strike += 1;
      } else {
        // 숫자만 같음
        ball += 1;
      }
    }
  }
  if (strike === 0 && ball === 0) {
    out++;
    $logs.append('아웃', document.createElement('br'));
  } else {
    $logs.append(`${value}:${strike} 스트라이크 ${ball} 볼`, document.createElement('br'));
  }
  if (out === 3) {
    defeated();
    return;
  }
  $logs.append(`${value}: ${strike} 스트라이크 ${ball} 볼`, document.createElement('br'));
  tries.push(value);
});
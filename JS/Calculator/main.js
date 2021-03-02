let numOne = '';
let operator = '';
let numTwo = '';

const $operator = document.querySelector('#operator'); 
const $result = document.querySelector('#result');

// const onClickNumber = (number) => () => {
//   if (operator) {
//     numTwo += number;
//   } else {
//     numOne += number;
//   }
//   $result.value += number;
// };


const onClickNumber = (event) => {
  if (operator) {
    if (!numTwo) {
      $result.value = '';
    }
    numTwo += event.target.textContent;
  } else {
    numOne += event.target.textContent;
  }
  $result.value += event.target.textContent;
};

document.querySelector('#num-0').addEventListener('click', onClickNumber);
document.querySelector('#num-1').addEventListener('click', onClickNumber);
document.querySelector('#num-2').addEventListener('click', onClickNumber);
document.querySelector('#num-3').addEventListener('click', onClickNumber);
document.querySelector('#num-4').addEventListener('click', onClickNumber);
document.querySelector('#num-5').addEventListener('click', onClickNumber);
document.querySelector('#num-6').addEventListener('click', onClickNumber);
document.querySelector('#num-7').addEventListener('click', onClickNumber);
document.querySelector('#num-8').addEventListener('click', onClickNumber);
document.querySelector('#num-9').addEventListener('click', onClickNumber);
// 고차함수를 쓴다면 고차함수의 특징으로 인해 바로 함수가 호출되지 않아서 onClickNumber(0) ~ (9)을 써줘도 되지만
// 고차함수의 특징을 쓰지않고 0~9의 공통점을 찾아 event.target.textContent로 코드를 짠다면
// 이벤트리스너에서 함수를 ()를 이용하여 바로 호출해서는 안된다.



const onClickOperator = (op) => () => {
  if (numOne) {
    operator = op;
    $operator.value = op;
  } else {
    alert('먼저 숫자를 입력하세요.');
  }
};

document.querySelector('#plus').addEventListener('click', onClickOperator('+'));
document.querySelector('#minus').addEventListener('click', onClickOperator('-'));
document.querySelector('#divide').addEventListener('click', onClickOperator('/'));
document.querySelector('#multiply').addEventListener('click', onClickOperator('*'));
document.querySelector('#calculate').addEventListener('click',() => {
  if (numTwo) {
  switch (operator) {
    case '+':
      $result.value = parseInt(numOne) + parseInt(numTwo);
      break;
    case '-':
      $result.value = numOne - numTwo;
      break;
    case '*':
      $result.value = numOne * numTwo;
      break;
    case '/':
      $result.value = numOne / numTwo;
      break;
    default:
      break;
    }
  } else {
      alert('숫자를 먼저 입력하세요.');
  }
});   
// if문 대신 switch문을 사용한 이유는 조건에 해당하는 변수가 operator로 계속 같으므로 switch문을 쓰는 것이 좀 더 깔끔하다고 볼 수 있다.




// document.querySelector('#calculate').addEventListener('click', () => {
//   if (numTwo) {
//     $result.value = eval(numOne + operator + numTwo);
//   } else {
//     alert('숫자를 먼저 입력하세요.');
//   }
// });
// eval함수를 통하여 중복을 또 줄일 수 있다.
// 하지만 보안상 위험성으로 인해 실무에서 잘 쓰지않는다.

document.querySelector('#clear').addEventListener('click', () => {
  numOne = '';
  operator = '';
  numTwo = '';
  $operator.value = '';
  $result.value = '';
});
let numOne = '';
let operator = '';
let numTwo = '';

const $operator = document.querySelector('#operator'); 
const $result = document.querySelector('#result');
const $num = document.querySelectorAll('.num');


const onClickNumber = (event) => {
  if (operator) {         // operator가 빈 값이 아니라면
    if (!numTwo) {
      $result.value = '';
    }
    numTwo += event.target.textContent;
  } else {
    numOne += event.target.textContent;
  }
  $result.value += event.target.textContent;      
};

for (const nums of $num) {
  nums.addEventListener('click', onClickNumber);
}




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
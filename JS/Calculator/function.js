// 1)
const onClickNumber = (number) => {
  if (operator) {
    numTwo += number;
  } else {
    numOne += number;
  }
  $result.value += number;
};
// 이렇게만 함수를 사용한다면 이벤트 리스너 여러 개가 동시에 호출받아 한번에 다같이 표시된다.
// 이를 해결하기 위해서는 고차함수를 사용하면 된다.
// 고차 함수는 다른 함수를 이용해서 완전히 새로운 함수를 조립하기 때문에 리스터들이 동시에 호출되는 일을 막아준다.
// 아무리 많은 리스너들이 연결 되어있다 하더라도 앞서 말했듯이 완전히 새로운 함수를 조립하기에 한번에 하나씩 호출 가능하다.





// 2)
const onClickNumber = (number) => {
  return () => {
    if (operator) {
      numTwo += number;
    } else {
      numOne += number;
    }
    $result.value += number;
  }
};
// 고차함수 : 함수 자체를 인자로 받아 내부에서 대신 실행한다.
// 보통 이벤트 리스너 여러 개가 코드를 동일하게 가질 때 중복을 피하기 위해 사용한다.
// 함수 내부의 다른 코드는 모두 같은데 0~9라는 숫자만 다르기 때문에 사용 가능하다.
// 여기서 number변수를 사용한 것은 일일이 인자에 #num-0, #num-1 ... 넣어 중복을 피하기 위함이다.





// 3)
const onClickNumber = (number) => () => {
  if (operator) {
    numTwo += number;
  } else {
    numOne += number;
  }
  $result.value += number;
};
// 동일한 의미의 화살표 함수로 변형





// 4)
const onClickNumber = (event) => {
  if (operator) {
    numTwo += event.target.textContent;
  } else {
    numOne += event.target.textContent;
  }
  $result.value += event.target.textContent;
};
// '모든 내부 코드가 같은 경우' 와 '대부분 비슷한데 특정 부분만 다른' 경우를 구분하자.
// 해당 코드를 쓴 이유는 물론 '모든 내부 코드가 같은 경우' 이다. 
// 자세한 차이는 main.js로 돌아가 설명을 찾아 보길 바란다.




// 5)
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
// result창을 초기화 시키는 코드이다.
// 여기서 주의할 점은 if문의 중첩인데, 먼저 공통되는 부분인
//   $result.value += event.target.textContent;을 각 분기점에 넣어준다





// 6)
const onClickNumber = (event) => {
  if (operator) {
    if (!numTwo) {
      $result.value = '';
    }
    numTwo += event.target.textContent;
    $result.value += event.target.textContent;
  } else {
    numOne += event.target.textContent;
    $result.value += event.target.textContent;
  }
};
// 다음으로 어떤 분기점의 절차가 더 짧은지 확인해본다.
// operator가 존재하지 않는 경우에 절차가 더 짧아진다.





// 7)
const onClickNumber = (event) => {
  if (!operator) {
    numOne += event.target.textContent;
    $result.value += event.target.textContent;
  } else {
    if (!numTwo) {
      $result.value = '';
    }
    numTwo += event.target.textContent;
    $result.value += event.target.textContent;
  }
};
// 위 코드에서는 else문으로 감쌀 필요가 없어진다.
// 이하의 부분은 무조건 operator일 때만 실행되기 때문이다.





// 8)
const onClickNumber = (event) => {
  if (!operator) {
    numOne += event.target.textContent;
    $result.value += event.target.textContent;
    return;
  } 
  if (!numTwo) {
    $result.value = '';
  }
  numTwo += event.target.textContent;
  $result.value += event.target.textContent;
};
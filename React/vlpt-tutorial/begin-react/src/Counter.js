import React, {useState} from 'react';

function Counter() {
  const [number, setNumber] = useState(0);

  const Increase = () => {
    setNumber(number + 1);
  }
  // 여기서 setNumber 안에는 '다음 상태'를 넣어주거나 '상태를 업데이트할 함수'를 넣어 줄 수도 있다.
  // 값(상태)을 '어떻게 업데이트 할것인가'는  '함수형 업데이트'로 나타낼 수 있다.
  // '함수형 업데이트'는 '성능 최적화'를 위해 사용된다.
  const Decrease = () => {
    setNumber(prevNumber => prevNumber - 1);
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={Increase}>+1</button>
      <button onClick={Decrease}>-1</button>
    </div>
  )

  
}

export default Counter;


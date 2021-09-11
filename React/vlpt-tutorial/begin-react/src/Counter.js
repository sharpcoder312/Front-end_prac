import React, {useReducer} from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state
      // throw new Error('Unhandled action')
  }
  // useReducer를 사용함으로써 reducer함수를 통해 Counter 컴포넌트의 상태 로직을 컴포넌트 밖으로 빼내서 관리할 수 있다.
}

function Counter() {

  const [number, dispatch] = useReducer(reducer, 0)

  const Increase = () => {
    dispatch({
      type: 'INCREMENT'
    })
  }

  const Decrease = () => {
    dispatch({
      type: 'DECREMENT'
    })
  }

  return (
    <div>
      <h5>07 usestate를 통해 컴포넌트에서 바뀌는 값 관리하기</h5>
      <h1>{number}</h1>
      <button onClick={Increase}>+1</button>
      <button onClick={Decrease}>-1</button>
    </div>
  )

  
}

export default Counter;


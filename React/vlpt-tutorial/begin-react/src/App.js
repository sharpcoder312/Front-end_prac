import React from 'react';  
import Counter from './Counter';
import InputSample from './inputSample';
// 사실 import는 함수에 불러올 component를 입력하면서 자동 완성 기능을 통해 불러올 수도 있다.

function App() {
    return (
      <>
      <Counter />
      <InputSample />
      </>
    )
}

export default App;
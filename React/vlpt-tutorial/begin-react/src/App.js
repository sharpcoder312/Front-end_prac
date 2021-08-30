import React from 'react';  
import Hello from './Hello';
import Wrapper from './Wrapper'
// 사실 import는 함수에 불러올 component를 입력하면서 자동 완성 기능을 통해 불러올 수도 있다.

function App() {
    return (
        <Wrapper>
    	  <Hello name="리액트" color="red" isSpecial={true} />
          <Hello color="pink" />
        </Wrapper>
    )
}

export default App;
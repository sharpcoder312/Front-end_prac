import React from 'react';    

function Hello({ color, name, isSpecial }) {    
    return <div style={{color}}>
      {isSpecial ? <b>*</b> : null} {/* 조건부 연산자 (보통 true와 false의 내용이 다를때 사용*/}
      {/* {isSpecial && <b>*</b>}  and연산자 */}
            안녕하세요 {name}
          </div>;    
}	

Hello.defaultProps = {			// props 기본값 설정
    name: '이름없음'
};

export default Hello;  
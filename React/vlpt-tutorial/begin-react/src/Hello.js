import React from 'react';    

function Hello({ color, name }) {    
    return <div style={{color}}>안녕하세요 {name}</div>;    
}	

Hello.defaultProps = {			// props 기본값 설정
    name: '이름없음'
};

export default Hello;  
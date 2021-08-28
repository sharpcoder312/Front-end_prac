import React from 'react';    // 'react를 불러와서 사용하겠다.'는 의미

function Hello() {      // component 이름은 대문자로 시작하자 // componet는 일종의 UI조각을 의미한다.
  return <div>곤니찌와</div>;    // XML(HTML형태) 문법으로 값을 return 해주어야한다. 마치 HTML 같지만 JXS이다.
}

export default Hello;     // 'Hello라는 component를 만들어서 내보내주겠다.'는 의미
// 이렇게 component를 만들면 불러와서 사용할 수가 있다. App.js에 상대 경로로 추가해준다.
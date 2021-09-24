import React, { useState } from 'react';
import './App.css';

function App() {
  const [theme, setTheme] = useState(['남자 지갑 추천', '가로수길 맛집 추천', '개발자의 일상']);
  const [date, setDate] = useState(['3월 11일 발행', '3월 12일 발행', '3월 13일 발행']);
  const [like, setLike] = useState(0);
  const [modal, setButton] = useState(false);

  const clickGender = () => {
    // setTheme(['여자 지갑 추천', '가로수길 맛집 추천', '개발자의 일상']); 이렇게 하드 코딩하는 것은 개발자스럽지 않다.
    // 또한, setTheme(theme[0] = '여자 지갑 추천') 이렇게 쓸 수 없는 이유는 setTheme()이 useState() 내의 배열 전체를 바꾸기 때문이다.
    const newGender = [...theme];
    newGender[0] = '여자 지갑 추천';
    setTheme(newGender);
  }

  const clickList = () => {
    const newList = [...theme];
    newList.reverse() // reverse()는 원본 배열 자체를 변경 시키기 때문에 const newReverse = newList.reverse()와 같이 따로 변수에 저장을 하지않고 newList만 가져와도 배열이 변환되어 있는 것을 볼 수 있다.
    setTheme(newList);
  }

  const clickLike = () => {
    setLike(like+1)
  }

  const clickButton = () => {
    setButton(!modal)
    // if (modal === false) {
    //   setButton(true)
    // } else {
    //   setButton(false)
    // }
  }



  return (
    <div className="App">
      <div className="black-nav">
          <div>개발 Blog</div>
      </div>
      <button onClick={ clickGender }>성별 바꾸기</button>
      <button onClick={ clickList }>목록 순서 바꾸기</button>
      <div className="list" >
        <h3> { theme[0] } <span onClick={ clickLike } className="likeButton">👍</span> { like } </h3>
        <p>{ date[0] }</p>
        <hr />
      </div>
      <div className = "list" >
        <h3> { theme[1] } </h3>
        <p>{ date[1] }</p>
        <hr />
      </div>
      <div className = "list" >
        <h3> { theme[2] } </h3>
        <p>{ date[2] }</p>
        <hr />
      </div>    {/* 코드를 간단히 하기 위해서 list.js 만들어서 <List />로 넣어줘도 괜찮을 것 같다. */}
      <button onClick={ clickButton }>버튼</button>
      { 
        modal === true 
        ? <Modal />
        : null // JSX에서 null은 텅빈 HTML 태그를 뜻함.
      }

    </div>
  );
}

function Modal(){
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;

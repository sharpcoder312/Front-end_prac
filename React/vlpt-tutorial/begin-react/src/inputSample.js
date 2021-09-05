import React, {useState} from 'react';

function InputSample() {
  const [content, setContent] = useState('');

  const changeContent = (e) => {
    setContent(e.target.value)
  }

  const resetContent = (e) => {
    // setContent(e.target.value = ''); 이렇게 쓸 필요 굳이 없음.
    setContent('');
  }

  return (
    <div>
      <h5>08 input 상태 관리하기</h5>
      <input onChange={changeContent} value={content} />  {/* input의 초기값(value)로 content를 가져오는 것이 중요하다. */}
      <button onClick={resetContent}>초기화</button>
      <div>
        <b>값: </b>
        {content}
      </div>
    </div>
  )
}

export default InputSample
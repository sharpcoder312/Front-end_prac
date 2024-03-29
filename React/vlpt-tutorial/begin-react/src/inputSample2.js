import React, {useState, useRef} from 'react';
// useState에서 기존에는 단지 문자열 값을 관리했지만 '문자', '숫자' 뿐만아니라 여러 개의 문자열을 저장하고 있는 '배열'이나 '객체'도 저장 가능하다.

function InputSample2() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });
  // 여러 개의 문자열을 가지는 객체 형태의 상태 관리
  const { name, nickname } = inputs;
  // 객체 비구조 할당
  const nameInput = useRef();



  const changeContent = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    const { name, value } = e.target; // e.target을 두번이나 쓰기싫다면 비구조화 할당으로 더 쉽게 처리할 수 있다.

    // const nextInputs = {
    //   ...inputs,
    //   [name]: value
    // };

    // setInputs(nextInputs); 이하 동일

    setInputs({
      ...inputs, // 기존의 state(상태) 복사
      [name]: value
    })
  }

  const resetContent = (e) => {
    setInputs({
      // ...inputs,
      name: '',
      nickname: ''
    })
    nameInput.current.focus(); // current는 해당 특정 DOM을 가리키는 역할을 한다.
  }

  return (
    <div>
      <h5>09 여러 개의 input 상태 관리하기, 10 useRef로 특정 DOM 선택하기</h5> {/*  input에 name값을 설정하고 event가 발생했을 때 이 값을 참조 */}
      <input name="name" placeholder="이름" onChange={changeContent} value={name} ref={nameInput}/>
      <input name="nickname" placeholder="닉네임" onChange={changeContent} value={nickname} />
      <button onClick={resetContent}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  )
}

export default InputSample2
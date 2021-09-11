import React from 'react';

function CreateUser({ username, email, onChange, onCreate }) {
  return (
    <div>
      <h5>13 배열에 항목 추가하기</h5>
      <input
        name="username" 
        placeholder="계정"
        onChange={onChange}
        value={username}
      />
      <input
        name="email" 
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />

      <button onClick={onCreate}>등록</button>
    </div>
  )
}

export default React.memo(CreateUser);
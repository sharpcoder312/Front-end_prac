import React, { useRef, useState } from 'react';  
import Counter from './Counter';
import CreateUser from './CreateUser';
import InputSample from './inputSample';
import InputSample2 from './inputSample2';
import UserList from './UserList';

// 사실 import는 함수에 불러올 component를 입력하면서 자동 완성 기능을 통해 불러올 수도 있다.

function App() {
    const [inputs, setInputs] = useState({
      username: '',
      email: '',
    })
    const { username, email } = inputs
    const onChange = e => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value
      })
    }

    const users = [
      {
        id: 1,
        username: 'seok',
        email: 'seok.@example.com'
      },
      {
        id: 2,
        username: 'seokk',
        email: 'seokk.@example.com'
      },
      {
        id: 3,
        username: 'seokkk',
        email: 'seokkk.@example.com'
      },
    ];

    const nextId = useRef(4); // 여기서 nextd를 useRef로 관리해준 이유는 4라는 값이 바뀐다고해서 굳이 component가 리렌더링 될 필요가 없기 때문이다.

    const onCreate = () => {
      setInputs({
        username: '',
        email: ''
      })
      console.log(nextId.current); // 4
      nextId.current += 1;
    }

    return (
      <>
      <Counter />
      <InputSample />
      <InputSample2 />
      <CreateUser
        username={username} 
        email={email} 
        onChange={onChange} 
        onCreate={onCreate}
      />
      <UserList users={users}/>
      </>
    )
}

export default App;
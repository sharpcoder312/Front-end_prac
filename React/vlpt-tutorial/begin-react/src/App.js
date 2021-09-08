import React, { useRef, useState, useMemo } from 'react';  
import Counter from './Counter';
import CreateUser from './CreateUser';
import InputSample from './inputSample';
import InputSample2 from './inputSample2';
import UserList from './UserList';
// 사실 import는 함수에 불러올 component를 입력하면서 자동 완성 기능을 통해 불러올 수도 있다.

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

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

    const [users, setUsers] = useState([ // 배열에 항목 추가(사용자 인터렉션에 따른 동적인 상태변화로 취급)를 위해 component의 state로 관리해준다.
      {
        id: 1,
        username: 'seok',
        email: 'seok.@example.com',
        active: false
      },
      {
        id: 2,
        username: 'seokk',
        email: 'seokk.@example.com',
        active: false
      },
      {
        id: 3,
        username: 'seokkk',
        email: 'seokkk.@example.com',
        active: false
      },
    ]);

    const nextId = useRef(4); // 여기서 nextd를 useRef로 관리해준 이유는 4라는 값이 바뀐다고해서 굳이 component가 리렌더링 될 필요가 없기 때문이다.

    const onCreate = () => {
      const user = {
        id: nextId.current,
        username,
        email,
        // 사실 여기서도 username과 email을 ...inputs로 대체할 수 있다.
      }
      setUsers([...users, user]); // 방법1 ...spread문법 사용
      // setUsers(users.concat(user)); // 방법2 concat함수 사용
      setInputs({ // 버튼 클릭 후 input에 있는 값 초기화
        username: '',
        email: ''
      })
      console.log(nextId.current); // 4
      nextId.current += 1;
    }

    const onRemove = id => {
      setUsers(users.filter(user => user.id !== id)); // 조건 만족하면 true로서 선택하지않은 id를 가진 원소들만 새 배열에 들어간다.
    }

    const onToggle = id => {
      setUsers(users.map(
        user => user.id === id
        ? { ...user, active: !user.active }
        : user
      ))
    }

    const count = useMemo(() => countActiveUsers(users), [users])

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
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수 : {count}</div>
      </>
    )
}

export default App;
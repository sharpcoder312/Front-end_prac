import React, { useRef, useState, useMemo, useCallback } from 'react';  
import Counter from './Counter';
import CreateUser from './CreateUser';
import InputSample from './inputSample';
import InputSample2 from './inputSample2';
import UserList from './UserList';
import './App.scss';
import Button from './components/Button';
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
    const onChange = useCallback(e => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value
      })
    }, [inputs]); // onChange내에서 상태가 바뀔 시 의존하고 있는 값을 찾아보면 inputs라는 것을 알 수 있다.
                  // 위와 같은 논리로 deps에 inputs를 넣어준다. 
                  // 이렇게 되면 onChange함수는 inputs가 바뀔 때만 함수가 선언되며 그렇지 않다면 기존의 함수를 재사용하게 된다.

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

    const onCreate = useCallback(() => {
      const user = {
        id: nextId.current,
        username,
        email,
        // 사실 여기서도 username과 email을 ...inputs로 대체할 수 있다.
      }
      setUsers(users => users.concat(user)); // 방법1 ...spread문법 사용
      // setUsers(users.concat(user)); // 방법2 concat함수 사용
      setInputs({ // 버튼 클릭 후 input에 있는 값 초기화
        username: '',
        email: ''
      })
      nextId.current += 1;
    }, [username, email]) // username과 email 같은 경우에도 결국에 input에서 관리하는 상태이기 때문에 deps 배열에 넣어준다.

    const onRemove = useCallback(id => {
      setUsers(users =>users.filter(user => user.id !== id)); // 조건 만족하면 true로서 선택하지않은 id를 가진 원소들만 새 배열에 들어간다.
    }, [])

    const onToggle = useCallback(id => {
      setUsers(users => users.map(
        user => user.id === id
        ? { ...user, active: !user.active }
        : user
      ))
      console.log('gd');
    }, [])

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
      <div className="App">
      <div className="buttons">
        <Button size="large">BUTTON</Button>
        <Button>BUTTON</Button>
        <Button size="small">BUTTON</Button>
      </div>
      <div className="buttons">
        <Button size="large" color="gray">
          BUTTON
        </Button>
        <Button color="gray">BUTTON</Button>
        <Button size="small" color="gray">
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" color="pink">
          BUTTON
        </Button>
        <Button color="pink">BUTTON</Button>
        <Button size="small" color="pink">
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" color="blue" outline>
          BUTTON
        </Button>
        <Button color="gray" outline>
          BUTTON
        </Button>
        <Button size="small" color="pink" outline>
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" fullWidth>
          BUTTON
        </Button>
        <Button size="large" color="gray" fullWidth>
          BUTTON
        </Button>
        <Button size="large" color="pink" fullWidth>
          BUTTON
        </Button>
      </div>
    </div>
      </>
    )
}

export default App;
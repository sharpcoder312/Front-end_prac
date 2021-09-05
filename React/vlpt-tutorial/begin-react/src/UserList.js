import React from 'react';

function User({user}) {
  return (
      <div>
        <b>{user.username}</b><span>({user.email})</span>
      </div>
  )
}

function UserList() {
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
    {
      id: 4,
      username: 'seokkkk',
      email: 'seokkkk.@example.com'
    },
  ];

  // return ( // ( 원시적 방법 )
  //   <div>
  //     <div>
  //       <b>{users[0].username}</b><span>({users[0].email})</span>
  //     </div>
  //     <div>
  //       <b>{users[1].username}</b><span>({users[1].email})</span>
  //     </div>
  //     <div>
  //       <b>{users[2].username}</b><span>({users[2].email})</span>
  //     </div> 
  //     {/* 배열 index마다 일일이 추가해준 것이 맘에 들지않는다. */}
  //   </div>
  // )

  return ( // 배열의 수가 고정적일때
    <div>
      <User user={users[0]}/>
      <User user={users[1]}/>
      <User user={users[2]}/>
    </div>
  )

  // return ( // 배열의 수가 고정적이지 않고 내용이 변경될 가능성이 있을 때 - map함수 사용. 객체 배열 형태로 있는 배열을 컴포넌트 element형태의 배열로 변환
  //   <div>
  //     <h5>11 배열의 렌더링</h5>
  //     {
  //       users.map(
  //         user => (<User user={user} key={user.id} />) // 각 child(현재는 User)는 key props이 있어야함. key props은 각 원소들 마다 고유값을 줌으로써 리렌더링 성능을 최적화해줌.
  //         )
  //       // users.map (
  //       //   (user, index) => (<User user={user} key={index} />) // key로 사용할 고유값이 없을 때는 map 콜백함수의 두번째 parm인 index값을 사용하자. 하지만 이렇게한다고해서 성능이 좋아지는 것은 아니니 index를 넣어주는 것을 될수있으면 피하도록하자.
  //       // ) // key가 없으면 각 배열의 원소가 정확히 어떤 것을 렌더링 해야하는지 잘 모른다. 단순히 자신의 index값만 기억할 뿐이다.
  //     }
  //   </div>
  // )
}

export default UserList;
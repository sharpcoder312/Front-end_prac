import React from 'react';
import { Table } from 'react-bootstrap'
import { connect, useDispatch, useSelector } from 'react-redux';

function Cart(props) {
  let state = useSelector((state) => state);
  // console.log(state.reducer)
  // console.log(state.reducer2)
  let dispatch = useDispatch();

  return (
    <div>
      <Table responsive>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경</th>
        </tr>
        {
          state.reducer.map((a, i) => {
            return (
              <tr key={i}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.quan}</td>
                <td><button onClick={()=>{dispatch({ type: '수량증가'})}}>+</button></td>
                <td><button onClick={()=>{dispatch({ type: '수량감소'})}}>-</button></td>
              </tr>
            )
          })
        }
      </Table>
      { state.reducer2 === true
      ? (
        <div className="my-alert">
        <p>지금 구매하시면 신규 할인 20%</p>
        <button onClick={()=>{dispatch({ type: '끄기' })}}>닫기</button>
      </div>
      )
      : null
      }
    </div>
  )
}

// function Store(state){ // redux store 데이터를 가져와서 props로 만들어주는 함수
//   console.log(state)
//   return {
//     // 상품명 : state[0].name, // state의 name이라는 데이터를 상품명이라는 props로 바꿔라
//     // state: state. // state의 모든 데이터를 state라는 이름의 props로 바꿔라.
//     state: state.reducer, // reducer가 다수이기에 state.로 특정 reducer를 명시해준다. 
//     alert: state.reducer2
//   }
// } // 사실 위 부분은 useSelector로 대체 가능하다. 모두 state 데이터를 가져온다(꺼낸다)는 점에서 동일한 기능을 가지고있다.


// export default connect(Store)(Cart);
export default Cart;
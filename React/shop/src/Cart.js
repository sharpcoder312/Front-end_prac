import React from 'react';
import { Table } from 'react-bootstrap'
import { connect } from 'react-redux';

function Cart(props) {
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
          props.state.map((a, i) => {
            return (
              <tr key={i}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.quan}</td>
                <td><button onClick={()=>{props.dispatch({ type: '수량증가'})}}>+</button></td>
                <td><button onClick={()=>{props.dispatch({ type: '수량감소'})}}>-</button></td>
              </tr>
            )
          })
        }
      </Table>
      { props.alert === true
      ? (
        <div className="my-alert">
        <p>지금 구매하시면 신규 할인 20%</p>
        <button onClick={()=>{props.dispatch({ type: '끄기' })}}>닫기</button>
      </div>
      )
      : null
      }
    </div>
  )
}

function Store(state){ // redux store 데이터를 가져와서 props로 만들어주는 함수
  console.log(state)
  return {
    // 상품명 : state[0].name, // state의 name이라는 데이터를 상품명이라는 props로 바꿔라
    // state: state. // state의 모든 데이터를 state라는 이름의 props로 바꿔라.
    state: state.reducer, // reducer가 다수이기에 state.로 특정 reducer를 명시해준다. 
    alert: state.reducer2
  }
}


export default connect(Store)(Cart);
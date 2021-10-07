import React from 'react';
import {Table} from 'react-bootstrap'
import { connect } from 'react-redux';

function Cart({state}) {
  return (
    <div>
      <Table responsive>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경</th>
        </tr>
        <tr>
          <td>1</td>
          <td>{state[0].name}</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
      </Table>
    </div>
  )
}

function Store(state){ // redux store 데이터를 가져와서 props로 만들어주는 함수
  return {
    // 상품명 : state[0].name, // state의 name이라는 데이터를 상품명이라는 props로 바꿔라
    state: state // state의 모든 데이터를 state라는 이름의 props로 바꿔라.
  }
}


export default connect(Store)(Cart);
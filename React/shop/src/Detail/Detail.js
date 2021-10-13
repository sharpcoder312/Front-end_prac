import React, { useState, useEffect, useContext } from 'react';
import { Nav } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss'
import {thingContext} from '../App.js';

import {CSSTransition} from "react-transition-group";

import { connect, useDispatch } from 'react-redux';

function Detail({shoes}) {
  let dispatch = useDispatch();

  let [ alert, setAlert ] = useState(true);
  let thing = useContext(thingContext);

  let [tab, setTab] = useState(0);
  let [tabSwtch, setTabSwitch] = useState(false);

  useEffect(() => {
    // axios.get => useEffect에서 axios쓰는 법. 물론 Detail 컴포넌트 처음 로드시에만 ajax로 데이터를 가져오려면 []를 꼭 써줘야한다.
    let timer = setTimeout(() => {
      setAlert(false)
    }, 2000)
    return () => { clearTimeout(timer) }
  },[])

  let { id } = useParams(); // 결과로 {}가 남음. { 사용자가 입력한 URL 파라미터들 }
  // id는 ':작명'에서 작명부분에 해당함
  let findShoe = shoes.find(function(shoe){
    
    return shoe.id == id
  });
  let history = useHistory();

  return (
    <div className="container">
      { 
        alert === true
        &&  <div className="my-alert">
              <p>재고가 얼마 남지 않았습니다.</p>
            </div>      
      }

      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{findShoe.title}</h4>
          <p>{findShoe.content}</p>
          <p>{findShoe.price}원</p>
          <p>재고 : {thing[0]}</p>
          {/* findShoe대신에 shoes[id]를 넣을 수도 있겠지만 이렇게되면 고유 id인 영구번호가 아닌 index에 의존하므로 item을 정렬할 시에 index와 고유 id가 다르게되어 문제가 생긴다. */}
          <button className="btn btn-danger" onClick={()=>{
            dispatch({type : '항목추가', payload : {id:findShoe.id, name:findShoe.title, quan:1}});
            history.push('/cart'); // redux도 새로고침하면 초기화되는 데, router를 이용하여 페이지 이동시의 새로고침을 막음. 
            }}>주문하기</button> 
          <button className="btn btn-dark" onClick={()=>{history.goBack()}}>뒤로가기</button> 
          {/* <button className="btn btn-dark" onClick={()=>{history.push('/')}}>뒤로가기</button>  */}
        </div>
      </div>

      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={()=>{setTab(0); setTabSwitch(false)}}>Option 0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-1" onClick={()=>{setTab(1); setTabSwitch(false)}}>Option 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-2" onClick={()=>{setTab(2); setTabSwitch(false)}}>Option 2</Nav.Link>
        </Nav.Item>
      </Nav>

      <CSSTransition in={tabSwtch} classNames="wow" timeout={500}>
        {/* in은 애니메이션을 켜는 스위치라고 생각하면 된다. */}
        <TabContent tab={tab} setTabSwitch={setTabSwitch}/>
        {/* 삼항연산자는 경우의 수가 3개 이상일 때는 유용한 if문이 아니다. 그러므로 컴포넌트 함수를 만들어 그 안에 if문을 넣는방법을 사용한다.*/}
      </CSSTransition>

    </div> 
  )

  // let { id } = useParams(); 
  // let history = useHistory();

  // return (
  //   <div className="container">
  //     <div className="row">
  //       <div className="col-md-6">
  //         <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
  //       </div>
  //       <div className="col-md-6 mt-4">
  //         <h4 className="pt-5">{shoes[id].title}</h4>
  //         <p>{shoes[id].content}</p>
  //         <p>{shoes[id].price}원</p>
  //         <button className="btn btn-danger">주문하기</button> 
  //         <button className="btn btn-dark" onClick={()=>{history.goBack()}}>뒤로가기</button> 
  //       </div>
  //     </div>
  //   </div> 
  
  // )
}

function TabContent({tab, setTabSwitch}) {

  useEffect(()=>{
    setTabSwitch(true);
  })

  if (tab === 0) {
  return <div>0번째 내용입니다.</div>
  } else if (tab === 1) {
    return <div>1번째 내용입니다.</div>
  } else if (tab === 2) {
    return <div>2번째 내용입니다.</div>
  }
    
}

function Store(state){
  console.log(state);
  return {
    state: state.reducer,
    alert: state.reducer2
  }
}


export default connect(Store)(Detail);
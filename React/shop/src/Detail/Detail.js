import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss'

function Detail({shoes}) {

  let [ alert, setAlert ] = useState(true);
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
          {/* findShoe대신에 shoes[id]를 넣을 수도 있겠지만 이렇게되면 고유 id인 영구번호가 아닌 index에 의존하므로 item을 정렬할 시에 index와 고유 id가 다르게되어 문제가 생긴다. */}
          <button className="btn btn-danger">주문하기</button> 
          <button className="btn btn-dark" onClick={()=>{history.goBack()}}>뒤로가기</button> 
          {/* <button className="btn btn-dark" onClick={()=>{history.push('/')}}>뒤로가기</button>  */}
        </div>
      </div>
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

export default Detail;
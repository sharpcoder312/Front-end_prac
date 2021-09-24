import React, { useState } from 'react';

function List() {

  let [theme, themeChange] = useState(['남자 지갑 추천', '남자 향수 추천', '남자 신발 추천']);

  return <>
    <div className="list" >
      <h3> { theme[0] } </h3>
      <p>3월 11일 발행</p>
      <hr />
    </div>
    <div className = "list" >
      <h3> { theme[1] } </h3>
      <p>3월 11일 발행</p>
      <hr />
    </div>
    <div className = "list" >
      <h3> { theme[2] } </h3>
      <p>3월 11일 발행</p>
    <hr />
    </div>
    </>
}

export default List; 
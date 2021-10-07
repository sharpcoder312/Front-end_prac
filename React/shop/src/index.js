import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux';

let defaultState = [ // 초기값. 즉, 변경 x값
  { id : 0, name : 'niceshoe', quan : 2},
  { id : 1, name : 'prettyshoe', quan : 1}
]

function reducer(state = defaultState, action) {
  if (action.type === '수량증가') { // 데이터 수정 조건. '수량증가'라는 데이터 수정방법을 정의한 것이다.
    let copy = [...state];
    copy[0].quan++;
    return copy
  } else if (action.type === '수량감소') {
    let copy2 = [...state];
    copy2[0].quan--;
    return copy2;
  } else {
    return state
  }
} // state = defaultState에서 =로 state에 할당해준 것은 기본 값을 지정해주는 default parameter ES6 신 문법이다. 여기서는 state의 기본값을 설정해준 것이다.
  // reducer는 그것이 수정되든 수정되지않든 항상 특정 state를 반환해야한다. 

let store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

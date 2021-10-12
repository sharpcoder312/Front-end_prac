import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux';

let defaultState = [ // 초기값. 즉, 변경 x값
  { id : 0, name : 'niceshoe', quan : 2},
  { id : 1, name : 'prettyshoe', quan : 1}
]

function reducer(state = defaultState, action) {
  if (action.type === '항목추가') {
    let copy = [...state];
    copy.push(action.payload);
    return copy;
  } else if (action.type === '수량증가') { // 데이터 수정 조건. '수량증가'라는 데이터 수정방법을 정의한 것이다.
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

function reducer2(state = true, action) {
  if (action.type === '끄기') {
    state = false;
    return state;
    // Array, Object state가 아니기에 굳이 복사할 필요가 없다.
  } else {
    return state
  }
} // 사실 해당 기능은 cart에서만 쓰기 때문에 굳이 index의 redux에 저장할 필요가 없다.
// 즉, redux store에 온갖 데이터를 저장하지 말고 특정 소수의 component에서만 쓰는 것들은 useState()에 저장해서 사용하자.

let store = createStore(combineReducers({reducer, reducer2}));
// reducer함수가 다수라면 combineReducer를 이용하여 createStore인자에 넣어 합쳐줘야한다.
// 유의해야 할 점은 reducer 다수가 합쳐지면 컴포넌트에서 data를 뽑아쓸 때도 유의해야한다.

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

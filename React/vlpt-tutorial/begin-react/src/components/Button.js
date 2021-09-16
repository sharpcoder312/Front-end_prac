import React from 'react';
import classNames from 'classnames';
import './Button.scss';

function Button({ children, size, color, outline, fullWidth, className, ...rest}) {
  return (
    <button
      className={classNames('Button', size, color, { outline, fullWidth }, className)} // { outline, fullWidth }처럼 props 로 받아온 것을 객체 안에 집어 넣어주면 true일때만 CSS클래스가 적용된다.
      {...rest} // 또한, className을 넣어주면 App.js에서 className을 추가할 수도 있다.
      // ...rest를 사용해서 지정한 props를 제외한 값들을 rest라는 객체에 모아준다 → parameter에 {...rest}를 넣어주고, 쓰고싶은 props들 쓰면된다.
    > 
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: 'medium',
  color: 'blue'
};

export default Button;

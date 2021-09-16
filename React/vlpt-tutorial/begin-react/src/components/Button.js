import React from 'react';
import classNames from 'classnames';
import './Button.scss';

function Button({ children, size, color, outline, fullWidth }) {
  return (
    <button
      className={classNames('Button', size, color, { outline, fullWidth })}
    > 
    {/* { outline, fullWidth }처럼 props 로 받아와서 객체 안에 집어 넣어주면 true일때만 CSS클래스가 적용된다. */}
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: 'medium',
  color: 'blue'
};

export default Button;

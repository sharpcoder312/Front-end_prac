import React from 'react';
import styled, { css } from 'styled-components' // 조건부로 스타일 지정하기위해 { css }를 import한다.
import { MdAdd } from 'react-icons/md'

const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);

  font-size: 60px;
  color: white;
  border-radius: 50%;

  border: none;
  outline: none;
`;

function TodoCreate() {
  return (
    <CircleButton>
      <MdAdd />
    </CircleButton>

  );
}

export default TodoCreate;
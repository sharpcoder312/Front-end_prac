// @flow
import * as React from 'react';
import styled from 'styled-components'
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`
function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem text="밥먹기" done={false} />
      <TodoItem text="샤워하기" done={true} />
      <TodoItem text="회의하기" done={false} />
      <TodoItem text="낮잠자기" done={true} />
    </TodoListBlock>
  )
}


export default TodoList;
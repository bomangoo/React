import React, { Component } from 'react';
import TodoTemplate from './component/TodoTemplate';
import TodoInsert from './component/TodoInsert';
import TodoList from './component/TodoList';

class App extends Component {
  id = 4
  state = {
    index: '',
    todos: [
      {
        id: 0,
        text: '리액트 깨부수기',
        checked: false
      },
      {
        id: 1,
        text: 'ecma6도 틈틈히',
        checked: false
      },
      {
        id: 2,
        text: '운동도 열심히',
        checked: true
      },
      {
        id: 3,
        text: '포트폴리오 만들기',
        checked: false
      }
    ]
  }


  render() {
    const { todos } = this.state;
    return (
      <TodoTemplate >
        <TodoInsert />
        <TodoList todos={todos} />
      </TodoTemplate>
    )
  }
}

export default App;

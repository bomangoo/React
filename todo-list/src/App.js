import React, { Component } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

class App extends Component {
  id = 4;
  state = {
    toDoList: [
      {
        id: 1,
        text: '리액트 공부',
      },
      {
        id: 2,
        text: '인강듣기',
      },
      {
        id: 3,
        text: '포트폴리오 제작',
      },
      {
        id: 4,
        text: '면접준비',
      },
    ],
    search: '',
  };

  todoCreate = () => { };
  todoUpdate = (id, text) => { };
  todoRemove = (id) => { };
  render() {
    const { toDoList } = this.state;
    return (
      <TodoTemplate>
        <TodoInsert onCreate={this.todoCreate} />
        <TodoList data={toDoList} onUpdate={todoUpdate} onRemove={todoRemove} />
      </TodoTemplate>
    );
  }
}

export default App;

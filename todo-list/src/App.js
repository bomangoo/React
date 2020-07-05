import React, { Component } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

class App extends Component {
  id = 5;
  state = {
    todos: [
      {
        id: 1,
        todo: '리액트 공부',
      },
      {
        id: 2,
        todo: '인강듣기',
      },
      {
        id: 3,
        todo: '포트폴리오 제작',
      },
      {
        id: 4,
        todo: '면접준비',
      },
    ],
    search: '',
  };

  todoCreate = (data) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.concat({
        id: this.id++,
        ...data,
      })
    })
  };
  todoUpdate = (id, data) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map((todos) => {
        console.log(todos);
        if (todos.id === id) {
          console.log(todos.id + '/' + id);
          return {
            id,
            ...data,
          };
        }
        return todos;
      })
    })
  };
  todoRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((data) => data.id !== id),
    })
  };

  render() {
    const { todos } = this.state;
    return (
      <TodoTemplate>
        <TodoInsert onCreate={this.todoCreate} />
        <TodoList data={todos} onUpdate={this.todoUpdate} onRemove={this.todoRemove} />
      </TodoTemplate>
    );
  }
}

export default App;

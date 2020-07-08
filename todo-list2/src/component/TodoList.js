import React, { Component } from 'react';
import TodoItem from './component/TodoItem';

class TodoLists extends Component {
    render() {
        return (
            <div>
                <TodoItem text="안녕" />
            </div>
        )
    }
}

export default TodoLists;
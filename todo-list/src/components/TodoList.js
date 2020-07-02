import React, { Component } from 'react';
import TodoItem from './TodoItem';
class TodoList extends Component {
    render() {
        const { data, onUpdate, onRemove } = this.props;

        return (
            <TodoItem data={data} onUpdate={onUpdate} onRemove={onRemove} />
        )
    }
}

export default TodoList;
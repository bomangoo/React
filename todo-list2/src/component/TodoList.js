import React, { Component } from 'react';

class TodoList extends Component {
    render() {
        const list = todos.map(
            (todo) => (
                <TodoItem
                    {...todo}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    ket={todo.id}
                />
            )
        )
        return (
            <div>{list}</div>
        )
    }
}

export default TodoList;
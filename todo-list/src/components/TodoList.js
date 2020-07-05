import React, { Component } from 'react';
import TodoItem from './TodoItem';
class TodoList extends Component {
    render() {
        const { data, onUpdate, onRemove } = this.props;

        return (
            <div>
                {data.map((data) => (
                    <TodoItem data={data}
                        onUpdate={onUpdate}
                        onRemove={onRemove}
                    />
                ))}
            </div>
        );
    }
}

export default TodoList;
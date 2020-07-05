import React, { Component } from 'react';

class TodoItem extends Component {
    state = {
        toggle: false,
        todo: '',
    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    handleToggleChange = () => {
        const { toggle, todo } = this.state;
        const { data, onUpdate } = this.props;
        if (!toggle) {
            this.setState({
                todo: data.todo,
                toggle: true,
            });
        } else {
            onUpdate(data.id, { todo: todo });
            this.setState({
                toggle: false,
            })
        }
    }
    todoRemove = (id) => {
        const { todos } = this.state;
        this.setState({
            todos: todos.filter((data) => data.id !== id),
        })
    };

    render() {
        const { data } = this.props;
        const { toggle, todo } = this.state;
        return (
            <div>
                {toggle ? (<input onChange={this.handleChange} value={todo} name="todo" />) : (
                    <span>{data.todo}</span>
                )}
                <button onClick={this.handleToggleChange}>{toggle ? '적용' : '수정'}</button>
                <button onClick={this.todoRemove}>삭제</button>
            </div>
        )
    }
}

export default TodoItem;
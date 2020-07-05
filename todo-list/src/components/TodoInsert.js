import React, { Component } from 'react';

class TodoInsert extends Component {
    state = {
        todo: '',
    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            todo: '',
        });
    };
    render() {
        const { todo } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <input value={todo} name="todo" placeholder="...입력" onChange={this.handleChange} />
                <button type="submit">추가</button>
            </form>
        );
    }
}

export default TodoInsert;
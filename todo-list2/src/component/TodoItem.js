import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        const { text } = this.props;
        return (
            <div >
                <div> {text} </div >
            </div>
        )
    }
}

export default TodoItem;
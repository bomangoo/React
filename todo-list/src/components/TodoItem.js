import React from 'react';

class TodoItem extends Component {
    render() {
        const { data, onUpdate, onRemove } = this.props;
        return (
            <div>{data.text}</div>
        )
    }
}

export default TodoItem;
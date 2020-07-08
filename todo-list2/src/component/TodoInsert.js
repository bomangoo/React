import React from 'react';

const TodoInsert = ({ value, onChange, onCreate, onKeyPress }) => {
    return (
        <div>
            <input value={value} onChange={onChange} onKeyPress={onKeyPress} />
            <button onClick={onCreate}>추가</button>
        </div>
    )
}

export default TodoInsert;
import React from 'react';

const globalstyle = {
    width: '500px',
    height: '700px',
    margin: '0 auto',
    border: '1px solid #ddd',
    borderRadius: '5px',
}

const titlestyle = {
    background: 'skyblue',
    margin: '0',
    padding: '15px 0',
    color: '#fff',
    textAlign: 'center'
}

const TodoTemplate = ({ form, children }) => {
    return (
        <div style={globalstyle}>
            <h1 style={titlestyle}>오늘 할 일</h1>
            <section>{form}</section>
            <section>{children}</section>
        </div>
    )
}

export default TodoTemplate;
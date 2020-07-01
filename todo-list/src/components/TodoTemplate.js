import React from 'react';

const globalstyle = {
    width: "500px",
    height: "700px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    margin: "10px auto",
}

function TodoTemplate({ children }) {
    return <div style={globalstyle}>{children}</div>;
}

export default TodoTemplate;
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete, MdBuild } from 'react-icons/md';
import { useTodoDispatch } from '../TodoContext';

const Edit = styled.div`
    display: flex;
    margin-right: 10px;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    &:hover{
        color: #6d5dff;
    }
    display: none;
`;

const Remove = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    &:hover{
        color: #ff6b6b;
    }
    display: none;
`;

const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 0;
    &:hover{
        ${Remove},${Edit}{
            display: initial;
        }
    }
`;

const CheckCircle = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    border: 1px solid #ced4da;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    ${props =>
        props.done &&
        css`
            border: 1px solid #38d9a9;
            color: #38d9a9;
        `
    }
`;

const Text = styled.div`
    flex: 1;
    font-size: 21px;
    color: #495047;
    ${props =>
        props.done &&
        css`
            color: #ced4da;
        `
    }
`;
const Editinput = styled.input`
    display: block;
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    width: 100%;
    outline: none;
    font-size: 18px;
    box-sizing: border-box;
`

function TodoItem({ id, done, text }) {
    const [open, setOpen] = useState(false);
    const onEdit = () => setOpen(!open);

    const dispatch = useTodoDispatch();
    const onToggle = () => dispatch({ type: 'TOGGLE', id });
    const onRemove = () => dispatch({ type: 'REMOVE', id });
    return (
        <TodoItemBlock>
            <CheckCircle done={done} onClick={onToggle}>{done && <MdDone />}</CheckCircle>
            <Text done={done}>{text}</Text>
            <Edit open={open} onClick={onEdit}>
                <MdBuild />
            </Edit>
            <Remove onClick={onRemove}>
                <MdDelete />
            </Remove>
            {open && (
                <Editinput autoFocus
                    value={text} />
            )}
        </TodoItemBlock>
    )
}


export default React.memo(TodoItem);
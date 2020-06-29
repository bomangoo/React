import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete, MdBuild } from 'react-icons/md';
import { useTodoDispatch } from '../TodoContext';

const Edit = styled.div`
    display: block;
    float: right;
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
    float: right;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    &:hover{
        color: #ff6b6b;
    }
    display: none;
`;

const TodoItemBlock = styled.div`
    display: block;
    clear: both;
    width: 100%;
    overflow: hidden;
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
    float: left;
    margin-right: 20px;
    cursor: pointer;
    text-align: center;
    ${props =>
        props.done &&
        css`
            border: 1px solid #38d9a9;
            color: #38d9a9;
        `
    }
`;

const Text = styled.div`
    float: left;
    font-size: 21px;
    color: #495047;
    ${props =>
        props.done &&
        css`
            color: #ced4da;
        `
    }
`;
const Editwrap = styled.div`
    clear: both;
    width: 100%;
    overflow: hidden;
`;
const Editinput = styled.input`
    width: 60%;
    padding: 12px;
    margin: 5px 0;
    margin-left: 10%;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    outline: none;
    font-size: 18px;
    box-sizing: border-box;
    color: #666;
`
const EditBtn = styled.button`
    width: 20%;
    background: red;
    border-radius: 5px;
    padding: 12px 0;
    margin: 5px 0;
    vertical-align: top;
    color: #fff;
    outline: none;
    cursor: pointer
`

function TodoItem({ id, done, text }) {
    const [open, setOpen] = useState(false);
    const [edit, setEdit] = useState(false);
    const [value, setValue] = useState(text);

    const dispatch = useTodoDispatch();

    const onEditToggle = () => {
        setOpen(!open); //수정창 열리고 닫히는 토글 이벤트
        setEdit(!edit); //edit true
    }
    const onToggle = () => dispatch({ type: 'TOGGLE', id });
    const onRemove = () => dispatch({ type: 'REMOVE', id });
    const onChange = () => dispatch({ type: 'CHANGE', id });
    const onEdit = e => {
        setValue(e.target.value);
        setOpen(false); //수정창 닫힘 이벤트
    }
    return (
        <TodoItemBlock>
            <CheckCircle done={done} onClick={onToggle}>{done && <MdDone />}</CheckCircle>
            <Text done={done}>{text}</Text>
            <Remove onClick={onRemove}>
                <MdDelete />
            </Remove>
            <Edit open={open} onClick={onEditToggle}>
                <MdBuild />
            </Edit>
            {open && (
                <Editwrap>
                    <Editinput autoFocus
                        onChange={onChange}
                        value={value} />
                    <EditBtn onClick={onEdit}>수정완료</EditBtn>
                </Editwrap>
            )}
        </TodoItemBlock>
    )
}

export default React.memo(TodoItem);
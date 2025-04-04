import React from 'react'
import './todo.css'
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

const Todo = ({ text, updateMode, deleteTodo }) => {
    return ( <
        div className = 'todo-box' >
        <
        p className = 'todo-text' > { text } < /p> <
        div className = 'a-buttons-container' >
        <
        MdOutlineEdit onClick = { updateMode }
        className = 'update-todo' / >
        <
        MdDeleteOutline onClick = { deleteTodo }
        className = 'delete-todo' / >
        <
        /div> <
        /div>
    )
}

export default Todo
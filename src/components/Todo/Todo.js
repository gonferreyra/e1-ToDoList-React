import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext';

const Todo = ({ todo, index }) => {

    const { deleteTodo, toggleComplete } = useContext(UserContext)

    const handleDelete = () => {
        deleteTodo(todo.id)
    };

    const handleComplete = () => {
        toggleComplete(todo.id)
    };

    return (
        <li>
            <p
                key={todo.id}
                onClick={handleComplete}
                className={(todo.done === false ? 'paragraph' : 'paragraph completed')}
            >
                {index + 1} - {todo.task}</p>
            <button
                className='li-button'
                onClick={handleDelete}
            >
                X
            </button>
        </li>
    );
}

export default Todo
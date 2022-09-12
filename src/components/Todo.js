import React from 'react'

const Todo = ({ todo, index, deleteTodo, toggleComplete }) => {

    const handleDelete = () => {
        deleteTodo(todo.id)
    };

    const handleComplete = () => {
        toggleComplete(todo.id)
    };

    return (
        <li>
            {/* <input type='checkbox' onClick={handleComplete} /> */}
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
import React from 'react'

const Todo = ({ todo, index, deleteTodo }) => {

    const handleDelete = () => {
        deleteTodo(todo.id)
    };

    return (
        <li>
            {/* <input
                type="checkbox"
            /> */}
            {/* <p>{index + 1}</p> */}
            <p>{index + 1} - {todo.task}</p>
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
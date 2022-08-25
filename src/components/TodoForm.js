import React, { useState } from 'react'


const TodoForm = ({ addTodo }) => {

    const [todo, setTodo] = useState({
        id: "",
        task: "",
        done: false
    });

    console.log(todo)
    const handleTaskInputChange = (e) => {
        setTodo({ ...todo, task: e.target.value })
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({ ...todo, id: new Date().getTime() })
            // reset form
            setTodo({ ...todo, task: "" })
        }
    };

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit} className="form">
                <input
                    type="text"
                    name="task"
                    value={todo.task}
                    onChange={handleTaskInputChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default TodoForm
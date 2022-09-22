import React, { useContext, useState } from 'react'
import { UserContext } from '../Context/UserContext';


const TodoForm = () => {

    const { addTodo } = useContext(UserContext);

    const [todo, setTodo] = useState({
        id: "",
        task: "",
        done: false
    });

    const handleTaskInputChange = (e) => {
        setTodo({ ...todo, task: e.target.value })
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.task.trim().length >= 5) {
            addTodo({ ...todo, id: new Date().getTime() })
            // reset form
            setTodo({ ...todo, task: "" })
        } else {
            alert("ToDo's must contain at least 5 characters. Please try again")
        }
    };

    return (
        <>
            <h1>ToDo List - React</h1>
            <div className='form-container'>
                <form onSubmit={handleSubmit} className="form">
                    <input
                        type="text"
                        name="task2"
                        value={todo.task}
                        onChange={handleTaskInputChange}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default TodoForm
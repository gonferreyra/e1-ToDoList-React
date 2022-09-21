import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import Todo from './Todo'

const TodoList = () => {

    const { todos, deleteTodo, toggleComplete, deleteAll } = useContext(UserContext)

    return (
        <div className='task-container'>
            <div className='task__card'>
                <h2>Tareas</h2>
                {todos.length === 0
                    ?
                    <h2>No hay tareas para mostrar</h2>
                    :
                    <ol className='tasks'>
                        {
                            todos.map((todo, i) => (
                                <Todo
                                    key={todo.id}
                                    index={i}
                                    todo={todo}
                                    deleteTodo={deleteTodo}
                                    toggleComplete={toggleComplete}
                                />
                            ))
                        }
                    </ol>}
                <button
                    className='deleteAll'
                    onClick={deleteAll}
                >
                    Borrar todas las tareas
                </button>
            </div>
        </div>
    )
}

export default TodoList
import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, deleteAll }) => {
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
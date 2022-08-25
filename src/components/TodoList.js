import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, deleteTodo }) => {
    return (
        <div className='task-container'>
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
        </div>
    )
}

export default TodoList
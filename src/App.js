import React, { useEffect, useState } from 'react'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import './style.css'

const initialState = JSON.parse(localStorage.getItem('todos')) || [];

export const App = () => {

    // Lista ToDos
    const [todos, setTodos] = useState(initialState);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


    const addTodo = (todo) => {
        setTodos([todo, ...todos])
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    };

    const deleteAll = () => {
        setTodos([]);
    };

    const toggleComplete = (id) => {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo
            })
        )
    };

    return (
        <>
            <h1>ToDo List - React</h1>
            <TodoForm addTodo={addTodo} />
            <TodoList
                todos={todos}
                deleteTodo={deleteTodo}
                deleteAll={deleteAll}
                toggleComplete={toggleComplete}
            />
        </>
    )
}

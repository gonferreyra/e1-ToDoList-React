import React, { useEffect, useState } from 'react'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import './style.css'

const initialState = JSON.parse(localStorage.getItem('todos')) || [];

export const App = () => {

    // const [todos, setTodos] = useState([]);
    const [todos, setTodos] = useState(initialState);

    // console.log(todos)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


    const addTodo = (todo) => {
        setTodos([todo, ...todos])
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    };


    return (
        <>
            <h1>ToDo List - React</h1>
            <TodoForm addTodo={addTodo} />
            <TodoList
                todos={todos}
                deleteTodo={deleteTodo}
            />
        </>
    )
}

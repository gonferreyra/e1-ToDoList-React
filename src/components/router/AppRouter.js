import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homescreen from '../Home/Homescreen'
import Navbar from '../Navbar/Navbar'
import Poke from '../PokeApi/Poke'
import TodoForm from '../Todo/TodoForm'
import TodoList from '../Todo/TodoList'


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact index path='/' element={<Homescreen />} />
                <Route exact path='/todo' element={<><TodoForm /><TodoList /></>} />
                <Route exact path='/pokeapi' element={<Poke />} />
                <Route path='*' element={<Homescreen />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
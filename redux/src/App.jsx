import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

function App() {

  return (
    <>
      <h1 className='text-center mt-9 text-2xl font-serif'>Redux Demo Application</h1>
      <AddTodo />
      <TodoList/>
    </>
  )
}

export default App

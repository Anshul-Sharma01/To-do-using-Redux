import { useState } from 'react'
import AddTodo from './Components/AddTodo.jsx'
import Todo from './Components/Todo.jsx'

function App() {

  return (
    <>
      <h1 className='bg-slate-600 text-2xl p-4 m-4 text-white text-center'>ToDo using redux-Toolkit</h1>

      <AddTodo/>
      <Todo/>
    </>
  )
}

export default App

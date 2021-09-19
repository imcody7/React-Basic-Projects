import React, { useState } from 'react'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem';
import {v4 as uuid} from 'uuid'

export default function Todo() {
  const [todos,setTodos] = useState([]);

  const handleAddTodos = (text) => {
    const payload = {
      id: uuid(),
      text,
      status:false
    }
    setTodos((prev) => [...prev, payload])
  }

  const handleToggle = (todoid) => {
    const updatedTodos = todos.map((todo) => todo.id === todoid ? {...todo,status: !todo.status} : todo )
    setTodos(updatedTodos)
  }

  const handleDelete = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId );
    setTodos(updatedTodos)
  }

  return (
    <div>
      <TodoInput handleAddTodos={handleAddTodos}/>
      {todos?.map((todo,index) => <div key={todo.id}><TodoItem index={index} todo={todo} handleToggle={handleToggle} handleDelete={handleDelete}/></div>)}
    </div>
  )
}

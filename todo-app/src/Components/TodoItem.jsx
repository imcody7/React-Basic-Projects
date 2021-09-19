import React from 'react'

export default function TodoItem({index,todo,handleToggle,handleDelete}) {
  return (
    <div style={{display:'flex', justifyContent:'space-between',alignItems:'center', width:'46%', margin:'10px auto', border:'1px solid black', padding:'4px 10px'}}>
      <p>{index+1}</p>
      <h3>{todo.text}</h3>
      <button onClick={() => handleToggle(todo.id)}>{todo.status ? "Completed" : "Not Completed" }</button>
      <button onClick={() => handleDelete(todo.id)}>Delete</button>
    </div>
  )
}

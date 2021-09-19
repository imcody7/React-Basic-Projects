import React, { useState } from 'react'

export default function TodoInput({handleAddTodos}) {
  const [query,setQuery] = useState('');

  const handleSubmit = (e) => {
     e.preventDefault()
     handleAddTodos(query)
     setQuery('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add something" value={query} onChange={(e) => setQuery(e.target.value)}/>
        <button>ADD</button>
      </form>
    </div>
  )
}

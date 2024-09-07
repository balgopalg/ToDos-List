import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
  return (
    <div className="todo-item-container ">
      <h4>{todo?.title || "No Title"}</h4>
      <p>{todo?.desc || "No Description"}</p>
      <button className="btn btn-sm btn-danger" onClick={() => { onDelete(todo) }}>Delete</button>
      <hr/>
    </div>
  )
}

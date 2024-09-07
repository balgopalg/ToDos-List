import React from 'react'
import { TodoItem } from "./TodoItem";

export const Todos = ({ todos, onDelete }) => {
  let myStyle = {
    minHeight: "80vh",
    margin: "10px auto"
  }

  return (
    <div className='container' style={myStyle}>
      <h3 className='text-center my-3'>Todos List</h3>
      {todos.length === 0 ? 
        <div className="text-center">No Todos to display</div> :  // Added some centering
        todos.map((todo) => {
          return <TodoItem todo={todo} key={todo.sno} onDelete={onDelete} />
        })
      }
    </div>
  )
}

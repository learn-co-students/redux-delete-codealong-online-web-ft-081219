import React from 'react'

const Todo = ({todo, delete:remove}) => {
  return (
    <div>
    <span>{todo.text}</span>
    <button onClick={() => remove(todo.id)}>DELETE</button>
  </div>
  )
}

export default Todo;

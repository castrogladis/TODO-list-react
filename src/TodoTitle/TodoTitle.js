import React from "react"
import "./TodoTitle.css"
import { TodoContext } from "../TodoContext"

function TodoTitle() {
  const {
    completedTodos,
    totalTodos,
  } =  React.useContext(TodoContext)
  
  return (
      <h1 className="TodoTitle">Your Tasks
       <br/> Completed <span>{ completedTodos }</span> to <span>{ totalTodos }</span>
      </h1>
  )
}

export { TodoTitle }

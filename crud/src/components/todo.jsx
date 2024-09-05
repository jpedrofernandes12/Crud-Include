import React from 'react'

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div className="todo" style={{textDecoration: todo.isCompleted ? "line-through"  : ""}}>
      <div className="content">
      <button className={todo.isCompleted ? "urgencia complete-urgency" : "urgencia"}></button>
      
        <p>{todo.text}</p>
        <p>{todo.textarea}</p>
        <p>{todo.data}</p>
        <p className="category">({todo.category})</p>
        <p className="category2">({todo.category2})</p>
      </div>
      <div>
        <button className="complete"onClick={() => completeTodo(todo.id)}>Completar</button>
        <button className="edit"onClick={("")}>Editar</button>
        <button className="remove" onClick={() => removeTodo(todo.id)}>x</button>
        
      </div>
    </div>
  )
}

export default Todo;

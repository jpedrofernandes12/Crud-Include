import React from 'react'


const todo = ({todo}) => {
  return (
    <div className="todo">
        <div className="content">
          <p>{todo.text}</p>
          <p>{todo.textarea}</p>
          <p>{todo.data}</p>
          <p className= "category">({todo.category})</p>
          <p className= "category2">({todo.category2})</p>
        </div>
        <div> 
        <button className="complete">Completar</button>
        <button className="edit">Editar</button>
        <button className="remove">x</button>
        
        </div>
       </div> 
  )
}

export default todo

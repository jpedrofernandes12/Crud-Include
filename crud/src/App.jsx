import { useState } from 'react'
import Todo from "./components/todo"
import "./App.css";
import TodoForm from './components/TodoForm';
function App() {

    const [todos, setTodos] = useState([
      
    ]);
     
     const addTodo = (text, category, category2,data,textarea) => {

      const newTodos = [...todos,{
         id: Math.floor(Math.random() * 10000),
        text,
        textarea,
        data,
        category,
        category2,
        isCompleted: false   

      }]
      setTodos(newTodos)
     };
const removeTodo = (id) =>{
 const newTodos = [...todos]
 const filteredTodos = newTodos.filter(todo => todo.id !== id? todo : null );
 setTodos(filteredTodos);
};

const completeTodo = (id) =>{
  const newTodos = [...todos]
  newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo);
  
  setTodos(newTodos);
}

  return <div className="app">
    <h1>Lista de Tarefas</h1>
    <div className="todo-list">
      {todos.map((todo)=>(
       <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
      ))}
    </div>
      <TodoForm addTodo={addTodo} />
  </div>
  
  
}

export default App

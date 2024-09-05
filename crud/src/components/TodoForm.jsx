import {useState} from 'react'

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("")
  const [value2, setValue2] = useState("")
  const [data, setData] = useState("")
  const [category, setCategory] = useState("")
  const [category2, setCategory2] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Verifica se todos os campos foram preenchidos
    if (!value || !value2 || !data || !category || !category2) {
      console.log('Preencha todos os campos');
      return;
    }
    
    // Chama a função addTodo para adicionar a nova tarefa
    addTodo(value, value2, data, category, category2);
    
    // Limpa os campos após a criação da tarefa
    setValue("");
    setValue2("");
    setData("");
    setCategory("");
    setCategory2("");
  };


  return (
    <div className="todo-form">
      <h2> Criar tarefa: </h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Digite o título" 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        /> 
        <textarea type="textarea" placeholder="Digite o conteúdo" 
        value={value2}
        onChange={(e) => setValue2(e.target.value)}/>  
        <input type="text" placeholder="Data. Ex: 06/09/2024" 
        value={data}
        onChange={(e) => setData(e.target.value)}/>  
        <select value={category}
         onChange={(e) => setCategory(e.target.value)}> 
            <option value={""}> Seleione uma categoria de tipo</option>
            <option value={"Trabalho"}>Trabalho </option>
            <option value={"Pessoal"}> Pessoal</option>
            <option value={"Estudos"}>Estudos </option>
            </select>
            <select value={category2}
            onChange={(e) => setCategory2(e.target.value)}> 
            <option value={""}> Seleione uma categoria de urgência</option>
            <option value={"Urgente"}>Urgente </option>
            <option value={"Não-urgente"}>Não-urgente</option>
            
            </select>   
           
            <button type="submit">Criar tarefa</button>
            
        </form>
    </div>



  )
}

export default TodoForm

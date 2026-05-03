import { useState } from "react";

import './TrainingOrganization.css'

function TrainingDayFolder(){
  
    const [todos, setTodos] = useState([])

    const [inputValue, setInputValue] = useState('')

    //Adiciona tarefa//
    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (inputValue.trim() !== ""){
            const newTodo = {
                id: Date.now(),
                text: inputValue,
                date: new Date().toLocaleDateString('pt-BR')
            }

            setTodos((prevTodos) => [...prevTodos, newTodo])

            setInputValue("")
        }
    }   

  return (
    <div className='list-container'>
        <form onSubmit={handleSubmit} className='train-add'>
          <input type="text" className='input-field' placeholder='Adicionar um treino' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <button type="submit" className='add-button'>+</button>
        </form>
        {todos.length === 0 ? (<p className="small-description">Não há treinos...</p>) : (null) }
        <div className="todo-folder">
            <ul className='todo-list'>
              {todos.map((todo) => (
                  <li key={todo.id} className='todo-item'>
                    <div className="todo-text">
                      {todo.text} 
                    </div>
                    <div className="todo-date">
                      {todo.date}
                    </div>
                    <div>
                        <input type="checkbox" className="checkmark"/>
                    </div>
                  </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default TrainingDayFolder
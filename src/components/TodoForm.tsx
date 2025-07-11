import React, { useState } from "react"

interface TodoFormProps {
  addTodo: (text: string, category: string) => void;
}

const TodoForm = ({addTodo}: TodoFormProps) => {
  const [text, setText] = useState('')
  const [category, setCategory] = useState('')

  const handleSubmit = (e : React.FormEvent) => {
    e.preventDefault();
    if(!text || !category) return
    console.log(text, category)
    addTodo(text, category)
    setText('')
    setCategory('')
  }


  return (
    <div className="todo-form">
        <h2>Criar Tarefa</h2>
        <form onSubmit={handleSubmit}>
            <input value={text} type="text" placeholder="Digite o título" onChange={(e) => setText(e.target.value)}/>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
            </select>
            <button type="submit">Criar tarefa</button>
        </form>
    </div>
  )
}

export default TodoForm
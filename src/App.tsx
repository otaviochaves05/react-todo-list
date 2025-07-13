import { useState } from "react"

import Todo from "./components/todo"
import TodoForm from "./components/todoForm"
import Search from "./components/search";

import './App.css'

interface TodoDTO {
  id: number;
  text: string;
  category: string;
  isCompleted: boolean;
}

function App() {
  const [todos, setTodos] = useState<TodoDTO[]>([])
  const [search, setSearch] = useState<string>("")

  const addTodo = (text: string, category: string) => {

    const newTodos = [...todos,
    {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false
    }]

    setTodos(newTodos)
  }

  const removeTodo = (id : number) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter((todo) => todo.id !== id ? todo : null)
    setTodos(filteredTodos)
  }

  const completeTodo = (id: number) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id  ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos)
  }

  return (
    <div className="app">
      <h1>Lista de tarefas</h1>
      <Search
        search={search}
        setSearch={setSearch}
      />
      <TodoForm addTodo={addTodo} />
      <div className="todo-list">
        {todos
        .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
        .map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
          />
        ))}
      </div>
    </div>
  )
}

export default App









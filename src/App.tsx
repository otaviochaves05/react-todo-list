import { useState } from "react"
import './App.css'
import Todo from "./components/Todo"
import TodoForm from "./components/TodoForm"

interface TodoDTO {
  id: number;
  text: string;
  category: string;
  isCompleted: boolean;
}

function App() {
  const [todos, setTodos] = useState<TodoDTO[]>([])

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
      <div className="todo-list">
        <TodoForm addTodo={addTodo} />
        {todos.map((todo) => (
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









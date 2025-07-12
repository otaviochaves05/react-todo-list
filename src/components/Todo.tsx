interface TodoProps {
  todo: { 
    id: number,
    text: string,
    category: string,
    isCompleted: boolean
  };
  removeTodo: (id: number) => void;
  completeTodo: (id: number) => void;
}

function Todo({ todo, removeTodo, completeTodo } : TodoProps) {
  return (
    <div className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      <div className="content">
        <p>{todo.text}</p>
        <p className="category">
          ({todo.category})
        </p>
      </div>
      <div>
        <button onClick={() => completeTodo(todo.id)} className="complete">Completar</button>
        <button onClick={() => removeTodo(todo.id)} className="remove">X</button>
      </div>
    </div>
  )
}

export default Todo
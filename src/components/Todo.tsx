interface TodoProps {
  todo: { 
    id: number,
    text: string,
    category: string,
    isCompleted: boolean
  };
  removeTodo: (id: number) => void;
}

function Todo({ todo, removeTodo } : TodoProps) {

  // const handleRemoveButton = (event: ReactEventHandler) => {

  // }

  return (
    <div className="todo">
      <div className="content">
        <p>{todo.text}</p>
        <p className="category">
          ({todo.category})
        </p>
      </div>
      <div>
        <button className="complete">Completar</button>
        <button onClick={() => removeTodo(todo.id)} className="remove">X</button>
      </div>
    </div>
  )
}

export default Todo
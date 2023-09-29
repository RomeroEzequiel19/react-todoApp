
export const TodoListItem = ({todoList,todo, completadoTodo}) => {

  
  return (
  <>
        
    <h3>Todo List</h3>
    <ul className="list-unstyled">
      {

        (todoList.length === 0)
        ? 
        (
          <li className="alert alert-info">No hay todos</li>
        )
        :
        (
        todoList.map(todo => (
          <li 
            key= {todo.id}
            className={`d-flex justify-content-between mb-2 alert alert ${(todo.done) ? 'alert-success' : 'alert-warning'}`}>
            <span>{todo.desc}</span>
            <button className={ `btn btn-sm ${(todo.done) ? 'btn-success' : 'btn-warning'} btn-success`} 
              id={todo.id}
              onClick={completadoTodo}>
              {(todo.done) ?  'Completada' : "Completar"}
            </button>
          </li>
        ))
        )
      }
    </ul>

  </>
  )
}
  
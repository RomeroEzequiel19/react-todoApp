
export const AddTodo = ({todo, setTodoList, todoList, inputChange}) => {

  
  return(
    <>
       
    <h3>New Todo</h3>

    <input
      type="text"
      className="form-control border border-primary"
      placeholder="Add Todo"
      name="desc"
      value={todo}
      onChange={inputChange}

       
      //Cuando se levanta la tecla es cuando se dispara el evento
      onKeyUpCapture={ ({key}) => {
        if(key === 'Enter'){
          setTodoList([
            ...todoList,
          {
            id: new Date().getTime(),
            desc: todo,
            done: false
          }])
        }
      }}
    />
    </>  
  )
}
  
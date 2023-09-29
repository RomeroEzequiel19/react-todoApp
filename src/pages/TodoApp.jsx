import { useState } from "react"
import { TodoListItem } from "../components/TodoListItem"

export const TodoApp = () => {

    // Lógica para almacenar los todos
    const[todoList, setTodoList] = useState([])
    const[todo, setTodo] = useState("")

    // Lógica para añadir un todo
    const inputChange = ({target}) => {

      setTodo(target.value)
  
    }

    // Lógica para completar un todo
    const completadoTodo = ({target}) => {
    
      const Todos = todoList.map( todo => {
        if (todo.id === +target.id){
          todo.done = !todo.done
  
        }
        return todo
      })
  
      setTodoList(Todos)
  
    }
  
    return (
      <div className="container">

         {/* Header */}
         <div className="row">
          <div className="col-12">
            <h1>TodoApp</h1>
          </div>
        </div>
  
        {/* TodoFilter */}
        <div className="row mb-3">
            <div className="col d-flex gap-1">
            <button className="btn btn-sm btn-primary">All</button>
            <button className="btn btn-sm btn-success">Active</button>
            <button className="btn btn-sm btn-danger">Completed</button>
            <button className="btn btn-sm btn-warning">Clear Completed</button>
          </div>
        </div>
  

        {/* TodoAdd */}
        <div className="row mb-3">
          <div className="col-sm-12 col-md-4 mb-2 mb-md-3 mb-lg-0 ">
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
          </div>
  
          {/* TodoList */}
          <div className="col-sm-12 col-md-8">
          <TodoListItem
           completadoTodo={completadoTodo}
           todo={todo}
           todoList={todoList}
          />
          </div>
        </div>
      </div>
    )
  }
  
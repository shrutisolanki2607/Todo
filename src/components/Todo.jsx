import React, { useContext } from 'react'
import { Todocontext } from '../Context/TodoContext'

function Todo( props) {

  const [todo,setTodos] = useContext(Todocontext);

  const completeTodo = (e)=>{
    
    const filterTodos = todo.map( (items) =>{
       
      if( items.id ===e.target.value) {
        items.completed = false;

        if(e.target.checked ) {

          items.completed =true;
        }
      }
       
      return items;
    })
    
    setTodos(filterTodos);

  }


  const deleteTodo = (item) =>{
     
  

    const filterTodo = todo.filter( (items) =>{
      return items.id !== item;
    })

    setTodos(filterTodo);
  }
  
  
  return (
    <>
    <p className='todo-items'>
      <input  type='checkbox' id={props.id} value={props.id} onChange={e =>completeTodo(e)}></input>
      <label htmlFor={props.id}>{props.title}</label>
      <button type='button' id={props.id} onClick={ ()=> deleteTodo(props.id)}
        className="bg-red-500 text-white py-1 px-3 text-sm rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition-colors m-4">Delete</button>
    </p>

    
    </>
     
  )

}

export default Todo
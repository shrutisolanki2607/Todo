import React, { useContext } from 'react'
import Todo from './Todo'
import { Todocontext } from '../Context/TodoContext'
function Todolist() {

  const[todo,setTodos] = useContext(Todocontext);
   
  const clearAllTodos = () => {
    setTodos([]);
  };
  return (
    <>

     <div>
        {todo.length === 0 ? (
          <h4 className="text-lg font-semibold text-gray-800 mb-4"> No task is remaining .... Add task</h4>
        ) : (
          todo.map((item) => (
            <Todo
              key={item.id}
              id={item.id}
              title={item.title}
              completed={item.completed}
            />
          ))
        )}
      </div>
      <button onClick={clearAllTodos} className="bg-red-500 text-white w-1/5 py-2 px-4 rounded hover:bg-red-600 transition-colors">Clear All</button>
      
  </>
      

      
  )
}

export default Todolist
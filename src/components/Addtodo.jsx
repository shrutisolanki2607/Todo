import React, {useContext, useState } from 'react';
import { Todocontext } from '../Context/TodoContext';
import {v4 as uuiddv4} from 'uuid';

function Addtodo() {

   const [title , setTitle ] = useState("")
   const [todo , setTodos] = useContext(Todocontext)


  const addtodo = (e)=>{
    e.preventDefault();

    if(''===title || undefined === title){
      alert('Add task');
      return ;
    }

    const newTodos = [...todo , {id: uuiddv4(), title:title , completed:false}];
    setTodos(newTodos);
    setTitle('')

   }

  return (
    <div>
        <input name='add-todo' type='text' placeholder='Enter your task' value={title} onChange={e=>setTitle(e.target.value)}/>
        <button onClick={addtodo} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors ml-8">add</button> 

    </div>
  )
}

export default Addtodo
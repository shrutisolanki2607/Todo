import { createContext, useState } from "react";

export const Todocontext = createContext();

export const TodoProvider = (props)=>{

    const[todo,setTodos]  = useState([])
 
    return(
      <Todocontext.Provider value={[todo,setTodos]}>
         {props.children}
      </Todocontext.Provider>
    );
}
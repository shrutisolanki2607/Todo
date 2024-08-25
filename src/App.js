import './App.css';
import Addtodo from './components/Addtodo';
import Todolist from './components/Todolist';
import {  TodoProvider } from './Context/TodoContext';

function App() {
  

  return (
     <TodoProvider>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-1/2 max-w-lg bg-white p-6 rounded shadow-lg">
       <h1 className="text-2xl font-bold text-gray-900 mb-6">Todo List</h1>
       <Addtodo/>
        <Todolist/>
        </div> 
      </div>
   </TodoProvider> 
  );
}

export default App;

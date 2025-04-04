import { useEffect, useState } from 'react';
import './App.css';
import Todo from './components/Todo'
import { addToDo,deleteTodo,getAllToDo,updateToDo} from './utils/HandleApi';

function App() {

  const [todo,setTodo]=useState([])
  const [text,setText]=useState("")
  const [isUpdating,setIsUpdating]=useState(false) 
  const [toDoId,setToDoId]=useState("")

  const updateMode=(_id,text)=>{
    setText(text)
    setIsUpdating(true)
    setToDoId(_id)
  }

  useEffect(()=>{
    getAllToDo(setTodo)
  },[])

  return (
    <div className="app-container">
      <div className="container">
        <h1 className="todo-heading">Todo App</h1>
        <div className='input-container'>
          <input type="text" className="todo-input-container" placeholder="Add Todo's" value={text} onChange={(event)=>setText(event.target.value)} />
          <button type="button" onClick={isUpdating?()=>updateToDo(text,setText,setTodo,setIsUpdating,toDoId):()=>addToDo(text,setText,setTodo)} className="add-update-button"  >{isUpdating?"Update":"Add"}</button>
        </div>
      </div>
      <div className='all-todos' >
        {todo.map((eachItem)=>(
          <Todo key={eachItem._id} text={eachItem.text} updateMode={()=>updateMode(eachItem._id,eachItem.text)} deleteTodo={()=>deleteTodo(eachItem._id,setTodo)} />
        ))}
        {todo.length===0 && <p className='todo-heading' >No Todos Here Add A New Todo !</p>}
      </div>
    </div>
  );
}

export default App;

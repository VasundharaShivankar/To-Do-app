import React from 'react'
import "./Home.css"
import Insert from "./plus.png"
import { useState, useEffect } from 'react'
import TodoCard from '../../components/TodoCard/TodoCard'
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2'

function Home() {

  const [todoList, setTodoList] = useState([
   {
   task:"Buy Vegetables",
   category:"Personal"
   }
  ])
  const [newTask, setNewTask] = useState("")
  const [category, setCategory] = useState("")

  const notify = () => toast('Task Added Successfully!');

  useEffect(()=>{
    const storedTodoList = localStorage.getItem("todoList")
    if(storedTodoList){
        setTodoList(JSON.parse(storedTodoList))
    }
},[])

useEffect(()=>{
  if(todoList.length === 0) return
  localStorage.setItem("todoList", JSON.stringify(todoList))
}, [todoList])

function deleteTask(index){
  Swal.fire({
      title: "Delete the Task!",
      text:"Are you sure, you want to delete this task?",
      icon: "warning",
      showCancelButton: true
  }).then((result)=>{
      if(!result.isConfirmed){
          return
      }
      const newTodoList = todoList.filter((item, i)=>{
          if(i == index){
              return false
          }
          else{
            return true
        }
    })
setTodoList(newTodoList)
})
}

  return (<>
    <div>
      <h1 className="app-heading">To-Do App</h1>
      <div className="todo-app-container">
      {todoList.map((todoItem,i)=>{
        const {task,category}=todoItem;
        return  <TodoCard key={i} task={task} category={category} deleteTask={deleteTask}/>
      })}
      
      {
        todoList.length===0?(
        <p>
          No Tasks to show, please add new Tasks
        </p>)
        :
       null
        }
      </div>

      <div className="input-container">
        <input 
        type="text" 
        className='task-input'
        placeholder='Add New Tasks Here'
        value={newTask}
        onChange={(e)=>setNewTask(e.target.value)}
        >
        </input>
        
        <select>
          <option value="Personal">Personal</option>
          <option value="Work">Work</option>
          <option value="Study">Study</option>
          <option value="Shopping">Shopping</option>
          <option value="Health">Health</option>
          <option value="Others">Others</option>
        </select>
        <img src={Insert} 
        className="insert-button" 
        alt="Insert"
        onClick={()=>{
          if(newTask === ""){
              toast.error('Task must not be empty!!!')
              return
          }

          if(category === ""){
              toast.error('Choose the Task category!!!')
              return
          }
          setTodoList([...todoList, {task: newTask, category: category}])
          setCategory("")
          setNewTask("")
          toast.success('Hurrey!! Task Added successfully')
      }}

/>
    
      </div>
    </div>
  </>)
}

export default Home

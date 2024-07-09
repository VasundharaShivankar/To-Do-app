import React from 'react'
import "./Home.css"
import Insert from "./plus.png"

function Home() {
  return (<>
    <div>
      <h1 className="app-heading">To-Do App</h1> 
      <div className="todo-app-container">

      </div>

      <div className="input-container">
      <input type="text" className='task-input'></input>
    
        <img src={Insert} className="insert-button" alt="Insert" onClick={}/>

      </div>
    </div>
    </>)
}

export default Home

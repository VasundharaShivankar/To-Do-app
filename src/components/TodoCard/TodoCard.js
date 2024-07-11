import "./TodoCard.css"
import React from 'react'
import Delete from "./trash-bins.png"

function TodoCard({ index, task, category, deleteTask }) {

  const Category_emoji= {
    Personal: "📅",
    Work:"🏢",
    Study: "📚",
    Shopping: "🛒",
    Health:"🏥",
    Others: "🎥"
  }

  const Category_colors = {
    Personal: "#F5C982",
    Work:"#7BD1FF",
    Study: "#E2A2FF",
    Shopping: "#FFAEA3",
    Health:"#B8FFD1",
    Others: "#F1FF96"
  }

  return (
    <div className="todo-card">
      <div>
      <img src={Delete} className="delete" onClick={() => {
        deleteTask(index)
      }} /></div>
      <div>
      {task}
      <span className="category-task" style={{
        backgroundColor: Category_colors[category]
      }}>
        {Category_emoji[category]} {category}
      </span>
      </div>
    </div>
  )
}

export default TodoCard

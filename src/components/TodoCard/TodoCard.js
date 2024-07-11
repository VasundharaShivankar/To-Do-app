import "./TodoCard.css"
import React from 'react'
import Delete from "./trash-bins.png"

function TodoCard({ index, task, category, deleteTask }) {

  const Category_emoji= {
    personal: "📅",
    work:"🏢",
    study: "📚",
    shopping: "🛒",
    health:"🏥",
    others: "🎥"
  }

  const Category_colors = {
    homechores: "#1ac6ff",
    study: "#66ff33",
    shopping: "#e6f600",
    others: "#ff884d"
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

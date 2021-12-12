import './DashBoardTasks.css';

function DashBoardTasks() {
  const TaskDetails = [
    {
      title: "Upload your employee performance agreement",
      button: "Begin"
    },
    {
      title: "Start quarterly self review",
      button: "Resume"
    }
  ]

  
  return (
    <div className="tasks__container">
      <div className="task__items">
        <div className="tasks__items__details">
          <div className="task__item__circle" id="topCircle"></div>
          <p> {TaskDetails[0].title} </p>
        </div>
        <div className="task__item__button">
          <a href="#"> {TaskDetails[0].button} </a>
        </div>
      </div>

      <div className="task__items">
        <div className="tasks__items__details">
          <div className="task__item__circle"></div>
          <p> {TaskDetails[1].title} </p>
        </div>
        <div className="task__item__button">
          <a href="#" id="second-task__button"> {TaskDetails[1].button} </a>
        </div>
      </div>
    </div>
  )
}

export default DashBoardTasks;
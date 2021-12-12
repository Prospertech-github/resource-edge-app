import './DashBoardBody.css';
import DashBoardTasks from './dashBoardTasks__component/DashBoardTasks';

function DashBoardBody() {
  return (
    <div className="main">
      <div className="welcomeMessage__div">
        <h1> Hello, Ositadinma Nwangwu </h1>
        <p> Welcome and good to have you back. </p>
      </div>

      <div className="task__div">
        <h3 className="task__head-title"> Things to do </h3>

        <DashBoardTasks />
      </div>

    </div>
  )
}

export default DashBoardBody;
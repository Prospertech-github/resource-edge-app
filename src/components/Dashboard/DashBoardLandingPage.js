import './DashBoardLandingPage.css'
import DashBoardNav from './dashBoardNav/DashBoardNav';
import DashBoardBody from './dashBoardBody/DashBoardBody';

function DashBoard() {
  
  return (
    <div>
      <DashBoardNav />

      <DashBoardBody />
    </div>
  )
}

export default DashBoard;
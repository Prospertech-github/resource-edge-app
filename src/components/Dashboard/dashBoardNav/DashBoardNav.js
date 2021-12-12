import './DashBoardNav.css';

function DashBoardNav() {
  
  return (
    <div>
       <nav className="dashboard__navbar">
          <div className="navbar__left-items">
            <i className="fa fa-bars"> </i>
            <h1 className="logo"> resource edge</h1>
            <p className="bar"> | </p>
            <p className="text"> TM Dashboard </p>
          </div>

          <div className="navbar__right-items">
            <i className="fas fa-user"></i>
          </div> 
        </nav>
    </div>
  )
}
export default DashBoardNav;
import './DashBoardNav.css';

function DashBoardNav() {
  
  return (
    <div>
       <nav>
          <div className="navbar__left-items">
            <i className="fa fa-bars"> </i>
            <h1 className="logo"> resource edge</h1>
            <p className="bar"> | </p>
            <p className="text"> TM Dashboard </p>
          </div>

          <div className="navbar__right-items">
            <i class="fas fa-user"></i>
          </div> 
        </nav>
    </div>
  )
}
export default DashBoardNav;
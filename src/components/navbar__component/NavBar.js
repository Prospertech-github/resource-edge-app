import './NavBar.css';


function NavBar() {
  
  return (
    <nav>
      <div className="navbar">
        <div className="navbar__left-content">
          <h1 className="logo"> resource edge </h1>
          <ul>
            <li> <a href="#"> Features </a>  </li>
            <li> <a href="#"> About </a> </li>
          </ul>
        </div>

        <div className="navbar__right-content">
          <ul>
            <span id="navbar__right-content__sign-in"> <li> <a href="#"> Sign In </a> </li> </span>
            <span id="navbar__right-content__sign-up"> <li> <a href="#"> Sign Up </a> </li> </span>
          </ul>
        </div>
      </div>
      
    </nav>
  )
}

export default NavBar;
import './DropDown.css';

function DropDown() {
  
  return (
    <div>
      <ul className="mainMenu">
        <li> <a href="#"> Features </a> </li>
        <li> <a href="#"> About </a> </li>

        <div className="mainmenu__userLogIn">
          <li id="logIn__list-item"> <a href="#" id="logIn"> Log In </a> </li>
          <li id="signUp__list-item"> <a href="#" id="signUp"> Sign Up </a> </li>
        </div>
      </ul>
    </div>
  )
}

export default DropDown;
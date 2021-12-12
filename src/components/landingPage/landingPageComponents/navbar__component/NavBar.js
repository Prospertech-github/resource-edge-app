import { useState, Fragment } from 'react';
import './NavBar.css';
import MobileLogo from '../../../../assets/images/mobileLogo.png';
import DropDown from '../dropDown__component/DropDown';
import { Link } from 'react-router-dom';


function NavBar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  }
  
  return (
    <Fragment>
      <nav>
        <div className="navbar">
          <div className="navbar__left-content">
            <img src={MobileLogo} className="mobileLogo"/>
            <h1 className="logo"> resource edge </h1>
            <ul>
              <li> <a href="#"> Features </a>  </li>
              <li> <a href="#"> About </a> </li>
            </ul>
          </div>

          <div className="navbar__right-content">
            <div class="openMenu"> <i onClick={handleDropdown} class={`fa fa-${showDropdown ? 'times' : 'bars'}`}> </i> </div>
            <ul className="menu-Nav">
              <span id="navbar__right-content__sign-in"> <li> <Link to="/signIn"> Sign In </Link> </li> </span>
              <span id="navbar__right-content__sign-up"> <li> <a href="#"> Sign Up </a> </li> </span>
            </ul>
          </div>
        </div>
        
      </nav>
      {showDropdown && <DropDown />}
    </Fragment>
  )
}

export default NavBar;
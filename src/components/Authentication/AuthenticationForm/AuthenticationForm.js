import {useState} from 'react'
import { Link } from 'react-router-dom';
import './AuthenticationForm.css';

function AuthenticationForm() {

  const [email, setemail] = useState('');
  const [emailValidate, setEmailValidate] = useState(false);
  const emailChangeHandler = (e) => {
    setemail(e.target.value);
    if (email.indexOf('@')) {
      setEmailValidate(true);
    }
  }

  
  return (
    <div className="formField">
      <div className="formdetails">
        <div className="formtexts">
          <div className="welcome__texts">
            <h3  onClick={() => console.log("clicked")}> Log In </h3>
            <p> Access your resource edge account </p>
          </div>

          <div className="userdetails hidden">
            <div className="userdetails__texts">
              <h4 id="userName"> Ositadinma Nwangwu </h4>
              <p> o.nwangwu.genesystechhub.com </p>
            </div>

            <i className="fas fa-pencil-alt"></i>
          </div>
        </div>

        <form className="form">
          <p> Email Address </p>
          <input type="text" onChange={emailChangeHandler} id="password__input" value={email} />

          <p className="hidden"> Password </p>
          <input type="password" id="password__input" hidden/>

          <Link to='/dashBoard' type="submit" value="Log In" className="submit__input"> Log In </Link>
          
          <div className="line"> </div>

          <a href="#" onClick={() => console.log("clicked")} id="forgotPassword"> Forgot Password? </a>
        </form>
      </div>
    </div>
  )
}

export default AuthenticationForm;
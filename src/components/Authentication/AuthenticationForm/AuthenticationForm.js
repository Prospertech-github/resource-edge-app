import './AuthenticationForm.css';

function AuthenticationForm() {
  
  return (
    <div className="formField">
      <div className="formdetails">
        <div className="formtexts">
          <div className="welcome__texts">
            <h3> Log In </h3>
            <p> Access your resource edge account </p>
          </div>

          <div className="userdetails hidden">
            <div className="userdetails__texts">
              <h4 id="userName"> Ositadinma Nwangwu </h4>
              <p> o.nwangwu.genesystechhub.com </p>
            </div>

            <i class="fas fa-pencil-alt"></i>
          </div>
        </div>

        <form className="form">
          <p> Email Address </p>
          <input type="text" id="password__input" />

          <p className="hidden"> Password </p>
          <input type="password" id="password__input" hidden/>

          <input type="submit" value="Log In" id="submit__input" />
          
          <div className="line"> </div>

          <a href="#"> Forgot Password? </a>
        </form>
      </div>
    </div>
  )
}

export default AuthenticationForm
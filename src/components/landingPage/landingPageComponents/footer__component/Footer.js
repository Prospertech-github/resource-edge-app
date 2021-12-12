import './Footer.css';

function Footer() {
  
  return (
    <div className="footer">
      <div className="footer__left">
          <h1 id="logo"> resource edge </h1>
          <p className="light-text"> Throw paperwork into the trash. </p>
      </div>

      <div className="footer__right">
        <div className="icons">
          <i className="fab fa-facebook-square"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-linkedin"></i>
          <i classname="fab fa-instagram"></i>
        </div>
          
          <p className="light-text long-text"> Copyright &copy; Genesys DevStudio . All rights reserved </p>
      </div>
    </div>
  )
}

export default Footer
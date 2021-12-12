import './AuthenticationPage.css';
import AuthenticationForm from '../Authentication/AuthenticationForm/AuthenticationForm';
import FooterImageRight from '../../assets/images/footerImageRight.png';
import FooterImageLeft from '../../assets/images/footerImageLeft.png';
import MobileLogo from '../../assets/images/mobileLogo.png';

function AuthenticationPage() {
  return (
    <div>

      <div  className="container">
        <div className="sub__container">
          <div className="top__texts">
            <img onClick={() => console.log("clicked")} src={MobileLogo} className="auth__logo" />
            <h1  onClick={() => console.log("clicked")}> resource edge </h1>
          </div>

        </div>
          <AuthenticationForm />
      
        <div className="footerImage__div">
          <img onClick={() => console.log("clicked")} src={FooterImageLeft} id="footerImage__left"/>
          <img src={FooterImageRight} id="footerImage__right"/>
        </div>
      
      </div>

    </div>
    
  )
}

export default AuthenticationPage;
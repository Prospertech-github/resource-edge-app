import './AuthenticationPage.css';
import AuthenticationForm from '../Authentication/AuthenticationForm/AuthenticationForm';
import FooterImageRight from '../../assets/images/footerImageRight.png';
import FooterImageLeft from '../../assets/images/footerImageLeft.png';
import MobileLogo from '../../assets/images/mobileLogo.png';

function AuthenticationPage() {
  return (
    <div className="container">
      <div className="sub__container">
        <div className="top__texts">
          <img src={MobileLogo} className="mobileLogo" />
          <h1> resource edge </h1>
        </div>

        <AuthenticationForm />
      </div>
      
      <div className="footerImage__div">
        <img src={FooterImageLeft} id="footerImage__left"/>
        <img src={FooterImageRight} id="footerImage__right"/>
      </div>
      
    </div>
  )
}

export default AuthenticationPage;
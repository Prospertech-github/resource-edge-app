import NavBar from '../navbar__component/NavBar';
import './Header.css'
import HeroImage from '../../../../assets/images/heroImage.png'


function Header() {

  return (
    <div>
      <NavBar />
      
      <section className="header">
        <div className="header__content">
          <div className="header__content-left">
            <span id="header__content-left__bold-text">
            < p> Throw paperwork into the trash where it belongs. </p>
            </span>

            <span id="header__content-left__light-text">
              <p> Eliminate all the hassle involved in managing people operations by automating it. </p>
            </span>
          </div>

          <div className="header__content-right">
            <img src={HeroImage} />
          </div>
          
        </div>
      </section>
   </div> 
  )
}

export default Header;
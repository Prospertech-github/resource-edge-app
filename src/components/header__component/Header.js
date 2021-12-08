import NavBar from '../navbar__component/NavBar';


function Header() {
  console.log(Logo)
  return (
    <div>
      <NavBar />
      
      <section className="header">
        <div className="header__content-left">

          <div>
            <p> Throw paperwork into the trash where it belongs. </p>
          </div>

          <div>
            <p> Eliminate all the hassle involved in managing people operations by automating it. </p>
          </div>
        </div>

        <div className="header__content-right">
          
        </div>

      </section>
   </div> 
  )
}

export default Header;
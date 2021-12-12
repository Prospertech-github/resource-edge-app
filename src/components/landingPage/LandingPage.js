import Header from "./landingPageComponents/header__component/Header";
import HumanResource from "./landingPageComponents/human-resource__component/HumanResource";
import AdminLogistics from "./landingPageComponents/adminLogistics__component/AdminLogistics";
import Footer from "./landingPageComponents/footer__component/Footer";


function LandingPage() {
  
  return (
    <div>
      <Header />

      <HumanResource />  
      
      <AdminLogistics />
      
      <Footer />
      
    </div>
  )
}

export default LandingPage;
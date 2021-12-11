import React from "react";

import Header from "./components/header__component/Header";
import HumanResource from "./components/human-resource__component/HumanResource";
import AdminLogistics from "./components/adminLogistics__component/AdminLogistics";
import Footer from "./components/footer__component/Footer";


function App() {
  
  return (
    <div>
      <header>
        <Header />
      </header>
       
      <section className="humanResource-section"> 
        <HumanResource />
      </section>
      
      <section className="features-section">  
        <AdminLogistics />
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App;

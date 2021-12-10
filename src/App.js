import React from "react";
// import NavBar from "./components/navbar__component/NavBar";

import Header from "./components/header__component/Header";
import HumanResource from "./components/human-resource__component/HumanResource";
import AdminLogistics from "./components/adminLogistics__component/AdminLogistics";


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

      
    </div>
  )
}

export default App;

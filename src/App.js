import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPage from "./components/landingPage/LandingPage";
import DashBoard from './components/Dashboard/DashBoardLandingPage'
import AuthenticationPage from "./components/Authentication/AuthenticationPage";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/signIn' element={<AuthenticationPage />}/>
        <Route path='/dashBoard' element={<DashBoard />} />
        {/* <Route path='*' element={<PageNotFound/>}/> */}

     </Routes>
    </Router>
  )
}

export default App;

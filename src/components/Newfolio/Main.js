import React from 'react'
//import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from './Header'
import TopContainer from './TopContainer'
import Skillcontainer from './Skillcontainer'
import Projectt from './Projectt'
import Contact from './Contact'
import 'bootstrap/dist/css/bootstrap.css';


const Main = () => {
  return (
    <div>
    {/* <BrowserRouter>
      <Routes>
        <Route path='about' element={}
      </Routes>
    </BrowserRouter> */}
        <Header/>
        <TopContainer/>
        <Skillcontainer/>
        <Projectt/>
        <Contact/>
    </div>
  )
}

export default Main
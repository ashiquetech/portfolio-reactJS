import React from 'react'
import {Link} from "react-scroll"
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
    <div className='header-left'>
        <h1>Develop<span>er</span></h1>
    </div>
    <div className='header-right'>
    <Link to='about' smooth={true} duration={500}><h4>
        About me</h4>
    </Link>
    <Link to='skill' smooth={true} duration={500}><h4>
        Skills</h4>
    </Link>
    <Link to='projects' smooth={true} duration={500}><h4>
        projects</h4>
    </Link>
    <Link to='contact' smooth={true} duration={500}><h4>
        Contact</h4>
    </Link>
    
    <h4 className='header-rightbutton'>join with me</h4>



    </div>

    </div>
  )
}

export default Header
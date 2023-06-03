import React from 'react'
import {Link} from "react-scroll"
import "./Topcontent.css"

const Topcontent = () => {
  return (
    <div className='topContent'>
    <div className='topContent-container'>
    <h1>Ashik.kh</h1>
    <p>Mern Stack Developer</p>
    <a href='www.google.com'><button className= 'topcontent-downloadbutton'>Download CV</button></a>
    <Link to="projects" smooth={true} duration={500}>
    <button className='topContent-workbutton'>My Work</button>

    </Link>

    </div>

    </div>
  )
}

export default Topcontent
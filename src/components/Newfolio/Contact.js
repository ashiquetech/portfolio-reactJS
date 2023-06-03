import React from 'react'
import { iconButton} from "@mui/icons-material"
import {Facebook,Instagram,LinkedIn } from "@mui/icons-material"
import { Element } from 'react-scroll'
import './Contact.css'

const Contact = () => {
  return (
    <Element classname='contact' id='contact'>
        <h1>Contact</h1>
        <div className='contact-container'>
            <p>Email:<span>Khashik97@gmail.com</span></p>
            <p>Github username:<span>@AshikTEchy</span></p>
            <br/>
            <div className='contactIcons'>
            <a href='www.goolge.com'>
                <iconButton>
                <Facebook/>
                <Instagram/>
                <LinkedIn/>

                </iconButton>
            </a>

            </div>
        </div>
    </Element>
  )
}

export default Contact
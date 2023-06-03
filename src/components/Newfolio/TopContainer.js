import React from 'react'
import { Element } from 'react-scroll'
import Topcontent from './Topcontent'
import './TopContainer.css'

const TopContainer = () => {
  return (
    <Element className='TopContainer'>
        <Topcontent/>
    </Element>
  )
}

export default TopContainer
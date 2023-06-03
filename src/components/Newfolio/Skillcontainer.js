import React from 'react'
import { Element } from 'react-scroll'
import './SkillContainer.css'
import skillpic from './assets/skillpic.jpeg'




const Skillcontainer = () => {
  return (
   
   <Element className='skillContainer-text'>
   <img src={skillpic} className='skillContainer-img'/>
   
    
   </Element>

   
  )
}

export default Skillcontainer
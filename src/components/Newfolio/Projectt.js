import React from 'react'
import Proj from './Proj'
import { Element } from 'react-scroll'
import './Projectt.css'

const Projectt = () => {
    const clientproject =[{
        img:"https://wallpapers.com/images/hd/programmer-wallpaper-v0aotbv3zzelx8l6.jpg",
        title:"google",
        desc:"this is samble google project",
        link:"www.google.com"

        
    },
    {
        img:"https://c0.wallpaperflare.com/preview/111/43/764/code-coder-codes-coding.jpg",
        title:"google",
        desc:"this is samble google project",
        link:"www.google.com"

        
    },{
        img:"https://wallpapers.com/images/hd/4k-programming-black-coding-screen-1x5zj2wiqx6spcu2.jpg",
        title:"google",
        desc:"this is samble google project",
        link:"www.google.com"

        
    },{
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRLFEn5n5SQL1teGZE69e6RgqMPGwrkPKLaA&usqp=CAU",
        title:"google",
        desc:"this is samble google project",
        link:"www.google.com"

        
    }
]
  return (
        <div className='projContainer'>
        <Element classname="projectContainer" id="projects">
            <h1>Projects</h1>
            <p>here are some projects done by me</p>
            <div className='projectContainer-projects'>
            {clientproject.map((project, index)=>{
                return(
                    <Proj key={index} img={project.img} title={project.title} desc={project.desc} link={project.link}/>
                )
            })}

            </div>
        </Element>
        </div>
    
  )
}

export default Projectt
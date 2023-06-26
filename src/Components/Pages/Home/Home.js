import React from 'react'
import Samoil from './samoil1.jpg'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import './Home.css'
import Metadata from '../../Metadata'

const Home = () => {
  return (
    <section className='home section grid'>
    <Metadata pageTitle={"Samoil - Home "} />
      <img src={Samoil} alt='samoilbarda.png' className='homeImg' />
      <div className='homeContent'>
      <div className='homeData' >
         <h1 className='homeTitle' >
           <span>I'm Samoil Bohra.</span><p>Web Designer</p>
         </h1>
         <p className='homeDescription'>
         I am a web designer and a 4th year computer science engineering student. I have a passion for creating beautiful and functional websites. Let me help bring your vision to life.
         </p>

         <Link to={'/about'}  className='button'>More About Me
         <span className='buttonIcon' ><FaArrowRight/></span>
         </Link>

         <Link to={'/contact'}  className='button'>Contact Me {`    `}
         <span className='buttonIcon' ><FaArrowRight/></span>
         </Link>
      </div>
      </div>
      <div className='colorBlock'></div>
    </section>
  )
}

export default Home

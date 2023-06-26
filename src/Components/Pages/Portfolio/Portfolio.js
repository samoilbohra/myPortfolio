import React, { Fragment } from 'react'
import {portfolio} from "../../../Assets/Data"
import PorfolioItem from './PorfolioItem'
import "./Portfolio.css"
import Metadata from '../../Metadata'

const Portfolio = () => {
  
  return (
    <Fragment>
      
      <section className='portfolio section'>
      <Metadata pageTitle={"Samoil - Portfolio"} />
        <h2 className='sectionTitle'>My <span>Projects</span></h2>
        <div className='portfolioContainer container grid'>
        {
          portfolio.map((item , index)=>{
             return <PorfolioItem key={index} {...item} />
          })
        }
        </div>
      </section>
    </Fragment>
  )
}

export default Portfolio

import React, { Fragment } from 'react'



const Info = () => {
  return (
    <Fragment>
      <li className='infoItem'>
        <span className='infoTitle'>Name : </span>
        <span className='infoDescription'>Samoil Bohra</span>
      </li>
     
      <li className='infoItem'>
        <span className='infoTitle'>Age : </span>
        <span className='infoDescription'>21</span>
      </li>
      <li className='infoItem'>
        <span className='infoTitle'>Nationality : </span>
        <span className='infoDescription'>Indian</span>
      </li>
      <li className='infoItem'>
        <span className='infoTitle'>Address : </span>
        <span className='infoDescription'>Indore ,India</span>
      </li>
      <li className='infoItem click' onClick={() => window.location = 'tel:+919993523171'} style={{cursor:'pointer'}}>
        <span className='infoTitle' >Phone : </span>
        <span className='infoDescription'>+919993523171</span>
      </li>
      <li className='infoItem click'  onClick={() => window.location = 'mailto:samoilbarda52@gmail.com'} style={{cursor:'pointer'}}>
        <span className='infoTitle'>Email : </span>
        <span className='infoDescription'>samoilbarda52@gmail.com</span>
      </li>
      <li className='infoItem'>
        <span className='infoTitle'>Languages : </span>
        <span className='infoDescription'>English , Hindi </span>
      </li>
    </Fragment>
  )
}

export default Info

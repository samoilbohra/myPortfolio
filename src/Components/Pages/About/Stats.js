import React, { Fragment } from 'react'
import {  useNavigate } from 'react-router-dom'


const Stats = () => {
  const navigate = useNavigate()
  return (
    <Fragment>
      <div className='statsBox'>
        <h3 className='statsNo'>2+</h3>
        <p className='statsTitle'>years of experience<br/> in web development</p>
      </div>

      <div className='statsBox' onClick={()=>{navigate('/projects')}} style={{cursor:'pointer'}}>
        <h3 className='statsNo' >10+</h3>
        <p className='statsTitle'>Completed <br /> Projects</p>
      </div>

      <div className='statsBox'>
        <h3 className='statsNo'>300+</h3>
        <p className='statsTitle'>leetcode Questions <br />Completed</p>
      </div>
    </Fragment>
  )
}

export default Stats

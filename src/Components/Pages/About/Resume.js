import React, { Fragment } from 'react'
import parse from 'html-react-parser'

const Resume = ({icon , year ,title ,desc}) => {
  return (
    <Fragment>
    <div className='resumeItem'>
      <div className='resumeIcon'>{icon}</div>
      <span className='resumeDate'>{year}</span>
      <h3 className='resumeSubtitle'>{parse(title)}</h3>
<p className='resumeDescription'>{desc}</p>
    </div>
    </Fragment>
  )
}

export default Resume


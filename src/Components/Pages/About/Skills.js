import React, { Fragment } from 'react'
import { skills } from '../../../Assets/Data'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const Skills = () => {
    return (
        <Fragment>
            {skills.map(({ title, percentage }, index) => {
                return (
                    <div className='progressBox' key={index}>
                        <div className='progressCircle'>
                            <CircularProgressbar strokeWidth={3.5} text={`${percentage}%`} value={percentage} />
                        </div>
                        <h3 className='skillsTitle'>{title}</h3>
                    </div>
                )
            })}
        </Fragment>
    )
}

export default Skills

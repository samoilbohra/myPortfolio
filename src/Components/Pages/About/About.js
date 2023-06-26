import React from 'react'
import Info from './Info'
import Stats from './Stats'
import Skills from './Skills'
import Resume from './Resume.js'
import { FaDownload } from 'react-icons/fa'
import CV from '../../../Assets/CV.pdf'
import './About.css'
import { resume } from '../../../Assets/Data'
import Metadata from '../../Metadata'




const About = () => {
  return (
    <main className='section container'>
    <Metadata pageTitle={"Samoil - About"}/>
      <section className='about'>
        <h2 className='sectionTitle'>

          About <span>Me !</span>
        </h2>
        <div className='aboutContainer grid'>
          <div className='aboutInfo'>
            <h3 className='sectionSubtitle'>
              Personal Info
            </h3>
            <ul className='infoList grid'>
              <Info />
            </ul>

            <a href={CV} download={true} className='button'>
              Download CV  <span className='buttonIcon'><FaDownload /> </span>
            </a>
          </div>
          <div className='stats grid' >
            <Stats />
          </div>
        </div>
      </section>

      <div className='separator'></div>

      <section className='skills' >
        <h3 className='sectionSubtitle subtitleCenter'>My Skills</h3>
        <div className='skillsContainer grid'>
          <Skills />
        </div>

      </section>

      <div className='separator'></div>
      <section className='skills' >
        <h3 className='sectionSubtitle subtitleCenter'>Courses UnderTaken (during Eng.)</h3>
        <div className='skillsContainer grid'>
          <div className='progressBox' >

            <h3 className='skillsTitle courseTitle'> →  Design and Analysis of Alogorithm </h3>
          </div>
          <div className='progressBox' >

            <h3 className='skillsTitle courseTitle'> →  Machine Learning </h3>
          </div>
          <div className='progressBox' >

            <h3 className='skillsTitle courseTitle'> →  Data Science & Eng. </h3>
          </div>
          <div className='progressBox' >

            <h3 className='skillsTitle courseTitle'> →  Computer Networks </h3>
          </div>
          <div className='progressBox' >

            <h3 className='skillsTitle courseTitle'> →  Data Structures </h3>
          </div>
          <div className='progressBox' >

            <h3 className='skillsTitle courseTitle'> →  Database Management Systems </h3>
          </div>
          <div className='progressBox' >

            <h3 className='skillsTitle courseTitle'> →  Operating Systems </h3>
          </div>
          <div className='progressBox' >

            <h3 className='skillsTitle courseTitle'> →  Foundation of Information Security  </h3>
          </div>
          <div className='progressBox' >

            <h3 className='skillsTitle courseTitle'> →  Agile Methodoly  </h3>
          </div>
          <div className='progressBox' >

            <h3 className='skillsTitle courseTitle'> →  Artificial Intelligence  </h3>
          </div>
          <div className='progressBox' >

            <h3 className='skillsTitle courseTitle'> →  Android Application Development </h3>
          </div>
          <div className='progressBox' >

            <h3 className='skillsTitle courseTitle'> →  Internet of Things </h3>
          </div>
          <div className='progressBox' >

            <h3 className='skillsTitle courseTitle'> →  Mathematics (I II III IV) </h3>
          </div>
          <div className='progressBox' >

            <h3 className='skillsTitle courseTitle'> →  Human Values </h3>
          </div>
          <div className='progressBox' >

            <h3 className='skillsTitle courseTitle'> →  Theory of COmputation </h3>
          </div>
          
        
        </div>

      </section>

      <div className='separator'></div>

      <section className='resume'>
        <h3 className='sectionSubtitle subtitleCenter'> Experience & Education </h3>
        <div className='resumeContainer grid'>
          <div className='resumeData'>
            {resume.map((item, index) => {
              if (item.category === 'certification') {
                return <Resume key={index} {...item} />
              }
            })}
          </div>
          <div className='resumeData'>
            {resume.map((item, index) => {
              if (item.category === 'education') {
                return <Resume key={index} {...item} />
              }
            })}
          </div>
        </div>
      </section>
    </main>
  )
}

export default About

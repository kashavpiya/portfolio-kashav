import React from 'react'
import './about.css'
import ME from '../../assets/profile.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {MdOutlineFolderSpecial} from 'react-icons/md'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about-me"/>
          </div>

       </div>
       
       <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>2+ Years Working</small>
          </article>

          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>5+ in QuadCities</small>
          </article>

          <article className='about__card'>
            <MdOutlineFolderSpecial className='about__icon'/>
            <h5>Projects</h5>
            <small>10+ completed</small>
          </article>
        </div>

        <p>
        I'm a Computer Science graduate who has always loved creating solutions and challenging technological problems. I have experience in Full Stack Software Development, and Data Analytics. In addition to working as a Full Stack Software Engineer, I enjoy working on my own side projects. I’m currently building most frequently with: Java, Python and JavaScript. I am also familiar with R, SQL, C# and others. Post graduation, I have been working at a startup and I am hoping to have the opportunity to work within tech industry as that is what I'm passionate about.
        </p>

        <a href='#contact' className='btn btn-primary'>Let's Talk</a>

       </div>
       

      </div>

    </section>
  )
}

export default About
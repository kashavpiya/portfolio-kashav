import React from 'react'
import './experience.css'
import {AiFillCheckCircle} from 'react-icons/ai'


const Experience = () => {
  return (
    <section id='experience'>
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <AiFillCheckCircle classname='experience__details-icon'/>
              <div>
                <h4>HTML/CSS</h4>
                <small className='text-light'>4+ Years</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle classname='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>4+ Years</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle classname='experience__details-icon'/>
              <div>
                <h4>ReactJS</h4>
                <small className='text-light'>2+ Years</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle classname='experience__details-icon'/>
              <div>
                <h4>ReactNative</h4>
                <small className='text-light'>2+ Years</small>
              </div>
            </article>
          </div>
        </div>

        <div classname='experience__backend'>
          <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <AiFillCheckCircle classname='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>4+ Years</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle classname='experience__details-icon'/>
              <div>
                <h4>Java</h4>
                <small className='text-light'>3+ Years</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle classname='experience__details-icon'/>
              <div>
                <h4>SQL</h4>
                <small className='text-light'>3+ Years</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle classname='experience__details-icon'/>
              <div>
                <h4>AWS</h4>
                <small className='text-light'>1+ Year</small>
              </div>
            </article>
            

          </div>
          
          </div>
          <div className='experience_data'>
            <h3>Data Analytics</h3>
            <div className='experience__content'>
              <article className='experience__details'>
                  <AiFillCheckCircle classname='experience__details-icon'/>
                  <div>
                    <h4>SQL</h4>
                      <small className='text-light'>3+ Years</small>
                  </div>
                </article>
              <article className='experience__details'>
                <AiFillCheckCircle classname='experience__details-icon'/>
                <div>
                  <h4>R</h4>
                    <small className='text-light'>2+ Years</small>
                </div>
              </article>
              <article className='experience__details'>
                <AiFillCheckCircle classname='experience__details-icon'/>
                <div>
                  <h4>PowerBI</h4>
                    <small className='text-light'>1+ Years</small>
                </div>
              </article>
              
              <article className='experience__details'>
                <AiFillCheckCircle classname='experience__details-icon'/>
                <div>
                  <h4>Tableau</h4>
                    <small className='text-light'>3+ Years</small>
                </div>
              </article>
            </div>

            
            
        </div>
        <div classname='experience__backend'>
          <h3>Game Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <AiFillCheckCircle classname='experience__details-icon'/>
              <div>
                <h4>C#</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle classname='experience__details-icon'/>
              <div>
                <h4>Unity</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            
            

          </div>
          
          </div>
      </div>

    </section>
  )
}

export default Experience
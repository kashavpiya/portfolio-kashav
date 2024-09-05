import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlinePhone} from 'react-icons/ai'
import { useRef } from 'react';

const Contact = () => {
  const form = useRef();
  

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-item' />
            <h4>Email</h4>
            <h5>kashavpiya23@gmail.com</h5>
            <a href="mailto:kashavpiya23@gmail.com">Send a message.</a>
          </article>
          
        </div>
      </div>
    </section>
  )
}

export default Contact
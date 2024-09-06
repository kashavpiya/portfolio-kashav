import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/gooselake.png'
import IMG2 from '../../assets/chosen-star.jpg'
import IMG3 from '../../assets/car-project.png'
import IMG4 from '../../assets/sorting-project.png'
import IMG5 from '../../assets/mavs.png'
import IMG6 from '../../assets/ps.jpg'
import IMG7 from '../../assets/alexa.jpg'
import IMG8 from '../../assets/psLogo.jpg'

const Portfolio = () => {
  return (
    <section id='project'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>


      <div className='container portfolio__container1' style={{ marginBottom: '2.5rem' }}>

        <article className='portfolio__item'>
            <div className='portfolio__item-img'>
              <img src={IMG6} alt='powershower app'></img>
            </div>
            <h3>Power Shower App</h3>
            <p className='portfolio__item-language'>JavaScript, React Native</p>
            <p className='portfolio__item-desc'>This React Native application facilitates real-time interaction with IoT devices, allowing users to connect, control, and monitor their devices. It provides live updates on device performance and usage statistics. The app integrates with external APIs for enhanced functionality, enabling seamless device management and interaction. Its modular structure and robust design make it a comprehensive tool for managing IoT-enabled devices efficiently.</p>
            <div className="portfolio__item-cta">
              <a href="https://www.powershower.app" className='btn ' target='_blank'>Website</a>
              <a href="https://apps.apple.com/us/app/power-shower/id6474043510" className='btn' target='_blank'>App Store</a>
              <a href="https://play.google.com/store/apps/details?id=com.powershower.powershower&hl=en_US" className='btn' target='_blank'>Play Store</a>
              <a href="https://github.com/kashavpiya/IOT-app" className='btn btn-primary' target='_blank'>Code Sample</a>
            </div>
          </article>
        </div>

        <div className='container portfolio__container1' style={{ marginBottom: '2.5rem' }}>
          <article className='portfolio__item'>
            <div className='portfolio__item-img'>
              <img src={IMG5} alt='Mavs Adventure'></img>
            </div>
            <h3>Mav's Adventure</h3>
            <p className='portfolio__item-language'>C#, Unity</p>
            <p className='portfolio__item-desc'>Mav's Adventure is a C# Unity-based side-scroller game where players navigate through levels, avoiding obstacles and collecting gems. The game's objective is to help the character "Mav" gather as many gems as possible while overcoming various challenges. Built using Unity's 2D engine, this project emphasizes smooth movement, physics interactions, and simple yet engaging gameplay mechanics, offering a fun and challenging experience for players.</p>
            <div className="portfolio__item-cta">
              <a href="https://github.com/kashavpiya/Project-D" className='btn' target='_blank'>Code Sample</a>
              <a href="https://kashavpiya19.itch.io/petsadventure" className='btn btn-primary' target='_blank'>Download Here</a>
            </div>
          </article>
        </div>


      <div className='container portfolio__container'>

        <article className='portfolio__item'>
            <div className='portfolio__item-img'>
              <img src={IMG7} alt='alexa lambda'></img>
            </div>
            <h3>Alexa Skill Lambda</h3>
            <p className='portfolio__item-language'>JavaScript, Angular</p>
            <p className='portfolio__item-desc'>This project is a Node.js-based application designed for integration with Amazon Alexa. It includes various JavaScript files for handling Alexa sessions, workshops, and APIs. The project features AWS Secret Manager integration for secure API token management and includes functionality for real-time operations like checking the status of a smart device. This setup allows Alexa to interact with external services via Lambda functions for voice-enabled control.</p>
            <div className="portfolio__item-cta">
              <a href="https://github.com/kashavpiya/AlexaLambda" className='btn btn-primary' target='_blank'>GitHub</a>
            </div>
          </article>

          <article className='portfolio__item'>
            <div className='portfolio__item-img'>
              <img src={IMG8} alt='IotBackend'></img>
            </div>
            <h3>Spring based Application</h3>
            <p className='portfolio__item-language'>Java, Spring Boot, SQL, OAuth2.0, JWT</p>
            <p className='portfolio__item-desc'>This project is a Spring Boot-based backend project that implements JWT authentication with Spring Security. It supports user registration, login, and authorization, and integrates with PostgreSQL or MySQL databases. The backend handles secure access to IoT devices and provides a framework for managing device data. The project includes Docker support and uses Spring Data JPA for database interactions, ensuring a secure and scalable backend for IoT applications.</p>
            <div className="portfolio__item-cta">
              <a href="https://github.com/kashavpiya/IoTAppBackend" className='btn btn-primary' target='_blank'>GitHub</a>
            </div>
          </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-img'>
            <img src={IMG1} alt='gooselake website'></img>
          </div>
          <h3>City of Goose Lake Website</h3>
          <p className='portfolio__item-language'>HTML/CSS, JavaScript, PHP</p>
          <p className='portfolio__item-desc'>I designed and developed the official website for Goose Lake, Iowa, creating a user-friendly platform that provides visitors and residents with easy access to important community information. The site features responsive design, ensuring it functions smoothly on various devices, and includes essential resources such as local events, city services, and contact information for city officials.</p>
          <div className="portfolio__item-cta">
            <a href="https://www.gooselakeiowa.org" className='btn btn-primary' target='_blank'>Live Website</a>
          </div>
        </article>


        <article className='portfolio__item'>
          <div className='portfolio__item-img'>
            <img src={IMG2} alt='starflower clinic website'></img>
          </div>
          <h3>StarFlower Clinic Website</h3>
          <p className='portfolio__item-language'>HTML/CSS, JavaScript, PHP</p>
          <p className='portfolio__item-desc'>I developed the website for Starflower Clinic, focusing on creating an accessible and visually appealing platform for clients seeking healthcare services. The site includes information about services, appointments, and the clinic's mission, with a clean and intuitive user interface. It is designed to be responsive, providing a seamless experience across all devices while ensuring clear navigation for users looking to book appointments or learn more about the clinic's offerings.</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/kashavpiya/Star-Flower" className='btn' target='_blank'>Code Sample</a>
            <a href="https://www.starflowerclinic.com" className='btn btn-primary' target='_blank'>Live Website</a>
          </div>
          </article>


        <article className='portfolio__item'>
          <div className='portfolio__item-img'>
            <img src={IMG3} alt='car simulator'></img>
          </div>
          <h3>Car Simulator</h3>
          <p className='portfolio__item-language'>Java</p>
          <p className='portfolio__item-desc'>This Project is a Java-based simulation project that creates a mini car game. It implements the rules and mechanics of the game, such as car movement, collision detection, and scoring. It also manages user inputs, such as keyboard or mouse events, to control the car’s movement and other game actions.</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/kashavpiya/FinalCarProject" className='btn' target='_blank'>Github</a>
          </div>
        </article>


        <article className='portfolio__item'>
          <div className='portfolio__item-img'>
            <img src={IMG4} alt='Sorting algorithm visualizer'></img>
          </div>
          <h3>Sorting Algorithm Visualizer</h3>
          <p className='portfolio__item-language'>Python, tkinter</p>
          <p className='portfolio__item-desc'>This project provides a visual representation of various sorting algorithms, allowing users to see how these algorithms operate step-by-step. It is particularly useful for educational purposes, helping to illustrate the inner workings of sorting algorithms in a clear and interactive manner.</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/kashavpiya/Sorting_Visualizer" className='btn' target='_blank'>Github</a>
          </div>
        </article>

        
      </div>
    </section>
  )
}

export default Portfolio
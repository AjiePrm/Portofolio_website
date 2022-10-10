import React from 'react'
import './About.css'
import Me from '../../assets/abt.png'
import {GiGraduateCap} from 'react-icons/gi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get In To</h5>
      <h2>About Me</h2>


      <div className='container about_container'>
        <div className="about_me">
            <div className="about_me-img">
              <img src={Me} alt="About_Image"/>
            </div>
        </div>

        <div className="about_content">
            <div className="about_cards" >
              <article className='about_card'>
                <GiGraduateCap className='abt_icon'/>
                <h5>Universitas Sriwijaya</h5>
                <small>Bachelor's Degree Computer System (S.Kom)</small>
                <a className='detail' href='https://unsri.ac.id/' target="blank">Detail!</a>
              </article>
            </div>
            <p>One of the goals of higher education is to produce graduates who can carry out development in accordance with the needs of national development. Because the need for national development 
              is not something static, meaning that it will always change according to changes in regional and global situations, universities are also required to constantly change and adapt to changing 
              needs and development, in addition to adapting to the development of science, technology, art and science.
              </p>
    
        </div>
      </div>
      
    </section>
  )
}

export default About
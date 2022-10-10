import React from 'react'
import './exp.css'
import Expart from './expart'
import Backexp from './backexp'
//import {BsFillCheckCircleFill} from 'react-icons/bs'
//import {TbCrosshair} from 'react-icons/tb'

import {FaReact} from 'react-icons/fa'
import {TbBrandNextjs} from 'react-icons/tb'
import {SiVuedotjs} from 'react-icons/si'
import {FaAngular} from 'react-icons/fa'
import {DiJqueryLogo} from 'react-icons/di'






const exp = () => {
  return (
    <section id='experiences'>
      <h5>Get In To</h5>
      <h2>My Learning List</h2>

      <div class="container_exp1">
        <div class="card_exp1">
          <div class="box_exp1">
            <div class="content_exp1">
              <h2>Frontend Framework</h2>
              <img src="https://cleancommit.io/static/e0da0dde2d6b2cf14f050183908c6e88/b2405/frontend-frameworks.jpg" alt="framewrok" />
            </div>
            <div class='card_list'>
              <li> <i><FaReact/></i> React.js</li>
              <li> <i><TbBrandNextjs/></i> next.js</li>
              <li> <i><SiVuedotjs/></i> vue.js</li>
              <li> <i><FaAngular/></i> angular.js</li>
              <li> <i><DiJqueryLogo/></i> jQuery</li>
            </div>
          </div>
          <Expart/>
          <Backexp/>
        </div>
      </div>   
      
    </section>
  )
}

export default exp
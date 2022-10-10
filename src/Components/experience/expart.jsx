import React from 'react'
import {DiCss3} from 'react-icons/di'
import {FaBootstrap} from 'react-icons/fa'
import {SiTailwindcss} from 'react-icons/si'
import {SiBulma} from 'react-icons/si'



const expart = () => {
  return (
    
        <div class="box_exp1">
            <div class="content_exp1">
                <h2>CSS Framework</h2>
                <img src="https://cleancommit.io/static/e0da0dde2d6b2cf14f050183908c6e88/b2405/frontend-frameworks.jpg" alt="framewrok" />
            </div>
            <div class='card_list'>
                <li> <DiCss3/> PureCSS</li>
                <li> <FaBootstrap/> Bootstrap</li>
                <li> <SiTailwindcss/> Tailwind</li>
                <li> <SiBulma/> Bulma</li>
                <li> <DiCss3/> Sematic UI</li>
            </div>   
        </div>
  )
}

export default expart
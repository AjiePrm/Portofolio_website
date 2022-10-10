import React from 'react'
import {SiNestjs} from 'react-icons/si'
import {DiNodejsSmall} from 'react-icons/di'

const backexp = () => {
  return (
    <div class="box_exp1">
            <div class="content_exp1">
                <h2>NodeJS Framework</h2>
                <img src="https://cdn-cdpl.sgp1.cdn.digitaloceanspaces.com/source/998b78e349061b4971c0a2b0e8d6be41/nodejs-frameworks.png" alt="framewrok" />
            </div>
            <div class='card_list'>
                <li> <i><DiNodejsSmall/></i> ExpressJS</li>
                <li> <DiNodejsSmall/> KoaJS</li>
                <li> <i><SiNestjs/></i> NestJS</li>
            </div>   
        </div>
  )
}

export default backexp
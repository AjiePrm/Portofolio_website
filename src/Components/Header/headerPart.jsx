import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'

const headerPart = () => {
  return (
    <div class="header_icon">
      <a href="https://www.linkedin.com/in/ajieprima0/" target='blank'> <i class="ji ji-Linkdin" aria-hidden="true"><FaLinkedin/></i></a>
      <a href="https://github.com/AjiePrm" target='blank'> <i class="ji ji-Github" aria-hidden="true"><AiFillGithub/></i></a>
      <a href="https://www.instagram.com/aajie.primaa/" target='blank'> <i class="ji ji-instagram" aria-hidden="true"><AiFillInstagram/></i></a>
    </div>
  )
}

export default headerPart
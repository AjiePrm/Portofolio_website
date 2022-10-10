import React from 'react'
import './header.css'
import CVA from './cva'
import HeaderPart from './headerPart'

const Header = () => {
  return (
    <header>
      <div className="container header_container"></div>
      <h2>Hello I'm</h2>
      <h2 className='text-light'>Software Engineer Enthusiast</h2>
      <CVA/>

      <div class="container_ajie">
          <div class="cards card_ajie">
            <div class="border_ajie">
              <h2 class='na nama'>Ajie Salahudin Prima</h2>
              <HeaderPart/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
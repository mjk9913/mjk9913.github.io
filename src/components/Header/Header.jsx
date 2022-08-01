import React from 'react'
import './header.css'
import {Link} from 'react-scroll'


function Header() {
  return (

    
    <div class="header">
      <div class="name-h"> Min Jie Kim </div>
      <ul class="option">
        <Link activeClass="active" smooth spy to="scroll1" ><li>about</li> </Link>
        <Link activeClass="active" smooth spy to="scroll2" ><li>experiences</li> </Link>
        <Link activeClass="active" smooth spy to="scroll3" ><li>projects</li> </Link>
        <Link activeClass="active" smooth spy to="scroll4" ><li>contact</li> </Link>
      </ul>
    </div> 
    
  )
}

export default Header